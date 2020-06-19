<template>
	<view>
		<!-- <c-custom-mid style="margin-bottom: 90rpx;">
			<block slot="center"><text style="color: #000000;">Ta的缘来</text></block>
		</c-custom-mid> -->
		<c-scroll @scrolltolower="lower" midHeight>
			<c-home dotsShow :listData="listData" :isLoad="isLoad"></c-home>
		</c-scroll>
	</view>
</template>

<script>
import { mapState } from 'vuex'
import cHome from '@/components/conlove/c-home.vue'
import cCustomMid from '@/components/conlove/c-custom-mid.vue';
export default {
	components: {
		cHome, cCustomMid
	},
	
	computed: mapState([
	  // 映射 this.newHome 为 store.state.newHome
	  'newHome'
	]),
	data() {
		return {
			listData: [], // 首页列表渲染的数据
			currentPage: 1, //当前请求页
			totalPage: 5, // 帖子总页数
			isNoData: false, //延迟2s拿数据
			newData: {
				id: 2,
				images: ['/static/image/home.jpg'],
				school: '西安电子科技大学',
				grade: '研一',
				hidePost: false,
				sex: 0,
				age: '1998-10-28',
				height: 170,
				userDto: {
					avatarUrl: '/static/image/default.jpeg',
					nickname: '测试小助手'
				},
				title: '缘来~~~~'
			},
			isLoad: false,
			loadCnt: 0,
		};
	},
	onLoad() {
		// this.init();
		// console.log(this.listData);
	},
	onPullDownRefresh() {
		// this.init();
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onShow() {
		this.listData = []
		this.listData.push(...this.newHome)
		this.listData.push(this.newData)
		this.listData.push(this.newData)
	},
	methods: {
		/**
		 * 初始化拿数据,清空原数据之后请求
		 */
		init() {
			this.currentPage = 1;
			this.listData = [];
			this.getListData();
			// 延迟获取数据
			this.isNoData = false;
			setTimeout(() => {
				this.isNoData = true;
			}, 5000);
		},
	
		/**
		 * 获取首页列表的数据
		 */
		getListData() {
			this.$http
				.get('/homepage/getSticker', {
					page: this.currentPage
				})
				.then(res => {
					this.listData.push(...res.data.stickers);
					this.totalPage = res.data.totalPage;
				});
		},
	
		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			if(this.loadCnt > 0) return ;
			if(this.isLoad) return ;
			this.loadCnt++;
			setTimeout(() => {
				this.currentPage++;
				if (this.currentPage <= this.totalPage) {
					this.listData.push(this.newData);
					this.listData.push(this.newData);
					this.listData.push(this.newData);
				} else {
					this.isLoad = true;
				}
				this.loadCnt--;
			},500)
			
			// this.getListData();
		},
	
		/**
		 * 获取性别图片地址
		 */
		getSexImage(sex) {
			return require('@/static/image/' + (sex === 0 ? 'male.png' : 'female.png'));
		},
	
		/**
		 * 跳转首页详情
		 */
		navToHomeDetail(id) {
			uni.navigateTo({
				url: '/pages/home/homeDetail?id=' + id
			});
		}
	}
}
</script>

<style></style>

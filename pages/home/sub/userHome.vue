<template>
	<view>
		<c-custom-mid><block slot="center">
			{{nickName}}
		</block></c-custom-mid>
		<c-scroll @scrolltolower="lower" midHeight >
			<c-home :lists="list" :isLoad="isLoad" 
			 @chang-public="changPublic" @delete="deleteSticker"
			 />
		</c-scroll>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			list: [], // 首页列表渲染的数据
			isNoData: false, //延迟2s拿数据
			isLoad: false,
			loadCnt: 0,
			page: 1, //当前请求页
			pageSize: 4, // 每页数量
			totalPage: 0, // 总页数
			nickName: '',
		};
	},
	
	onLoad({id}) {
		this.init(id);
		this.$eventBus.$on('update-sticker', ()=>{
			this.init(id)
		})
	},

	methods: {
		/**
		 * 初始化拿数据,清空原数据之后请求
		 */
		init(id) {
			this.list = [];
			this.page = 1;
			this.getUser(id);
			this.getListData(id);
		},
		getUser(id) {
			this.$http.get('/getUser', {id}).then(res => {
				this.nickName = res.data.user.nickName + '的缘来'
			})
		},
		/**
		 * 获取首页列表的数据
		 */
		getListData(id) {
			let data = {id, page: this.page, pageSize: this.pageSize}
			this.$http.get('/user/getUserSticker', data).then(res => {
				res = res.data;
				this.totalPage = res.pages;
				this.list.push(...res.list);
				if(this.totalPage <= this.page) {
					this.isLoad = true;
				}
			})
		},

		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			// loadCnt 防止划多次
			if(this.loadCnt > 0) return ;
			if(this.isLoad) return ;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getListData();
			else this.isLoad = true;
			this.loadCnt--;
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
		},
		
		// 公开/私有 
		changPublic(idx) {
			this.list[idx].isPublic ^= 1;
			this.$http.post('/updateSticker', {sticker: this.list[idx]});
		},
		
		// 删除帖子
		deleteSticker(idx) {
			this.$http.post('/deleteSticker',this.list[idx]).then(res => {
				this.list.splice(idx, 1);
			})
		}
		
			
	}
};
</script>

<style lang="stylus">

</style>

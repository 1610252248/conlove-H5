<template>
	<view class="page-content">
		<c-scroll @scrolltolower="lower">
			<view class="display-box solids-bottom" v-for="(item, index) in listData" :key="index" @click="navToHomeDetail(item.id)">
				<image lazy-load class="box-image" :src="item.images[0]" mode="widthFix"></image>
				<view class="box-info-up">
					<text class="fl">{{ item.school + ' | ' + item.grade }}</text>
					<image class="sex-image fl" :src="getSexImage(item.sex)"></image>
					<text class="fr">{{ $utils.getAge(item.age) + '岁 | ' + item.height + 'cm' }}</text>
				</view>
				<view class="box-info-down">
					<view class="user fl flex align-center">
						<image class="userAvatar" :src="item.userDto.avatarUrl"></image>
						<text class="box-userName text-cut">{{ item.userDto.nickname }}</text>
					</view>
					<view class="title fr flex align-center">
						<text class="cuIcon-notification"></text>
						<text class="title-text text-cut">{{ item.title }}</text>
					</view>
				</view>
			</view>
			<view class="cu-load" :class="!isLoad?'loading':'over'"></view>
			<!-- <view class="box-no-data">
				<text v-show="isShowDiv">~~~~~~ 我是有界线的 ~~~~~~</text>
				<text v-show="isNoData && listData.length" class="cuIcon-loading2">加载中...</text>
				<text v-show="isNoData && !listData.length" class="cuIcon-loading2">出了点小问题，暂时没有数据</text>
			</view> -->
		</c-scroll>
	</view>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: mapState([
	  // 映射 this.newHome 为 store.state.newHome
	  'newHome'
	]),
	data() {
		return {
			listData: [], // 首页列表渲染的数据
			currentPage: 1, //当前请求页
			totalPage: 5, // 帖子总页数
			isShowDiv: false, //显示‘我是有界限的’
			isNoData: false, //延迟2s拿数据
			newData: {
				id: 2,
				images: ['/static/image/home.jpg'],
				school: '西安电子科技大学',
				grade: '研一',
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
		console.log(this.newHome);
		this.listData = []
		this.listData.push(...this.newHome)
		this.listData.push(this.newData)
		this.listData.push(this.newData)
		console.log(this.listData);
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
};
</script>

<style lang="stylus">
.scroll-view
	height 100vh
	/* #ifdef  H5 */
	height calc(100vh - 94px)
	/* #endif */
	overflow scroll
	width 100%
.display-box
	width 100%
	display flex
	flex-direction column
	align-items center
	padding 30rpx 0
	margin 0rpx auto 20rpx
.box-image
	width 90%
	border-radius 20rpx
	box-shadow 0rpx 0rpx 20rpx 4rpx rgba(51, 51, 51, 0.15)
.box-info-up
	width 90%
	font-size 28rpx
	color #333333
	margin 30rpx auto 20rpx
.box-info-down
	width 90%
	height 60rpx
	.user
		max-width 45%
		.box-userName
			position relative
			top 5rpx
			font-size 28rpx
			color #333333
			margin-left 10rpx
			max-width 70%
	.title
		max-width 45%
		height 100%
		font-size 30upx
		color #333333
		font-weight 600
		.title-text
			margin-left 10upx
.box-no-data
	width 100%
	height 40rpx
	// margin-bottom: 20rpx;
	text-align center
.goToTop
	position fixed
	bottom 55rpx
	right 8rpx
	z-index 99999
	/* #ifdef  H5 */
	bottom 150rpx
	/* #endif */
.top-image
	width 44rpx
	height 68rpx
</style>

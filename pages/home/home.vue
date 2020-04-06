<template>
	<view class="page-content">
		<c-scroll @scrolltolower="lower">
			<view class="display-box solids-bottom" v-for="item in listData" :key="item.id" @click="navToHomeDetail(item.id)">
				<image lazy-load class="box-image" :src="item.images[0]" mode="widthFix"></image>
				<view class="box-info-up">
					<text class="fl">{{ item.school + ' | ' + item.grade }}</text>
					<image class="sex-image fl" :src="getSexImage(item.sex)"></image>
					<text class="fr">{{ $utils.getAge(item.age) + '岁 | ' + item.height + 'cm' }}</text>
				</view>
				<view class="box-info-down">
					<view class="user fl flex align-center">
						<image class="userAvatar" :src="item.userDto.avatarUrl"></image>
						<text class="box-userName text-hidden">{{ item.userDto.nickname }}</text>
					</view>
					<view class="title fr flex align-center">
						<text class="cuIcon-notification"></text>
						<text class="title-text text-hidden">{{ item.title }}</text>
					</view>
				</view>
			</view>
			
			<view class="box-no-data">
				<text v-show="isShowDiv">~~~~~~ 我是有界线的 ~~~~~~</text>
				<text v-show="isNoData && listData.length" class="cuIcon-loading2">加载中...</text>
				<text v-show="isNoData && !listData.length" class="cuIcon-loading2">出了点小问题，暂时没有数据</text>
			</view>
		</c-scroll>
	</view>
</template>

<script>

/**
 * 使用混合 把data和menthods 的方法抽出来了
 */

export default {
	data() {
		return {
			listData: [], // 首页列表渲染的数据
			currentPage: 1, //当前请求页
			totalPage: 0, // 帖子总页数
			isShowDiv: false, //显示‘我是有界限的’
			isNoData: false //延迟2s拿数据
		};
	},
	onLoad() {
		this.init();
	},
	onPullDownRefresh() {
		this.init();
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 1000);
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
			this.currentPage++;
			if (this.currentPage > this.totalPage) {
				this.isShowDiv = true;
				return;
			}
			this.getListData();
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
	font-size $uni-font-size-base
	color #333333
	margin 30rpx auto 20rpx
.box-info-down
	width 90%
	height 60rpx
	.user
		max-width 45%
		.box-userName
			font-size $uni-font-size-base
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

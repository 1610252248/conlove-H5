<template>
	<view class="page-content">
		<view class="user-info">
			<view class="box-info-up">
				<!-- <text class="fl">{{item.school + " | " + item.grade}}</text>
				<image class="sex-image fl" :src="getSexImage(item.sex)"></image>
				<text class="fr">{{$utils.getAge(item.age) + "岁 | " + item.height + "cm"}}</text> -->
				<text class="fl">西安电子科技大学 | 大四</text>
				<image class="sex-image fl" :src="getSexImage(0)"></image>
				<text class="fr">{{ '18岁 | 180cm' }}</text>
			</view>
			<view class="box-info-down">
				<!-- <view class="user fl flex align-center">
					<image class="box-userAvatar" :src="item.userDto.avatarUrl"></image>
					<text class="box-userName text-hidden">{{item.userDto.nickname}}</text>
				</view>
				<view class="title fr flex align-center">
					<text class="cuIcon-notification"></text>
					<text class="title-text text-hidden">{{item.title}}</text>
				</view> -->

				<view class="user fl flex align-center">
					<image class="box-userAvatar" src="@/static/image/avatar-default.png"></image>
					<text class="box-userName text-hidden">xxxxxxxxxxxxxxxxxxx</text>
				</view>
				<view class="title fr flex align-center">
					<text class="cuIcon-notification"></text>
					<text class="title-text text-hidden">xxxxxxxxxxxxxxxxxxx</text>
				</view>
			</view>
		</view>
		<view class="user-info-image">
			<!-- <swiper class="card-swiper round-dot" circular autoplay  @change="cardSwiper"
			 indicator-color="#8799a3" indicator-active-color="#0081ff"
			 >
				<swiper-item v-for="(item,index) in imageList" :key="index" :class="cardCur==index?'cur':''" :data-url="item"
				 @tap.stop="ViewImage">
					<view class="swiper-item">
						<image :src="item" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper> -->
			<swiper class="card-swiper square-dot"  indicator-dots circular autoplay 
			 @change="cardSwiper" indicator-color="#8799a3"
			 indicator-active-color="#0081ff">
				<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cardCur: 0,
			sticker: {}, //帖子详情
			imageList: [], //帖子图片对象
			swiperList: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
			]
		}
	},
	
	onLoad(option) {
		this.getData(option.id);
	},
	
	methods: {
		/**
		 * 获取请求
		 */
		getData(stickerId) {
			this.$http.get('/homepage/getStickerById', {
				stickerId: stickerId,
				openid: '24f932581ad54fcc9a6aef8b09738a28'
			}).then(res => {
				this.sticker = res.data.sticker;
				this.imageList = this.sticker.images;
				this.swiperList = this.sticker.images;
				console.log(res);
			})
		},
		
		
		/**
		 * 获取性别图片地址
		 */
		getSexImage(sex) {
			return require('@/static/image/' + (sex === 0 ? 'male.png' : 'female.png'));
		},
		
		ViewImage() {
			
		},
		
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current
		},
	}
};
</script>

<style lang="stylus">
.user-info
	width 100%
	color #333333
	font-size $uni-font-size-base
.box-info-up
	width 85%
	height 55rpx
	margin 30rpx auto 0
.box-info-down
	width 85%
	height 55rpx
	margin 0 auto 30rpx
	.user
		max-width 45%
		.box-userAvatar
			width 55rpx
			height 55rpx
			border-radius 50%
		.box-userName
			margin-left 10rpx
			max-width 70%
	.title
		max-width 45%
		height 100%
		font-size 30upx
		font-weight 600
		.title-text
			margin-left 10upx
.user-info-image {
	width 100%
}
</style>

<template>
	<view class="page-content">
		<c-scroll v-if="Object.keys(sticker).length">
			<view class="user-info">
				<view class="box-info-up">
					<text class="fl">{{sticker.school + " | " + sticker.grade}}</text>
					<image class="sex-image fl" :src="getSexImage(sticker.sex)"></image>
					<text class="fr">{{$utils.getAge(sticker.age) + "岁 | " + sticker.height + "cm"}}</text>
				</view>
				<view class="box-info-down">
					<view class="user fl flex align-center">
						<image class="userAvatar" :src="sticker.userDto.avatarUrl"></image>
						<text class="box-userName text-cut">{{sticker.userDto.nickname}}</text>
					</view>
					<view class="title fr flex align-center  text-bold">
						<text class="cuIcon-notification"></text>
						<text class="title-text text-cut">{{sticker.title}}</text>
					</view>
				</view>
			</view>
			<view class="user-info-image">
				<!-- 喜欢按钮 -->
				<view class="like-box" v-if="!isMyPost">
					<image class="like" :src="isLike ? '/static/image/pic-like-active.png' : '/static/image/pic-like-normal.png'"></image>
				</view>
				<!-- 图片轮播 -->
				<swiper class="card-swiper square-dot" indicator-dots circular autoplay @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
					<swiper-item v-for="(item, index) in sticker.images" :key="index" :class="cardCur == index ? 'cur' : ''">
						<view class="swiper-item"><image :src="item" mode="aspectFill"></image></view>
					</swiper-item>
				</swiper>
				<!-- 帖子详情 -->
				<view class="margin-left-sm  text-left">
					<view class="padding-lg text-gray text-wrap">
						<view>{{ sticker.introduce }}</view>
					</view>
				</view>
			</view>
			<!-- 夸夸墙 -->
			<view class="praise-wall">
				<!-- 标题 -->
				<view class="cu-bar justify-center bg-white">
					<view class="action sub-title">
						<text class="text-xl text-bold text-red">夸夸墙</text>
						<text class="bg-red"></text>
					</view>
				</view>
				<c-comment :showInfo="false"></c-comment>
				<!-- 评论 -->
				<!-- <view class="cu-list menu-avatar comment solids-top padding-top-sm">
					<view class="cu-item" v-for="item in sticker.comments" :key="item.id" :id="item.id">
						<image
							class="cu-avatar round"
							:src="item.userDto !== null ? item.userDto.avatarUrl : '/static/avatar-default.png'"
							@click="navToOtherUser(item.openid)"
						></image>
						<view class="content">
							<view>
								<view class="text-grey" @click="navToOtherUser(item.openid)">{{ item.userDto !== null ? item.userDto.nickname : '无名氏' }}</view>
								<text v-for="(num, index) in hotNums" :key="index" v-if="item.likeNums >= num" class="cuIcon-hotfill text-red"/>
								<view  class="on-right text-lg" :class="item.likeState !== 0 ? 'text-red' : 'text-grey'" @click="chageAppreciation(item.likeState, item.openid, item.id)">
									<text class="cuIcon-appreciate"></text>
									<text class="margin-left-xs">{{ item.likeNums }}</text>
								</view>
							</view>
							<view class="text-gray text-wrap text-df">{{item.content}}</view>
						</view>
					</view>
				</view> -->
			</view>
		</c-scroll>
		
		<view class="cu-bar input input-fixed">
			<input  placeholder="请输入评论..."  @blur="InputBlur" :adjust-position="false" class="solid-bottom padding-left-sm solid" :focus="false" maxlength="300" cursor-spacing="10"></input>
			<button class="cu-btn round bg-blue shadow-blur" @click="sendComment">发送</button>
		</view>
	</view>
</template>

<script>

import cComment from '@/components/conlove/c-comment.vue';
export default {
	components: {
		cComment
	},
	data() {
		return {
			cardCur: 0,
			sticker: {
				school: '西安电子科技大学',
				grade: '研一',
				sex: 0,
				age: '1998-10-28',
				height: 170,
				userDto: {
					avatarUrl: '/static/image/default.jpeg',
					nickname: '测试小助手'
				},
				title: '缘来~~~~',
				images: [
					'/static/image/view-1.jpg',
					'/static/image/view-2.jpg',
					'/static/image/view-3.jpg',
				]
			}, //帖子详情
			imageList: [], //帖子图片对象
			isMyPost: false, // 是否是自己发的帖子，如果是则不能点赞
			isLike: false, // 用户是否点赞
			hotNums: [5, 10], // 点赞每超过几个有热度图标，暂时2个
			inputValue: '' //用户评论的内容
		};
	},
	onLoad(option) {
		// this.getData(option.id);
	},

	methods: {
		/**
		 * 获取请求
		 */
		getData(stickerId) {
			this.$http
				.get('/homepage/getStickerById', {
					stickerId: stickerId,
					openid: '24f932581ad54fcc9a6aef8b09738a28'
				})
				.then(res => {
					this.sticker = res.data.sticker;
					this.imageList = this.sticker.images;
					this.swiperList = this.sticker.images;
					console.log(res);
				});
		},

		/**
		 * 获取性别图片地址
		 */
		getSexImage(sex) {
			return require('@/static/image/' + (sex === 0 ? 'male.png' : 'female.png'));
		},

		ViewImage() {},

		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},
		
		/**
		 * 评论输入框失焦时触发，获取用户输入
		 */
		InputBlur(e) {
			this.inputValue =  e.detail.value;
		},
		
		/**
		 * 发送评论事件
		 */
		sendComment() {
			console.log("发送的内容 ： " + this.inputValue);
		}
	}
};
</script>

<style lang="stylus">
.scroll-view
	height 100vh
	/* #ifdef  H5 */
	height calc(100vh - 80px)
	/* #endif */
	overflow scroll
	width 100%
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
	height 60rpx
	margin 0 auto 30rpx
	.user
		max-width 45%
		.box-userName
			position relative
			top 5rpx
			margin-left 10rpx
			max-width 70%
	.title
		max-width 45%
		height 100%
		font-size 30rpx
		// font-weight 600
		.title-text
			margin-left 10rpx
.user-info-image
	width 100%
	.like-box
		background-color rgba(135, 153, 163, 0.4)
		width 80rpx
		height 80rpx
		border-radius 50%
		position absolute
		top 635rpx
		right 85rpx
		z-index 99
		.like
			margin 20rpx 10rpx
			width 60rpx
			height 50rpx
			z-index 999
.card-swiper
	height 630rpx !important
	.praise-wall
		width 100%

.on-right
	margin-left auto
	margin-right 0
.input-fixed 
	position fixed
	bottom 0
	width 100%
	background-color #FFFFFF
	z-index 9999
</style>

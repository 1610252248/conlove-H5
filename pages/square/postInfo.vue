<template>
	<view class="post-info">
		<view class="box-content">
			<view class="flex justify-start align-center">
				<view style="height: 60rpx;">
					<image class="userAvatar" src="@/static/image/avatar-default.png" />
					<view class="cu-tag badge" :class="isFemale ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'" />
				</view>
				<view class="margin-left-sm">
					<view class="box-userName text-hidden">Bobbobbb</view>
					<view class="text-xs text-gray">2分钟前</view>
				</view>
			</view>
		</view>
		<view class="bg-white padding text-black padding-bottom-xs" v-if="avatar.length">
			<text class="text-wrap">起飞~~~！！不管你是什么。dddDancesdadazxxxxxxxxxxxxsadddddddddddddddddddddddadsaaaaaaaaaaaaaaaaaaaaaaaaass</text>
			<view class="grid grid-square margin-top-xs" :class="avatar.length == 1 ? 'col-1' : 'col-3'">
				<view class="bg-img " v-for="(item, index) in avatar" :key="index" :style="[{ backgroundImage: 'url(' + avatar[index] + ')' }]"></view>
			</view>
		</view>
		
		<!-- <view class="post-like">
			<view class="fl text-gray margin-left-lg text-xs"><text>52人 觉得很赞</text></view>
			<view class="fr">
				<image class="image-sm" src="@/static/image/like.png"></image>
				<image class="image-sm margin-left-sm margin-right-lg" src="@/static/image/chat-dot-round.png"></image>
			</view>
		</view> -->
		<!-- <c-info-bar showMode/> -->
	</view>
</template>

<script>
import cInfoBar from '@/components/conlove/c-info-bar.vue'	
export default {
	name: 'postInfo',
	components: {
		cInfoBar
	},
	data() {
		return {
			isFemale: false,
			avatar: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
			]
		};
	}
};
</script>

<style lang="stylus">
.post-info
	width 100%
.box-userName
	font-size $uni-font-size-base
	color #333333
	max-width 300rpx
.box-content
	width 90%
	margin 0 auto
.image-sm
	width 40rpx
	height 40rpx
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
.cu-tag.badge
	top 63rpx
	left 75rpx
</style>

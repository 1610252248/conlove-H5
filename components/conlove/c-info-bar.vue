<template>
	<view class="post-like">
		<view class="fl text-gray margin-left-lg text-sm">
			<view v-if="showMode">52人 觉得很赞</view>
			<view v-else>
				<text>赞 12</text>
				<text class="margin-left">评论 7</text>
			</view>
			
			
		</view>
		<view class="fr">
			<image class="image-sm" src="@/static/image/like.png"></image>
			<image class="image-sm margin-left-sm margin-right-lg" src="@/static/image/chat-dot-round.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			/**
			 * 两种显示
			 * 1. xx人觉得很赞
			 * 2. 赞xx 评论xx
			 */
			showMode: { 
				type: Boolean,
				default: false
			},
		},
	}
</script>

<style lang="stylus">
.image-sm
	width 40rpx
	height 40rpx
.post-like
	height 40rpx
	line-height 40rpx
</style>

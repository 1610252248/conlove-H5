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
			<image @click.stop="changeLike" class="image-sm" :src="'/static/image/' + (isLike ? 'like-active.png' : 'like.png')"></image>
			<image @click.stop="clickMessage" class="image-sm margin-left-sm margin-right-lg" src="@/static/image/chat-dot-round.png"></image>
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
		data() {
			return {
				isLike: false
			}
		},
		methods: {
			changeLike() {
				let showTitle = '点赞成功';
				if(this.isLike) showTitle = '取消点赞';
				uni.showToast({
					title: showTitle,
					icon: 'none'
				})
				this.isLike = !this.isLike;
			},
			clickMessage() {
				this.$emit('click-message');
			}
		}
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

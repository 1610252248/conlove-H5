<template>
	<view class="info-bar"  v-if="Object.keys(data).length">
		<view class="fl text-gray  text-sm" >
			<view v-if="showMode">{{data.appreciate}}人 觉得很赞</view>
			<view v-else>
				<text>赞 {{data.appreciate}}</text>
				<text class="margin-left">评论 {{data.comments.length}}</text>
			</view>
		</view>
		<view class="fr">
			<image @click.stop="changeAppreciate" class="image-sm" :src="'/static/image/' + (isAppreciate ? 'like-active.png' : 'like.png')"></image>
			<image @click.stop="clickMessage" class="image-sm margin-left-sm" src="@/static/image/chat-dot-round.png"></image>
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
			isAppreciate: {
				type: Boolean,
				default: false
			},
			data: {
				type: Object,
				default: () => ({})
			}
		},
		data() {
			return {
				// isAppreciate: false
			}
		},
		methods: {
			changeAppreciate() {
				this.$emit('chang-appreciate')
				
				
				// this.isAppreciate = !this.isAppreciate;
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
.info-bar
	height 36rpx
	line-height 46rpx
	padding 0 30rpx
</style>

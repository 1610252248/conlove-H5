<template>
	<view class="reply-box" v-if="(comments != null && comments.length > 0) || cLength > 0">
		<view class="reply" v-for="(item, index) in comments" :key="index">
			<view class="margin-left-xs text-sm " style="max-width: 100%">
				<text class="text-blue ">{{ item.user.nickName + ': ' }}</text>
				<text class="text-black">{{ item.content }}</text>
			</view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
export default {
	props: {
		comments: {
			type: Array,
			default: () => {
				[];
			}
		},
		cLength: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			hotNums: [5, 10] // 点赞每超过几个有热度图标，暂时2个
		};
	},
	methods: {
		reply(name) {
			this.$emit('reply', name)
		}
	},
}
</script>

<style lang="stylus">
.on-right
	margin-left auto
	margin-right 0
.dot
	width 30rpx
	height 30rpx
	top 6rpx
	margin-left 10rpx
	margin-right 10rpx
.reply
	display flex
.reply-box
	width 100%
	background-color #f1f1f1;
	padding 10rpx 0 0rpx
.text-blue
	color: #2f62b5;

</style>

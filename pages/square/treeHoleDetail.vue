<template>
	<c-scroll>
		<view>
			<view class="flex padding justify-center">
				<image class="cu-avatar xl round margin-left" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" mode="aspectFill"></image>
			</view>
			<view class="box-content radius margin-center">
				<text class="text-white text-bold text-df padding-lr-xs">
					span多行居中测试span多行span多行居中测试span多行span多行居中测试span多行span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试
				</text>
			</view>
			<view class="middle"></view>
			<c-info-bar @click-message="clickMessage" />
		</view>
		<c-comment ref="comment" @scroll-to-bottom="scrollToBottom" class="margin-top-sm" />
	</c-scroll>
</template>

<script>
import cInfoBar from '@/components/conlove/c-info-bar.vue';
import cComment from '@/components/conlove/c-comment.vue';
import cScroll from '@/components/conlove/c-scroll.vue'
export default {
	name: 'treeHoleDetail',
	components: {
		cInfoBar,cComment,cScroll
	},
	methods: {
		scrollToBottom() {
			this.$refs.scroll.toBottom();
		},
		clickMessage() {
			this.focusComment();
		},
		focusComment() {
			this.$refs.comment.isFocus = true;
		}
	},
};
</script>
<style lang="stylus">
.box-content
	width 90%
	background-color #ffadad
	padding 20% 0
	margin-top -100rpx
	margin-bottom 20rpx
	border 1px solid #c7c7c7
	display table
	text
		display table-cell
		vertical-align middle
		text-align center
.cu-avatar
	z-index 999
</style>
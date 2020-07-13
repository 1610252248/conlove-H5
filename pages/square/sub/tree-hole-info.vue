<template>
	<view>
		<view class="flex padding justify-center">
			<image class="cu-avatar xl round " :src="data.avatar" mode="aspectFill" />
		</view>
		<!-- 树洞内容 -->
		<view class="box-content radius margin-center" :style="{ backgroundColor: data.bgColor }">
			<text class="text-white text-bold text-df padding-lr-xs">{{ data.content }}</text>
		</view>
	</view>
</template>

<script>
export default{
	props: {
		data: {
			type: Object,
			default: () => ({})
		},
	},
}
</script>

<style lang="stylus">
.box-content
	width 90%
	padding 30% 0
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

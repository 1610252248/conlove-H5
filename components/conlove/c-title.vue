<template>
	<!-- 提示语 -->
	<view class="flex justify-center">
		<view class="flex tips-border justify-start align-center">
			<u-avatar @click="uploadAvatar" size="206" :src="imageSrc" />
			<view class="title-text">
				<slot name="content"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			imageSrc: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			uploadAvatar() {
				this.$emit('upload-avatar')
			}
		},
	}
</script>

<style lang="stylus">
.tips-border
	width 100%
	height 206rpx
	margin-top 90rpx
.title-text
	font-size 40rpx
	color #F384A2
	text-align left
	padding-left 40rpx
	view
		padding 12rpx 0
</style>

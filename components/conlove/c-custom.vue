<template>
	<view>
		<view class="navBar">
			<view class="fl">
				<text class="margin-left text-icon" @click="BackPage">
					<text class="text-icon cuIcon-back"></text>
				</text>
				<text class="margin-left-lg text-xl">
					<slot name="center"></slot>
				</text>
			</view>
			<view class="fr margin-right">
				<button class="cu-btn sm bg-red" @click="send">{{sendName}}</button>
			</view>
		</view>
		<view style="height: 90rpx;" />
	</view>
</template>

<script>
	export default {
		props: {
			sendName: {
				type: String,
				default: '发布'
			},
		},
		methods: {
			BackPage() {
				if(getCurrentPages() && getCurrentPages().length == 1) {
					history.back();
					return ;
				} 
				uni.navigateBack();
				// history.back();
			},
			send() {
				this.$emit('send');
			}
		},
	}
</script>

<style lang="stylus">
.navBar
	position fixed
	top 0
	width 100%
	height 90rpx
	line-height 90rpx
	z-index 111
	background-color white
.text-icon 
	font-size 40rpx
.cu-btn.sm
	padding: 0 22upx;
	font-size: 26upx;
	height: 48upx;
</style>

<template>
	<view>
		<view class="navBar cu-bar">
			<view class="action margin-left " @click="BackPage">
				<text class="text-icon"><text class="cuIcon-back"></text></text>
			</view>
			<view class="content text-bold">
				<slot name="center"></slot>
			</view>	
		</view>
		<view style="height: 82rpx;"></view>
	</view>
</template>

<script>
	export default {
		methods: {
			BackPage() {
				if(getCurrentPages().length == 1) {
					history.back();
					return ;
				} 
				uni.navigateBack({
					delta: 1
				});
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
	min-height 80rpx 
	line-height 80rpx
	z-index 111
	background-color white
.cu-bar 
	min-height 80rpx 
.cuIcon-back 
	font-size 42rpx
.cu-btn.sm
	padding: 0 22upx;
	font-size: 26upx;
	height: 48upx;

	
</style>

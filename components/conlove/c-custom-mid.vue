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
	z-index 9999
	background-color white
.cuIcon-back 
	font-size 42rpx
.cu-btn.sm
	padding: 0 22upx;
	font-size: 26upx;
	height: 48upx;

	
</style>

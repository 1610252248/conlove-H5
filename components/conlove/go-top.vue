<template>
	<view class="goToTop" @click="goTop()" v-show="canGoTop"><image class="top-image" src="@/static/image/top.png"></image></view>
</template>

<script>
export default {
	name: 'GoTop',
	props: {
		// 是否显示组件
		canGoTop: {
			type: Boolean,
			default: false
		},
	},
	methods: {
		/**
		 * 发射回顶部事件
		 */
		goTop() {
			this.$emit("go-top");
		}
	},
};
</script>

<style lang="stylus">
.goToTop
	position fixed
	bottom 55rpx
	right 8rpx
	z-index 99999
	/* #ifdef  H5 */
	bottom 150rpx
	/* #endif */
.top-image
	width 44rpx
	height 68rpx
</style>

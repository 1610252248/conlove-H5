<template>
	<view>
		<scroll-view :class="scrollHight?'scroll-height':''"  class="scroll-view" scroll-y @scrolltolower="scrolltolower" scroll-with-animation @scroll="scroll" :scroll-top="scrollTop" show-scrollbar>
			<slot></slot>
		</scroll-view>

		 <!-- 回顶部 -->
		<view class="goToTop" @click="goTop()" v-show="canGoTop"><image class="top-image" src="@/static/image/top.png" /></view>
	</view>
</template>

<script>


export default {
	props: {
		scrollHight: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			canGoTop: false, //回顶部
			canGoTopHeight: 2000, // 默认到2000高度出现回顶部图标
			scrollTop: 0, // 滚动窗口位置
			
			old: {
				scrollTop: 0
			}
		};
	},
	methods: {
		/**
		 * 发送划到底部事件
		 */
		scrolltolower() {
			this.$emit('scrolltolower');
		},
		/**
		 * 监听滚动位置，设置回顶部按钮
		 */
		scroll(e) {
			this.old.scrollTop = e.detail.scrollTop;
			this.canGoTop = e.detail.scrollTop > this.canGoTopHeight;
		},
		/**
		 * 回顶部事件
		 */
		goTop() {
			this.scrollTop = this.old.scrollTop;
			this.$nextTick(function() {
				this.scrollTop = 0;
			});
			this.canGoTop = false;
		}
	}
};
</script>

<style lang="stylus">
.scroll-view
	height 100vh
	/* #ifdef  H5 */
	height calc(100vh - 94px)
	/* #endif */
	overflow scroll
	width 100%

.scroll-height
	height 100vh!important

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

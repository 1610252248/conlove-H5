<template>
	<view >
		<scroll-view
			:class="[maxHeight ? 'max-height' : '', midHeight ? 'mid-height' : '', minHeight ? 'min-height' : '', mini ? 'mini-height' : '', $utils.isSafari() ? 'isSafari': '']"
			class="scroll-view"
			scroll-y
			@scrolltolower="scrolltolower"
			@scroll="scroll"
			:scroll-with-animation="isAnimation"
			:scroll-top="scrollTop"
			show-scrollbar
			:scroll-into-view="scrollId"
		>
			<slot></slot>
		</scroll-view>
		<!-- 回顶部 -->
		<view class="goToTop" @click="goTop()" v-show="canGoTop"><image class="top-image" src="@/static/image/top.png" /></view>
	</view>
</template>

<script>
export default {
	props: {
		maxHeight: {
			type: Boolean,
			default: false
		},
		midHeight: {
			type: Boolean,
			default: false
		},
		minHeight: {
			type: Boolean,
			default: false
		},
		mini: {
			type: Boolean,
			default: false
		},
		scrollId: {
			type: String,
			default: ''
		},
		/**
		 * 默认展示动画
		 */
		isAnimation: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			canGoTop: false, //回顶部
			canGoTopHeight: 2000, // 默认到2000高度出现回顶部图标
			scrollTop: 0, // 滚动窗口位置

			old: {
				scrollTop: 0
			},
			isSafari:  (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)),
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
		},

		/**
		 * 去底部
		 */
		toBottom() {
			this.scrollTop = this.old.scrollTop;
			this.$nextTick(function() {
				this.scrollTop = 99999999;
			});
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
.max-height
	height 100vh !important

.mid-height
	height calc(100vh - 49px) !important

.min-height
	height calc(100vh - 94px) !important

.mini-height
	height calc(100vh - 94px - 46px) !important

.max-height.isSafari
	height calc(100vh - 75px) !important
.mid-height.isSafari
	height calc(100vh - 49px - 75px) !important
.min-height.isSafari
	height calc(100vh - 94px - 75px) !important
.mini-height.isSafari
	height calc(100vh - 94px - 75px- 46px) !important
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

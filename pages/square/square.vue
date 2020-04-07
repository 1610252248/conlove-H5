<template>
	<view>
		<view class="bg-white nav text-black">
			<view class="cu-item text-lg  text-bold" v-for="(item, index) in navs" :key="index" @click="tabSelect(index)">
				<view class=" text-center">{{ item}}</view>
				<view :class="{active:tabCur==index}"></view>
			</view>
			<view class="add-fixed text-xxl" @click="navToNewSquare">
				<text class="cuIcon-roundaddfill"></text>
			</view>
		</view>
		<!-- <scroll-view  class="scroll-view" scroll-y @scrolltolower="lower" scroll-with-animation @scroll="scroll" :scroll-top="scrollTop" show-scrollbar>
			<view class="main-content">
				<post></post>
			</view>
		</scroll-view> -->
		<c-scroll class="main-content">
			<view v-if="tabCur == 0">
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
				<post></post>
			</view>
			<view v-else>
				<tree-hole/>
			</view>
			
		</c-scroll>
	</view>
</template>

<script>
import post from '@/pages/square/post.vue'
import treeHole from '@/pages/square/treeHole.vue'

export default {
	components: {post, treeHole},
	data() {
		return {
			tabCur: 0,
			navs:["说说", "树洞"],
			
		};
	},
	methods: {
		/**
		 * 导航切换["说说", "树洞"]
		 */
		tabSelect(index) {
			this.tabCur = index;
		},
		
		/**
		 * 发布新的["说说", "树洞"]
		 */
		navToNewSquare() {
			uni.navigateTo({
				url: this.tabCur == 0 ? '/pages/square/creatPost' : '/pages/square/creatTreeHole'
			})
		}
	}
};
</script>

<style lang="stylus">
.nav
	width 95%
	margin 0 auto
.cu-item
	margin 0
	view
		width 100rpx
	
.active
	position relative
	bottom 12rpx
	height 10rpx
	background-color #c0c0c0;
	border-radius 10rpx
.add-fixed 
	position fixed
	right 40rpx
	top 20rpx
.main-content 
	width 100%
.text-black {
	color: #000000;
}
	
</style>

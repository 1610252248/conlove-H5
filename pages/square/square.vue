<template>
	<view>
		<view class="bg-white nav text-black">
			<view class="cu-item text-lg  text-bold" v-for="(item, index) in navs" :key="index" @click="tabSelect(index)">
				<view class=" text-center">{{ item }}</view>
				<view :class="{ active: tabCur == index }"></view>
			</view>
			<view class="add-fixed text-xxl" @click="showModal"><text class="cuIcon-roundaddfill"></text></view>
		</view>
		<view class="cu-modal  bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog radius">
				<view class="cu-list menu text-black">
					<view class="cu-item">
						<view class="content" @click="navToNew(1)">发布说说</view>
					</view>
					<view class="cu-item">
						<view class="content" @click="navToNew(2)">发布树洞</view>
					</view>
					<view class="cu-item">
						<view class="content">取消</view>
					</view>
				</view>
			</view>
		</view>
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
			<view v-else><tree-hole /></view>
		</c-scroll>
	</view>
</template>

<script>
import post from '@/pages/square/post.vue';
import treeHole from '@/pages/square/treeHole.vue';

export default {
	components: { post, treeHole },
	data() {
		return {
			tabCur: 0,
			navs: ['说说', '树洞'],
			bottomModal: false
		};
	},
	methods: {
		/**
		 * 导航切换["说说", "树洞"]
		 */
		tabSelect(index) {
			this.tabCur = index;
		},
	
		showModal() {
			this.bottomModal = true;
		},
		hideModal() {
			this.bottomModal = false;
		},
		/**
		 * 跳转页面
		 * @param {Object} index
		 * 1: 说说 页面
		 * 2: 树洞 页面
		 */
		navToNew(index) {
			uni.navigateTo({
				url: index == 1 ? '/pages/square/creatPost' : '/pages/square/creatTreeHole'
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
	background-color #c0c0c0
	border-radius 10rpx
.add-fixed
	position fixed
	right 40rpx
	top 20rpx
.main-content
	width 100%
.text-black
	color #000000
.radius 
	border-top-right-radius 10rpx!important
	border-top-left-radius 10rpx!important
</style>

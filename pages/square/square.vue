<template>
	<view>
		<!-- 导航  动态/树洞 -->
		<view class="bg-white nav text-black">
			<view>
				<u-tabs :bar-height="8" :active-item-style="{'color':'#000000'}" :bar-style="{'background-color':'#c2c2c2'}"  :font-size="34" :bar-width="80" :gutter="40" :list="navs"  :current="tabCur" @change="changeTab"></u-tabs>
			</view>
			<view class="add-fixed text-xxl" @click="showModal"><text class="cuIcon-roundaddfill"></text></view>
		</view>
		
		<!-- 说说内容 -->
		<post v-if="tabCur == 0"/>
		<!-- 树洞内容 -->
		<tree-hole v-else/>
		
		
		<!-- 新建 -->
		<view class="cu-modal  bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog radius">
				<view class="cu-list menu text-black">
					<view class="cu-item"><view class="content" @click="navToNew(1)">发布动态</view></view>
					<view class="cu-item"><view class="content" @click="navToNew(2)">发布树洞</view></view>
					<view class="cu-item"><view class="content">取消</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import treeHole from '@/pages/square/treeHole.vue';
import post from '@/pages/square/post.vue'
import { mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin'])
	},
	components: { treeHole, post },

	data() {
		return {
			tabCur: 0,
			navs: [{name:'动态'}, {name:'树洞'}],
			bottomModal: false,
		};
	},
	onShow() {
		if(!this.isLogin) {
			this.$http.get('/verifyLogin').catch( err => {})
		}
	},
	methods: {
		//  导航切换["说说", "树洞"]
		tabSelect(index) {
			this.tabCur = index;
		},
		changeTab(index) {
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
			});
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
.text-black
	color #000000
.radius
	border-top-right-radius 10rpx !important
	border-top-left-radius 10rpx !important
</style>

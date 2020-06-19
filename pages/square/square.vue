<template>
	<view>
		<!-- 导航  说说/树洞 -->
		<view class="bg-white nav text-black">
			<view class="cu-item text-lg  text-bold" v-for="(item, index) in navs" :key="index" @click="tabSelect(index)">
				<view class=" text-center">{{ item }}</view>
				<view :class="{ active: tabCur == index }"></view>
			</view>
			<view class="add-fixed text-xxl" @click="showModal"><text class="cuIcon-roundaddfill"></text></view>
		</view>
		<!-- 新建 -->
		<view class="cu-modal  bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog radius">
				<view class="cu-list menu text-black">
					<view class="cu-item"><view class="content" @click="navToNew(1)">发布说说</view></view>
					<view class="cu-item"><view class="content" @click="navToNew(2)">发布树洞</view></view>
					<view class="cu-item"><view class="content">取消</view></view>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<c-scroll @scrolltolower="lower">
			<!-- 说说内容 -->
			<view v-if="tabCur == 0">
				<c-post v-for="(item, index) in postList" :key="index" :post-data="item" />
				<view class="cu-load" :class="!isLoadPost ? 'loading' : 'over'"></view>
			</view>
			<!-- 树洞内容 -->
			<view v-else>
				<tree-hole v-for="(item, index) in treeHoleList" :key="index" :data="item"/>
				<view class="cu-load" :class="!isLoadTreeHole ? 'loading' : 'over'"></view>
			</view>
		</c-scroll>
	</view>
</template>

<script>
import cPost from '@/components/conlove/c-post.vue'
import treeHole from '@/pages/square/treeHole.vue';
import { mapState } from 'vuex'
export default {
	components: { cPost, treeHole },
	computed: mapState([
	  // 映射 this.newPost 为 store.state.newPost
	  'newPost', 'newTreeHole'
	]),
	data() {
		return {
			tabCur: 0,
			navs: ['说说', '树洞'],
			bottomModal: false,
			postList: [],
			treeHoleList: [],
			isLoadPost: false,
			isLoadTreeHole: false,
			loadCntPost: 0,
			loadCntTreeHole: 0,

			// 帖子信息
			addNewPost: {
				user: {
					avatar: '/static/image/default.jpeg',
					userName: 'Bobbobbb',
					isFemale: false
				},
				hidePost: false,
				content: '更新内容了，hhhhhhhhhhhhhhhh',
				createTime: '2020-5-20 13:14:20',
				imageList: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				],
				comments: [
					{
						userName: 'Abraxas',
						content: '赞赞~asdddddddddddddddddad~~！！'
					},
					{
						userName: '小冰 ',
						content: 'wls bbbbbbbbbb！！'
					},
					{
						userName: 'The shy',
						content: 'wls bbbbbbbbbbbasdddddddddddddbb！！'
					}
				]
			},
			addNewThreeHole: {
				avatar: '/static/avatar-pool/avatar-0.jpg',
				color: '#ffadad',
				content: 'aaaaaaaaaaa'
			}
			
		};
	},
	
	onShow() {
		this.postList = []
		this.postList.unshift(...this.newPost)
		this.postList.push(this.addNewPost);
		this.postList.push(this.addNewPost);
		
		this.treeHoleList = []
		console.log(this.newTreeHole);
		this.treeHoleList.unshift(...this.newTreeHole)
		this.treeHoleList.push(this.addNewThreeHole);
		this.treeHoleList.push(this.addNewThreeHole);
		
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
			});
		},
		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			if (this.tabCur == 0) {
				this.loadPost();
			} else {
				this.LoadTreeHole();
			}
			// this.getListData();
		},
		loadPost() {
			if (this.loadCntPost > 0) return;
			if (this.isLoadPost) return;
			this.loadCntPost++;
			setTimeout(() => {
				if (this.postList.length >= 10) {
					this.isLoadPost = true;
				} else {
					this.postList.push(this.addNewPost);
					this.postList.push(this.addNewPost);
				}
				this.loadCntPost--;
			}, 500);
		},
		LoadTreeHole() {
			if (this.loadCntTreeHole > 0) return;
			if (this.isLoadTreeHole) return;
			this.loadCntTreeHole++;
			setTimeout(() => {
				if (this.treeHoleList.length >= 10) {
					this.isLoadTreeHole = true;
				} else {
					this.treeHoleList.push(this.addNewThreeHole);
					this.treeHoleList.push(this.addNewThreeHole);
				}
				this.loadCntTreeHole--;
			}, 500);
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

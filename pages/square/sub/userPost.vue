<template>
	<c-scroll @scrolltolower="lower" maxHeight>
		<c-custom-mid>
			<block slot="center"><text style="color: #000000;">Ta的动态</text></block>
		</c-custom-mid>
		<view style="height: 100rpx;"></view>
		<c-post dotsShow v-for="(item, index) in postList" :key="index" :post-data="item" />
		<view class="cu-load" :class="!isLoadPost ? 'loading' : 'over'"></view>
	</c-scroll>
</template>

<script>
import cCustomMid from '@/components/conlove/c-custom-mid.vue';
import cPost from '@/components/conlove/c-post.vue';
import { mapState } from 'vuex';
export default {
	components: {
		cCustomMid,
		cPost
	},
	props: {
		postData: {
			type: Object,
			default: () => ({
				user: {
					avatar: '/static/image/default.jpeg',
					userName: 'Bobbobbb',
					isFemale: false
				},
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
			})
		}
	},
	data() {
		return {
			postList: [],
			isLoadPost: false,
			loadCntPost: 0,
			// 新增帖子信息
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
			}
		};
	},
	computed: mapState([
		// 映射 this.newPost 为 store.state.newPost
		'newPost'
	]),
	onShow() {
		this.postList = [];
		this.postList.unshift(...this.newPost);
		this.postList.push(this.addNewPost);
		this.postList.push(this.addNewPost);
	},
	methods: {
		/**
		 * @param {Object} isFocus 是否点击message 进去详情的
		 * 跳转详情页面
		 */
		navToPostDetail(isFocus) {
			uni.navigateTo({
				url: '/pages/square/postDetail?isFocus=' + isFocus
			});
		},
		clickMessage() {
			this.setPostData(this.postData);
			this.navToPostDetail(true);
		},
		lower() {
			this.loadPost();
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
		}
	}
};
</script>

<style lang="stylus">
.post
	width 100%
.display-box
	margin-top 100rpx
	padding 30rpx 0
	width 100%
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
</style>

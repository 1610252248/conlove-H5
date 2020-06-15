<template>
	<c-scroll midHeight>
		<c-custom-mid>
			<block slot="center"><text style="color: #000000;">Ta的动态</text></block>
		</c-custom-mid>
		<c-post dotsShow></c-post>
	</c-scroll>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue';
import cInfoBar from '@/components/conlove/c-info-bar.vue';
import cCustomMid from '@/components/conlove/c-custom-mid.vue';
import cPost from '@/components/conlove/c-post.vue'
export default {
	name: 'post',
	components: {
		postInfo,
		cInfoBar,
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
		return {};
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
			this.navToPostDetail(true);
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

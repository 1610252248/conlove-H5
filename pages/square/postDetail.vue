<template>
	<view>
		<c-scroll ref="scroll" :isAnimation="false" minHeight>
			<post-info :data="addNewPost" style="padding-top: 30rpx;" />
			<c-info-bar @click-message="clickMessage" />
			<c-comment ref="comment" @scroll-to-bottom="scrollToBottom" class="margin-top-sm" />
		</c-scroll>
	</view>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue';
import cComment from '@/components/conlove/c-comment.vue';
import cScroll from '@/components/conlove/c-scroll.vue';
import cInfoBar from '@/components/conlove/c-info-bar.vue';
export default {
	components: { postInfo, cComment, cScroll, cInfoBar },
	methods: {
		scrollToBottom() {
			this.$refs.scroll.toBottom();
		},
		clickMessage() {
			this.focusComment();
		},
		focusComment() {
			this.$refs.comment.isFocus = true;
		}
	},
	data() {
		return {
			isFocus: false,
			addNewPost: {
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
			}
		};
	},
	onReady() {
		// 是否聚焦输入框
		if (this.$route.query.isFocus == 'true') this.focusComment();
	}
};
</script>

<style lang="stylus">

</style>

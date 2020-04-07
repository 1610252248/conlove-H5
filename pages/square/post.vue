<template>
	<view class="post">
		<view class="display-box solids-bottom" @click="navToPostDetail">
			<!-- 说说内容 -->
			<post-info />
			<!-- 赞评论功能 -->
			<c-info-bar showMode/>
			<!-- 评论 至多展示三条评论 -->
			<view class="post-comment margin-top-sm">
				<view class="flex justify-start " v-for="(item, index) in comments" :key="index">
					<view class="text-grey text-nowrap">{{ item.userName + '：' }}</view>
					<view class="text-black text-hidden">{{ item.content }}</view>
				</view>
			</view>
			<view class="post-like margin-top-xs">
				<view class="fl "><text class="text-gray margin-left-lg  text-xs">查看全部 13 条评论 >></text></view>
			</view>
		</view>
		
	</view>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue'
import cInfoBar from '@/components/conlove/c-info-bar.vue'	

export default {
	name: 'post',
	components: {
		postInfo, cInfoBar
	},
	data() {
		return {
			comments: [
				{
					userName: 'Abraxas',
					content: '赞赞~asddddddddddddddddddddddad~~！！'
				},
				{
					userName: '小冰 ',
					content: 'wls bbbbbbbbbb！！'
				},
				{
					userName: 'The shy',
					content: 'wls bbbbbbbbbbbasdddddddddddddddddddddddddbbbbbbbbbbbb！！'
				}
			]
		};
	},
	methods: {
		navToPostDetail() {
			uni.navigateTo({
				url: '/pages/square/postDetail'
			})
		}
	},
};
</script>

<style lang="stylus">
.post
	width 100%
.display-box
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

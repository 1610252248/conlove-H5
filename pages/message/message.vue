<template>
	<c-scroll>
		<view class="cu-list menu-avatar">
			
			<view class="cu-item" v-for="(item, index) in mainList" :key="index" @click="navToItem(index)">
				<view class="cu-avatar round lg" :style="{'background-image':'url('+item.image+')'}"></view>
				<view class="content"><view class="text-black margin-left-sm">{{item.name}}</view></view>
				<view class="action">
					<view class="cu-tag round bg-red sm" v-if="item.tag">{{item.tag}}</view>
					<view class="cuIcon-right text-gray" v-else></view>
				</view>
			</view>
		
			<view class="cu-item" @click="navToChat">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content margin-left-sm">
					<view class="text-black">Bobobobb</view>
					<view class="text-gray text-sm"><view class="text-cut ">你们已经互送秋波了，开始聊聊吧~</view></view>
				</view>
				<view class="action" >
					<view class="text-grey text-xs">{{ $utils.dateUtils.format('2020-4-9 17:15:56') }}</view>
					<view class="cu-tag round bg-grey sm">1</view>
				</view>
			</view>
		</view>
	</c-scroll>
</template>

<script>
export default {
	data() {
		return {
			mainList: [
				{name: '收到的秋波', tag: 5, image: '/static/image/xin-qiubo.png'},
				{name: '收到的评论', tag: 0, image: '/static/image/comment.png'},
				{name: '收到的赞', tag: 2, image: '/static/image/appreciate.png'}

			],
			index: 1
		}
	},
	methods: {
		navToItem(index) {
			uni.navigateTo({
				url: '/pages/message/receive' + (index == 0 ? 'Like' : (index == 1 ? 'Comment' : 'Appreciate'))
			})
		},
		navToChat() {
			uni.navigateTo({
				url: '/pages/message/HM-chat/HM-chat'
			})
		}
	},
};
</script>

<style lang="stylus">
// .cu-item
// 	border-bottom 0.5px solid #ffffff !important
.badge 
	width 34rpx
	padding-right 8rpx
	height 34rpx
	font-size 26rpx
.cu-avatar 
	background-color #ffffff;
</style>

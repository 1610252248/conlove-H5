<template>
	<c-scroll>
		<view class="cu-list menu-avatar">
			
			<view class="cu-item" v-for="(item, index) in mainList" :key="index" @click="navToItem(index)">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content"><view class="text-black">{{item.name}}</view></view>
				<view class="action">
					<view class="cu-tag round bg-red sm" v-if="item.tag">{{item.tag}}</view>
					<view class="cuIcon-right text-gray" v-else></view>
				</view>
			</view>
		
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view class="text-black">Bobobobb</view>
					<view class="text-gray text-sm"><view class="text-cut">你们已经互送秋波了，开始聊聊吧~</view></view>
				</view>
				<view class="action">
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
				{name: '收到的秋波',  tag: 5},
				{name: '收到的评论', tag: 0},
				{name: '收到的赞', tag: 0}

			],
			index: 1
		}
	},
	methods: {
		navToItem(index) {
			uni.navigateTo({
				url: '/pages/message/receive' + (index == 0 ? 'Like' : (index == 1 ? 'Comment' : 'Appreciate'))
			})
		}
	},
};
</script>

<style lang="stylus">
// .cu-item
// 	border-bottom 0.5px solid #ffffff !important
.badge 
	top 60rpx
	width 40rpx
	height 40rpx
	font-size 30rpx
</style>

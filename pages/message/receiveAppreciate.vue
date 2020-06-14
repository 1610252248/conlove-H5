<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in list" :key="index">
				<view class="cu-avatar round lg" :style="{ 'background-image': 'url(' + item.user.avatar + ')' }">
					<view class="cu-tag badge" :class="item.user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view class="text-black">{{ item.user.name }}</view>
					<view class="text-gray text-df text-cut">{{ item.content }}</view>
				</view>
				<view class="action text-grey text-xs">{{ $utils.dateUtils.format(item.time) }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ user: { name: 'Bobobobb', sex: 0, avatar: '/static/image/default.jpeg' }, content: '赞了你的动态', time: '2020-6-14 12:20:12' },
				{ user: { name: '缘来小助手', sex: 1, avatar: '/static/image/default-2.jpeg' }, content: '赞了你的照片', time: '2020-6-10 12:20:12' },
				{ user: { name: '小姐姐', sex: 1, avatar: '/static/img/im/face/face_2.jpg' }, content: '赞了你的说说', time: '2020-1-14 12:20:12' },
				{ user: { name: '小哥哥', sex: 0, avatar: '/static/img/im/face/face_13.jpg' }, content: '赞了你的资料', time: '2019-6-14 12:20:12' }
			]
		};
	}
};
</script>

<style lang="stylus">
.text-df
	font-size 26rpx
.badge
	width 34rpx
	padding-right 8rpx
	height 34rpx
	font-size 26rpx
</style>

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
					<view class="text-grey text-xs">{{ item.from }}</view>
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
				{
					user: { name: 'Bobobobb', sex: 0, avatar: '/static/image/default.jpeg' },
					from: '回复了你的动态',
					content: '吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮',
					time: '2020-6-14 12:20:12'
				},
				{ user: { name: '缘来小助手', sex: 1, avatar: '/static/image/default-2.jpeg' }, from: '在你的夸夸墙留言了', content: '棒棒哒~', time: '2020-6-10 12:20:12' },
				{ user: { name: '小姐姐', sex: 1, avatar: '/static/img/im/face/face_2.jpg' }, from: '回复了你的动态', content: '小哥哥好帅~', time: '2020-1-14 12:20:12' },
				{ user: { name: '小哥哥', sex: 0, avatar: '/static/img/im/face/face_13.jpg' }, from: '在你的夸夸墙留言了', content: '小姐姐好美~', time: '2019-6-14 12:20:12' }
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

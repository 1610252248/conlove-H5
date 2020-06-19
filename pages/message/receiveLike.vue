<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in list" :key="index">
				<view class="cu-avatar round lg" :style="{'background-image':'url('+item.user.avatar+')'}">
					<view class="cu-tag badge" :class="item.user.sex?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view class="text-black">{{item.user.name}}</view>
					<view class="text-gray text-df">给你暗送秋波</view>
					<view class="text-grey text-xs">来自 {{item.from}}</view>
				</view>
				<view class="action ">
					<button @click.stop="changeState(index)" v-if="item.state" class="cu-btn round bg-blue shadow  sm" >同意</button>
					<text v-else class="text-grey text-xs">已互送秋波</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{user: {name: 'Bobobobb', sex: 0, avatar: '/static/image/default.jpeg'}, from: '你的主页', state: 0},
				{user: {name: '缘来小助手', sex: 0, avatar: '/static/image/default-2.jpeg'}, from: '缘来动态', state: 1},
				{user: {name: '小姐姐', sex: 1, avatar: '/static/img/im/face/face_2.jpg'}, from: '你的主页', state: 1},
				{user: {name: '小哥哥', sex: 0, avatar: '/static/img/im/face/face_13.jpg'}, from: '缘来动态', state: 0}
			]
		};
	},
	methods: {
		changeState(idx) {
			this.list[idx].state = this.list[idx].state ? 0 : 1;
		}
	},
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

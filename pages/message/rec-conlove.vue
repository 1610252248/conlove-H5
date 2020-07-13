<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in lists" :key="index">
				<view @click="navToOtherUser(item.friend.id)" class="cu-avatar round lg" :style="{'background-image':'url('+item.friend.avatar+')'}">
					<view class="cu-tag badge" :class="item.friend.sex?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view @click="navToOtherUser(item.friend.id)" class="text-black">{{item.friend.nickName}}</view>
					<view class="text-gray text-df" v-if="item.state == 1">
						给你暗送秋波
					</view>
					<view class="text-gray text-df" v-else>
						{{item.state ? '已互送秋波' : '你的秋波对方尚未回应'}}
					</view>
				</view>
				<view class="action ">
					<button @click="_response(item, index)" v-if="item.state == 1" class="cu-btn round bg-blue shadow sm" >回应</button>
					<image v-else class="user-like" :src="item.state ? '/static/image/user-like-active.png' : '/static/image/user-like-normal.png'"></image>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
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
			],
			lists: []
		};
	},
	onShow() {
		this.clearConlove();
		this.getFriend();
	},
	methods: {
		clearConlove() {
			this.$http.get('/clearConlove')
		},
		getFriend(){
			this.$http.get('/getFriend').then(res => {
				this.lists = res.data;
			})
		},
		_response(item, index) {
			this.$http.post('/response/conlove', item).then(res => {
				this.$refs.uToast.show({
					title: res.msg,
					type: 'success'
				})
				this.lists[index].state = 2;
			})
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			this.$u.route('/pages/user/otherUser', {id})
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
.user-like 
	width 40rpx
	height 40rpx
</style>

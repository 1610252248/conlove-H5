<template>
	<c-scroll midHeight> 
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in lists" :key="item.id" @click="navDetail(item)">
				<view @click.stop="navToOtherUser(item)" class="cu-avatar round lg" :style="{ 'background-image': 'url(' + getAvatar(item) + ')' }">
					<view v-if="item.type<=2" class="cu-tag badge" :class="item.user.sex == '女' ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view @click.stop="navToOtherUser(item)" class="text-black">{{ getUserName(item) }}</view>
					<view class="text-gray text-df text-cut">{{ tips[item.type] }}</view>
				</view>
				<view class="action text-grey text-xs">{{ $utils.dateUtils.format(item.time) }}</view>
			</view>
		</view>
		<!-- 没有更多数据 -->
		<view class="cu-load over"  />
	</c-scroll>
</template>

<script>
import anonymousList from '@/pages/square/sub/anonymous.js'
export default {
	data() {
		return {
			list: [
				{ user: { name: 'Bobobobb', sex: 0, avatar: '/static/image/default.jpeg' }, content: '赞了你的动态', time: '2020-6-14 12:20:12' },
				{ user: { name: '缘来小助手', sex: 1, avatar: '/static/image/default-2.jpeg' }, content: '赞了你的照片', time: '2020-6-10 12:20:12' },
				{ user: { name: '小姐姐', sex: 1, avatar: '/static/img/im/face/face_2.jpg' }, content: '赞了你的说说', time: '2020-1-14 12:20:12' },
				{ user: { name: '小哥哥', sex: 0, avatar: '/static/img/im/face/face_13.jpg' }, content: '赞了你的资料', time: '2019-6-14 12:20:12' }
			],
			lists: [],
			tips: [
				'赞了夸夸墙评论',
				'赞了动态',
				'赞了动态的评论',
				'赞了树洞',
				'赞了树洞的评论'
			]
		};
	},
	onShow() {
		this.clearAppreciate();
		this.getAppreciate();
	},
	methods: {
		getAvatar(item) {
			let i = (item.aid + item.auserId) % 6;
			let src = '/static/avatar-pool/avatar-' + i + '.jpg'
			return (item.type > 2) ? src  : item.user.avatar
		},
		getUserName(item) {
			let i = (item.aid + item.auserId) % anonymousList.length;
			return (item.type > 2) ? anonymousList[i] : item.user.nickName;
		},
		clearAppreciate() {
			this.$http.get('/clearAppreciate')
		},
		getAppreciate(){
			this.$http.get('/message/getAppreciate').then(res => {
				this.lists = res.data;
			})
		},
		// 跳转用户资料
		navToOtherUser(item) {
			//当前统一跳转 其它用户
			if(item.type > 2) {
				this.navDetail(item)
				return ;
			}
			this.$u.route('/pages/user/otherUser', {id : item.user.id})
		},
		navDetail(item) {
			let type = item.type
			let route = ''
			if(type == 0) route = '/pages/home/homeDetail'
			else if(type <= 2) route = '/pages/square/postDetail'
			else route = '/pages/square/treeHoleDetail'
			this.$u.route(route, {id: item.aid});
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

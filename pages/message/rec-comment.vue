<template>
	<c-scroll midHeight>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in lists" :key="item.id" @click="navDetail(item)">
				<view @click.stop="navToOtherUser(item)" class="cu-avatar round lg" :style="{ 'background-image': 'url(' + getAvatar(item) + ')' }">
					<view v-if="item.type<=2" class="cu-tag badge" :class="item.user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view @click.stop="navToOtherUser(item)" class="text-black">{{ getUserName(item) }}</view>
					<view class="text-gray text-df text-cut">{{ item.content }}</view>
					<view class="text-grey text-xs">{{ tips[item.type] }}</view>
				</view>
				<view class="action text-grey text-xs">{{ $utils.dateUtils.format(item.time) }}</view>
			</view>
		</view>
		<!-- 没有更多数据 -->
		<view class="cu-load over"  />
	</c-scroll>
</template>

<script>
// 匿名列表
import anonymousList from '@/pages/square/sub/anonymous.js'
export default {
	data() {
		return {
			lists:[],
			tips: [
				'在你的夸夸墙留言了',
				'评论了你的动态',
				'回复了你的动态评论',
				'评论了你的树洞',
				'回复了你的树洞评论'
			]
		};
		
	},
	onShow() {
		this.clearComment();
		this.getComment();
	},
	methods: {
		getAvatar(item) {
			let i = (item.cid + item.cuserId) % 6;
			let src = '/static/avatar-pool/avatar-' + i + '.jpg'
			return (item.type > 2) ? src  : item.user.avatar
		},
		getUserName(item) {
			let i = (item.cid + item.cuserId) % anonymousList.length;
			return (item.type > 2) ? anonymousList[i] : item.user.nickName;
		},
		clearComment() {
			this.$http.get('/clearComment')
		},
		getComment(){
			this.$http.get('/message/getComment').then(res => {
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
			this.$u.route(route, {id: item.cid});
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
.cu-item
	margin 14rpx 0
</style>

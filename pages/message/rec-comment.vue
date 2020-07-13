<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item, index) in lists" :key="item.id" @click="navDetail(item)">
				<view @click.stop="navToOtherUser(item.user.id)" class="cu-avatar round lg" :style="{ 'background-image': 'url(' + item.user.avatar + ')' }">
					<view class="cu-tag badge" :class="item.user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view @click.stop="navToOtherUser(item.user.id)" class="text-black">{{ item.user.nickName }}</view>
					<view class="text-gray text-df text-cut">{{ item.content }}</view>
					<view class="text-grey text-xs">{{ tips[item.type] }}</view>
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
		clearComment() {
			this.$http.get('/clearComment')
		},
		getComment(){
			this.$http.get('/message/getComment').then(res => {
				this.lists = res.data;
				console.log(this.lists);
			})
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			this.$u.route('/pages/user/otherUser', {id})
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

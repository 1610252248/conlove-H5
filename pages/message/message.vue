<template>
	<c-scroll>
		<view class="cu-list menu-avatar">
			
			<view class="cu-item" v-for="(item, index) in lists" :key="index" @click="navToItem(index)">
				<view class="cu-avatar  lg" :style="{'background-image':'url('+item.image+')'}" />
				<view class="content"><view class="text-black margin-left-sm">{{item.name}}</view></view>
				<view class="action">
					<view class="cu-tag round bg-red sm" v-if="item.tag">{{item.tag}}</view>
					<view class="cuIcon-right text-gray" v-else></view>
				</view>
			</view>
		
			<view class="cu-item" @click="navToChat(item.id, item.friend.nickName)" v-for="(item, index) in friends" :key="item.id">
				<view class="cu-avatar round lg" :style="{'background-image':'url('+item.friend.avatar+')'}" >
					<view class="cu-tag badge" :class="index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content margin-left-sm">
					<view class="text-black">{{item.friend.nickName}}</view>
					<view class="text-gray text-sm text-cut">
						<rich-text :nodes="item.lastContent"/>
					</view>
				</view>
				<view class="action" >
					<view class="text-grey text-xs">{{ $utils.dateUtils.format(item.time) }}</view>
					<!-- <view class="cu-tag round bg-grey sm">1</view> -->
					<view class="cu-tag round bg-red sm" v-if="item.newMsg">{{item.newMsg}}</view>
					<!-- <view class="cuIcon-right text-gray" v-else></view> -->
				</view>
			</view>
		</view>
	</c-scroll>
</template>

<script>
import { mapState} from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			lists: [
				{name: '收到的秋波', tag: 0, image: '/static/image/xin-qiubo.png'},
				{name: '收到的评论', tag: 0, image: '/static/image/comment.png'},
				{name: '收到的赞', tag: 0, image: '/static/image/appreciate.png'}
			],
			index: 1,
			friends: [],
		}
	},
	onShow() {
		
		
		this.getMessage();
		this.getFriend();
	},
	methods: {
		getMessage() {
			this.$http.get('/getMessage').then(res => {
				res = res.data;
				this.lists[0].tag = res.conlove;
				this.lists[1].tag = res.comment;
				this.lists[2].tag = res.appreciate;
			})
		},
		getFriend() {
			this.$http.get('/message/getFriend').then(res => {
				this.friends = res.data;
			})
		},
		navToItem(index) {
			uni.navigateTo({
				url: '/pages/message/rec-' + (index == 0 ? 'conlove' : (index == 1 ? 'comment' : 'appreciate'))
			})
		},
		navToChat(id, nickName) {
			this.$u.route('/pages/message/HM-chat/HM-chat', {id, nickName})
		}
	},
};
</script>

<style lang="stylus">
.badge 
	width 34rpx
	padding-right 8rpx
	height 34rpx
	font-size 26rpx
.cu-avatar 
	background-color #ffffff;
</style>

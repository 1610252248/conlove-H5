<template>
	<view class="cu-item" v-if="Object.keys(comment).length">
		<!-- 头像 -->
		<image @click="navToOtherUser(comment.user.id)" class="cu-avatar  round" :src="getAvatar()" />
		<!-- {{treeHoleId}} -->
		<view class="content" style="max-width: 100%">
			<view style="height: 34rpx;">
				<!-- 用户名 -->
				<view @click="navToOtherUser(comment.user.id)" class="text-grey text-sm">{{ getUserName() }}</view>
				<!-- 火的数量 -->
				<text v-for="(num, index) in hotNums" :key="index" v-if="appreciate >= num" class="cuIcon-hotfill text-red" />
				<!-- 点赞	 -->
				<view class="on-right text-df" :class="isLike ? 'text-red' : 'text-grey'" @click="changeLike">
					<text class="cuIcon-appreciate"></text>
					<text style="margin-left: 4rpx;">{{ appreciate }}</text>
				</view>
			</view>

			<!-- 内容 -->
			<view>
				<text v-if="comment.replyName!=null">回复</text>
				<text v-if="comment.replyName!=null" class="text-blue" >{{' ' + getReplyName() + ': ' }}</text>
				<text>{{ comment.content }}</text>
			</view>
			
			<!-- 评论信息 -->
			<view v-if="showInfo">
				<view class="text-sm text-gray">
					<!-- 时间 -->
					<text>{{ $utils.dateUtils.format(comment.date) }}</text>
					<image class="dot" src="@/static/image/dot1.png"></image>
					<text @click="reply">回复</text>
				</view>
				<c-reply v-if="replyInfo" :treeHoleId="treeHoleId" :anonymous="anonymous" :comments="comment.newComments" :c-length="comment.childComments.length" @click.native="navToReply(comment.id)" >
					<!-- 回复数量 -->
					<view class="margin-left-xs text-blue text-sm" v-if="comment.childComments.length > 0" >
						{{ '共' + comment.childComments.length + '条回复 >' }}
					</view>
				</c-reply>
			</view>
		</view>
	</view>
</template>

<script>
import anonymousList from '@/pages/square/sub/anonymous.js'
export default {
	props: {
		// 显示 时间
		showInfo: {
			type: Boolean,
			default: true
		},
		// 显示 子评论
		replyInfo: {
			type: Boolean,
			default: true
		},
		// 评论对象
		comment: {
			type: Object,
			default: () => {{}}
		},
		anonymous: {
			type: Boolean,
			default: false
		},
		// 树洞 id，做匿名用
		treeHoleId: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			hotNums: [5, 10], // 点赞每超过几个有热度图标，暂时2个
			// 接收 isAppreciate是否点赞
			isLike: false,
			// 接收 cAppreciate点赞个数
			appreciate: 0
		};
	},
	mounted() {
		// 接收参数，接下来改变点赞状态需要
		let props = { ...this._props };
		this.init(props);
	},
	methods: {
		getReplyName() {
			// 树洞 id + 回复用户 id
			let i = (this.treeHoleId + parseInt(this.comment.replyName)) % anonymousList.length;
			return this.anonymous? anonymousList[i] : comment.replyName
		},
		getId() {
			let cm = this.comment;
			return this.treeHoleId + cm.userId
		},
		getUserName() {
			let i = this.getId() % anonymousList.length;
			return this.anonymous? anonymousList[i] : this.comment.user.nickName;
		},
		getAvatar() {
			let i = this.getId() % 6;
			let src = '/static/avatar-pool/avatar-' + i + '.jpg'
			return this.anonymous ? src  : this.comment.user.avatar
		},
		init(props) {
			this.isLike = props.comment.isAppreciate;
			this.appreciate = props.comment.appreciate;
		},
		navToReply(id) {
			this.$emit('nav-to-reply', id);
		},
		changeLike() {
			this.$emit('change-like', this.comment.id, this.isLike);
			this.isLike = !this.isLike;
			this.appreciate += this.isLike ? 1 : -1;
		},
		// 发送回复事件
		reply() {
			this.$emit('reply');
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			if(this.anonymous) return ;
			this.$u.route('/pages/user/otherUser', {id})
		}
	}
};
</script>

<style lang="stylus">
.on-right
	margin-left auto
	margin-right 0
.dot
	width 30rpx
	height 30rpx
	top 6rpx
	margin-left 10rpx
	margin-right 10rpx
.cu-item
	padding 20rpx 20rpx 20rpx 110rpx !important
.text-grey
	color #545454
.text-blue
	color: #2f62b5;
</style>

<template>
	<view class="cu-list menu-avatar comment solids-top padding-tb-sm">
		<!-- 评论 -->
		<c-comment-info :anonymous="anonymous" :treeHoleId="treeHoleId" v-for="(item, index) in comments" :key="item.id"
		  :showInfo="showInfo" :replyInfo="replyInfo" :comment="item"
		  @nav-to-reply="navToReply" @change-like="changeLike"
		  @reply="reply(index, item.id, item.user)"
		 />
	</view>
</template>

<script>
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
		// 评论列表
		comments: {
			type: Array,
			default: () => {
				[];
			}
		},
		anonymous: {
			type: Boolean,
			default: false
		},
		treeHoleId: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			hotNums: [5, 10] // 点赞每超过几个有热度图标，暂时2个
		};
	},
	methods: {
		navToReply(id) {
			this.$emit('nav-to-reply', id);
		},
		changeLike(id, isLike) {
			this.$emit('change-like', id, isLike);
		},
		reply(index, id, user) {
			// console.log();
			let tmp = user.nickName;
			// 匿名给id
			if(this.anonymous) tmp = user.id;
			console.log(user, tmp);
			this.$emit('reply', index, id, tmp);
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
</style>

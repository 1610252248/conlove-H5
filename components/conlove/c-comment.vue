<template>
	<view>
		<!-- 评论 -->
		<view class="cu-list menu-avatar comment solids-top padding-top-sm">
			<view class="cu-item" v-for="(item, index) in comments" :key="index">
				<!-- 头像 -->
				<image class="cu-avatar round" :src="item.userDto.avatarUrl" />
				
				<view class="content">
					<view>
						<!-- 用户名 -->
						<view class="text-grey">{{item.userDto.nickname}}</view>
						<!-- 火的数量 -->
						<text v-for="(num, index) in hotNums" :key="index" v-if="item.likeNums >= num" class="cuIcon-hotfill text-red" />
						<!-- 点赞	 -->
						<view class="on-right text-df" :class="item.likeState ? 'text-red' : 'text-grey'" @click="changeLike(item)">
							<text class="cuIcon-appreciate"></text>
							<text style="margin-left: 4rpx;">{{ item.likeNums }}</text>
						</view>
					</view>
					
					<!-- 内容 -->
					<view class="text-black text-content text-df">{{ item.content }}</view>
					
					<!-- 评论信息 -->
					<view v-if="showInfo">
						<view class="text-sm text-gray" >
							<!-- 时间 -->
							<text>{{$utils.dateUtils.format(item.createTime)}}</text>
							
							<image class="dot" src="@/static/image/dot1.png"></image>
							<text>回复</text>
						</view>
						<!-- 回复数量 -->
						<view class="reply" v-if="item.reply" @click="navToReply">
							<view class="sm cu-btn bg-grey light round">{{item.reply + '个回复 >'}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 发送评论 -->
		<view class="cu-bar input input-fixed">
			<input placeholder="请输入评论..." @blur="inputBlur" :focus="isFocus" v-model="sendContent" class="padding-left-sm solid"  maxlength="40" ></input>
			<button class="cu-btn round bg-blue shadow-blur" @click="sendComment">发送</button>
		</view>
		
		
	</view>
	
</template>

<script>
export default {
	props: {
		showInfo: {
			type: Boolean,
			default: true
		},
	},
	data() {
		return {
			comments: [
				{
					userDto: {
						nickname: "XDD",
						avatarUrl: "https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"
					},
					createTime: "2019.12.17 17:28:48",
					content: "支持支持！！！评论区做得真的不错，厉害厉害，仿这QQ空间的~~",
					likeNums: 19,
					likeState: 0,
					reply: 2,
				},
				{
					userDto: {
						nickname: "UZI",
						avatarUrl: "https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"
					},
					createTime: "2020.4.5 10:28:48",
					content: "支持支持！！！",
					likeNums: 6,
					likeState: 0,
					reply: 0,
				},
				{
					userDto: {
						nickname: "farrell",
						avatarUrl: "https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"
					},
					createTime: "2020.4.5 10:28:48",
					content: "支持支持！！！",
					likeNums: 3,
					likeState: false,
					reply: 15,
				}
			],
			
			hotNums: [5, 10], // 点赞每超过几个有热度图标，暂时2个
			sendContent: '',
			newComment: {
				userDto: {
					nickname: "缘来是你",
					avatarUrl: '/static/image/default.jpeg'
				},
				createTime: "2019.12.17 17:28:48",
				likeNums: 0,
				likeState: 0,
				reply: 0,
			},
			isFocus: false,
		}
	},
	methods: {
		navToReply() {
			uni.navigateTo({
				url:'/components/conlove/c-reply-comment'
			})
		},
		changeLike(item) {
			console.log(item);
			item.likeState = !item.likeState
			item.likeNums += item.likeState ? 1 : -1;
		},

		sendComment() {
			if(this.sendContent.length == 0) {
				uni.showToast({
					title: '内容不能为空哦~',
					icon: 'none'
				})
				return ;
			}
			
			let newComment = {...this.newComment};
			newComment.content = this.sendContent;
			newComment.createTime = this.$utils.dateUtils.currentDate();
			this.comments.push(newComment);
			uni.showToast({
				// title: '内容不能为空哦~',
				icon: 'success'
			})
			this.$emit('scroll-to-bottom')
			
		},
		inputBlur() {
			this.isFocus = false;
		}
	},
}
</script>

<style lang="stylus">
.on-right
	margin-left auto
	margin-right 0	
.input-fixed 
	width 100%
	position fixed
	min-height 42px
	bottom 0
	left 0
	right 0
	background-color #FFFFFF
	z-index 9999
	padding 0 20rpx 6rpx
	box-shadow 1px 2px 8px 4px #dadada
	
.dot 
	width 30rpx
	height 30rpx
	top 6rpx
	margin-left 10rpx
	margin-right 10rpx


</style>

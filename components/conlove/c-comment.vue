<template>
	<view>
		<!-- 评论 -->
		<view class="cu-list menu-avatar comment solids-top padding-top-sm">
			<view class="cu-item" v-for="(item, index) in comments" :key="index">
				<image class="cu-avatar round" :src="item.userDto.avatarUrl" />
		
				<view class="content">
					<view>
						<view class="text-grey">{{item.userDto.nickname}}</view>
						<text v-for="(num, index) in hotNums" :key="index" v-if="item.likeNums >= num" class="cuIcon-hotfill text-red" />
						<view class="on-right text-df" :class="item.likeState !== 0 ? 'text-red' : 'text-grey'" @click="chageAppreciation(item.likeState, item.openid, item.id)">
							<text class="cuIcon-appreciate"></text>
							<text class="margin-left-xs">{{ item.likeNums }}</text>
						</view>
					</view>
					<view class="text-black text-content text-df">{{ item.content }}</view>
					
					<view class="text-sm text-gray" >
						<text>{{$utils.dateUtils.format(item.createTime)}}</text>
						<image class="dot" src="@/static/image/dot1.png"></image>
						<text>回复</text>
					</view>
					<view class="reply" v-if="item.reply">
						<view class="sm cu-btn bg-grey light round">{{item.reply + '个回复 >'}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 回复 -->
		<view class="cu-bar input input-fixed">
			<input  placeholder="请输入评论..."  @blur="InputBlur" :adjust-position="false" class="solid-bottom padding-left-sm solid" :focus="false" maxlength="300" cursor-spacing="10"></input>
			<button class="cu-btn round bg-blue shadow-blur" @click="sendComment">发送</button>
		</view>
	</view>
	
</template>

<script>
export default {
	data() {
		return {
			comments: [
				{
					userDto: {
						nickname: "farrell",
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
						nickname: "farrell",
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
					likeState: 0,
					reply: 15,
				}
			],
			hotNums: [5, 10], // 点赞每超过几个有热度图标，暂时2个
		}
	},
}
</script>

<style lang="stylus">
.on-right
	margin-left auto
	margin-right 0	
.input-fixed 
	position fixed
	bottom 0
	width 100%
	background-color #FFFFFF
	z-index 9999	
.dot 
	width 30rpx
	height 30rpx
	top 6rpx
	margin-left 10rpx
	margin-right 10rpx
	
</style>

<template>
	<view >
		<!-- 提示信息 -->
		<view class="content">
			<view class="text-gray text-sm padding-tb-sm">提交材料之后你可以</view>
			<view class="grid col-3 grid-square">
				<view class="bg-card" v-for="(item, index) in tips" :key="index">
					<view>{{item.title}}</view>
					<view class="text-sm margin-top-sm">{{item.content}}</view>
				</view>
			</view>
		</view>
		
		<!-- 学校信息 -->
		<c-school :user="userDB"  />
		
		<view class="content image-info">
			<view class="text-sm margin-bottom-sm">已提交材料信息</view>
			<view class="flex">
				<view @click="$utils.viewImage(userDB.identifyImage)">
					<u-image mode="aspectFit" :fade="false" width="350rpx" height="280rpx" :src="(userDB.identifyImage?userDB.identifyImage:'/static/image/default-identify.png')"  ></u-image>
				</view>
				<view >
					<view style="height: 246rpx;"></view>
					<view class="update">
						<view @click="navToView" >查看 <text class="cuIcon-right"/></view>
						<view @click="navToModify"  class="margin-left-sm">修改 <text class="cuIcon-right"/></view>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin']),
		...mapState(['userDB'])
	},
	data() {
		return {
			tips: [
				{title: '优先展示', content: '提升曝光率'},
				{title: '点亮标志', content: '增加信任感'},
				{title: '找到校友', content: '认识新朋友'},
				
			]
		}
	},
	methods: {
		navToModify() {
			this.$u.route('/pages/user/modify-school')
		},
		navToView() {
			this.$u.route('/pages/user/view-school')
		}
	},
}
	
</script>

<style lang="stylus">
.content
	width 86%
	margin 0 auto
.bg-card
	background-image linear-gradient(135deg, #ff924d, #fc696e)
	color #ffffff
.grid.grid-square>view
	padding 28rpx 20rpx
	margin-right 30rpx
	border-radius 20rpx
	position relative
	overflow hidden
.grid.col-3.grid-square>view
	padding-bottom calc(((100% - 300rpx) / 3))
	height 0
	width calc(((100% - 60rpx) / 3))
.image-info 
	padding 20rpx 10rpx 20rpx 40rpx
	background-color #f4f4f4;
	border-radius 20rpx
	.update 
		display flex
		margin-left 70rpx
		font-size: 24upx;
</style>

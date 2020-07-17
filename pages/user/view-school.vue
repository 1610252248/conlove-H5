<template>
	<view class="content">
		
		<!-- 已上传资料 -->
		<view class="margin-tb-sm title ">已上传资料</view>
		<u-image width="100%" height="650rpx" :src="userDB.identifyImage"></u-image>
		<view class="margin-tb-sm tips-text ">
			<view class="cuIcon-favorfill">上传的材料将在个人主页-学校信息-认证材料可见</view>
			<view>请注意遮挡隐私信息</view>
			<view>(内测期间不予展示，仅显示已提交认证材料)</view>
		</view>
		<view class="flex modify-btn">
			<u-button class="btn" :ripple="true" @click="navToModify">前往修改</u-button>
		</view>
		
	</view>
</template>

<script>
import { mapState} from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	methods: {
		
		navToModify() {
			this.$u.route('/pages/user/modify-school')
		},
	},
}
</script>

<style lang="stylus">
.content 
	width 86%
	margin 0 auto
	.title 
		font-size 32rpx
	.tips-text 
		color #5b5b5b;
		view 
			height 46rpx
			line-height 46rpx
.btn
	color #ffffff !important
	background-image linear-gradient(135deg, #ff924d, #fc696e)
	border-radius 1000px
	font-size 30upx
	padding 0 38rpx
	width 240rpx
.modify-btn
	margin-top: 140rpx
</style>

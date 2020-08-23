<template>
	<view class="content">
		
		<!-- 材料示意图 -->
		<view class="margin-tb-sm title ">材料示意图</view>
		<u-image  :fade="false" mode="aspectFit" height="650rpx" @click="$utils.viewImage('/static/image/shool-card.jpg')" src="/static/image/shool-card.jpg"></u-image>
		<view class="margin-tb-sm tips-text ">
			<view>请确保上传材料中学校名称或logo清晰有效</view>
			<view>材料在学校信息可见，请注意遮挡隐私</view>
			<view>(内测阶段材料不可见，仅显示已提交认证材料)</view>
			<view>材料包括但不限于校园卡、学生证、毕业证等</view>
		</view>
		
		<view class="flex modify-btn">
			<u-button class="btn" :ripple="true" @click="chooseImage">本地图库</u-button>
			<u-button class="btn" :ripple="true" @click="camera">拍照</u-button>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	methods: {
		...mapActions([
			'set' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		// 选择图片发送
		chooseImage() {
			this.getImage('album');
		},
		//拍照发送
		camera() {
			this.getImage('camera');
		},
		//选照片 or 拍照
		async getImage(type) {
			await this.$http.urlImgUpload('/fileUpload', {sourceType: [type], count: 1}).then(res => {
				this.$http.get('/identifySchool', {image: res[0]}).then(msg => {
					let user = this.$u.deepClone(this.userDB);
					user.identifyImage = res[0];
					this.set({user})
					this.$refs.uToast.show({
						title: msg.msg,
						type: 'success',
						url: '/pages/user/view-school'
					})
				})
			})
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

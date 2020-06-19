<template>
	<view class="zai-box">
		<image src="/static/image/pic-login-head.png" mode="aspectFit" class="zai-logo"></image>
		<view class="zai-form">
			<input class="zai-input" v-model="user.userName" maxlength="10" placeholder="请输入用户名" />
			<input class="zai-input" v-model="user.password" password placeholder="请输入密码" />
			<input class="zai-input" v-model="user.checkPass" @blur="diffPassword = user.password != user.checkPass" password placeholder="请再输入一次密码" />
			<input class="zai-input" v-model="user.inviteCode" placeholder="请输入注册邀请码" />
			<radio-group class="margin-top-xm">
				<label class="margin-sm">
					<radio value="0" class="scale" color="#3F91E3" />
					<text>男</text>
				</label>
				<label class="margin-sm">
					<radio value="1" class="scale" color="#FF4A2D"  />
					<text>女</text>
				</label>
			</radio-group>
			<checkbox-group  @change="changRadio2">
				<label class="flex align-center margin-xs">
					<checkbox class='round blue scale' :class="isAgree?'checked':''" color="#FF4A2D"/>
					已同意
					<text class="text-black" style="text-decoration: underline;" @click="navToAgreement">《缘来服务协议》</text>
				</label>
				
			</checkbox-group>
			<button class="zai-btn">立即注册</button>
			<view class="flex justify-center margin-top-xl" style="color: #94afce;">
				<view>已有账号，</view>
				<view @click="navToLogin" class="text-bold" style="text-decoration: underline;">点此登录</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			user: {
				userName: '',
				password: '',
				checkPass: '',
				inviteCode: ''
			},
			diffPassword: false,
			isAgree: false,
		};
	},
	methods: {
		navToLogin() {
			uni.navigateTo({
				url: '/pages/enter/login'
			});
		},
		navToAgreement() {
			uni.navigateTo({
				url: '/pages/enter/serviceAgreement'
			})
		},
		// 同意协议
		changRadio2() {
			this.isAgree = !this.isAgree;
		}
	}
};
</script>

<style lang="stylus">
.zai-box
	background-color #FFFFFF
	height 100vh
	width 100%
	position relative
	display flex
	flex-direction column
	align-items center
	justify-content center
.zai-logo
	/* margin-top: 50upx; */
	width 100%
	height 20%
.zai-form
	width 70%
	margin 30upx auto
	display flex
	flex-direction column
	justify-content center
	align-items center
.zai-input
	background #ffffff
	border 1px solid #a7b6d0
	/* margin-top: 30upx; */
	margin-bottom 30upx
	border-radius 100upx
	padding 14upx 40upx
	height 76upx
	width 100%
	font-size 30upx
.input-placeholder, .zai-input
	color #94afce
.zai-label
	padding 36upx 0
	text-align center
	font-size 30upx
	color #a7b6d0
.zai-btn
	background #FF4A2D
	width 61%
	color #FFFFFF
	border-radius 100upx
	font-size 32upx
.zai-btn-disable
	background #ff65a3
	width 98%
	color #fff
	border 0
	border-radius 100upx
	font-size 36upx
.zai-btn:after
	border 0
/* 按钮点击效果 */
.zai-btn.button-hover
	transform translate(1upx, 1upx)
.scale
	transform scale(0.7)

</style>

<template>
	<c-scroll midHeight>
		<view class="zai-box">
			<image src="/static/image/pic-login-head.png" mode="aspectFit" class="zai-logo"></image>
			<!-- 表单 + 验证，规则是ruler，错误提示使用 toast -->
			<u-form :label-width="0" class="zai-form" :model="form" ref="uForm" :errorType="['toast']">
				<u-form-item required :label-width="0" prop="userName" :border-bottom="false"><input v-model="form.userName"  placeholder="请输入账号" /></u-form-item>
				<u-form-item required :label-width="0" prop="password" :border-bottom="false"><input v-model="form.password" password placeholder="请输入密码" /></u-form-item>
				<u-form-item required :label-width="0" prop="checkPass" :border-bottom="false">
					<input v-model="form.checkPass" @blur="diffPassword = form.password != form.checkPass" password placeholder="请再输入一次密码" />
				</u-form-item>
				<u-form-item required :label-width="0" prop="nickName" :border-bottom="false"><input v-model="form.nickName" placeholder="请输入昵称" /></u-form-item>
				<u-form-item required :label-width="0" prop="email" :border-bottom="false"><input v-model="form.email" placeholder="请输入邮箱" /></u-form-item>
				<!-- 			<u-form-item required :label-width="0" prop="inviteCode" :border-bottom="false">
					<input   v-model="form.inviteCode" placeholder="请输入注册邀请码" />
				</u-form-item> -->
				<u-form-item required :label-width="0" prop="sex" :border-bottom="false">
					<u-radio-group v-model="form.sex">
						<u-radio name="男" shape="circle">男</u-radio>
						<u-radio name="女" shape="circle" active-color="#FF4A2D">女</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item required :label-width="0" prop="isAgree" :border-bottom="false">
					<u-checkbox-group>
						<u-checkbox shape="circle" v-model="form.isAgree">
							已同意
							<u-link href="/pages/enter/serviceAgreement" color="#333333" under-line>《缘来服务协议》</u-link>
						</u-checkbox>
					</u-checkbox-group>
				</u-form-item>
				<!-- 按钮水波纹 -->
				<u-button class="btn" :ripple="true" @click="register">立即注册</u-button>
				<view class="margin-tb-xl" style="color: #94afce;">
					已有账号，
					<span @click="$u.route('/pages/enter/login')" class="navJump">点此登录</span>
				</view>
			</u-form>
			<u-toast ref="uToast" />
		</view>
	</c-scroll>
</template>

<script>
export default {
	data() {
		return {
			form: {
				userName: '',
				password: '',
				checkPass: '',
				nickName: '',
				email: '',
				inviteCode: '',
				sex: '',
				isAgree: false
			},
			// 表单验证规则
			rules: {
				userName: [
					{ required: true, message: '请输入账号' },
					{ pattern: /^([a-zA-Z0-9]|[_]){3,12}$/, message: '账号只能有字母和数字、“_”，长度在3-12之间' }
				],
				password: [{ required: true, message: '请输入密码' }, { min: 6, max: 12, message: '密码长度在6-12之间' }],
				checkPass: [
					{ required: true, message: '请重新输入密码' },
					{
						validator: (rule, value) => {
							return value === this.form.password;
						},
						message: '两次输入的密码不相等'
					}
				],
				nickName: [{ required: true, message: '请输入昵称' }],
				email: [
					{ required: true, message: '请输入邮箱' },
					{
						validator: (rule, value) => {
							return this.$u.test.email(value);
						},
						message: '请输入正确的邮箱'
					}
				],
				sex: [{ required: true, message: '请选择性别' }],
				isAgree: [
					{
						validator: (rule, value) => {
							return value;
						},
						message: '请同意《缘来服务协议》'
					}
				]
			}
		};
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		// 注册
		register() {
			this.$refs.uForm.validate(valid => {
				// 表单验证成功
				if (valid) {
					console.log(this.form);
					this.$http.post('/register', this.form).then(res => {
						if(res.status == this.$http.SUCCESS) {
							this.$refs.uToast.show({
								title: res.msg,
								type: 'success',
								url: '/pages/enter/login'
							})
						} else {
							this.$refs.uToast.show({
								title: res.msg,
								type: 'warning',
							})
						}
					});
				}
			});
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
uni-input
	background #ffffff
	border 1px solid #a7b6d0
	border-radius 100upx
	padding 14upx 40upx
	height 76upx
	width 100%
	font-size 30upx
.input-placeholder, .zai-input
	color #94afce
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 1000px
	font-size 30upx
	padding 0 100rpx
.scale
	transform scale(0.7)
.navJump
	font-weight 600
	color #94afce
	padding 1px
	border-bottom 0.5px solid #859eb8;
</style>

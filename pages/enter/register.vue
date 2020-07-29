<template>
	<c-scroll midHeight>
		<view class="zai-box">
			<image style="width: 300rpx; height: 300rpx;" src="/static/image/pic-login-head.png" mode="aspectFit" ></image>
			<!-- 表单 + 验证，规则是ruler，错误提示使用 toast -->
			<u-form label-width="0"  class="zai-form" :model="form" ref="uForm" :errorType="errorType" >
				<u-form-item  required  prop="userName" :border-bottom="false">
					<!-- <input  v-model="form.userName"  placeholder="请输入账号" /> -->
					<u-input placeholder-style="color:#94afce" :custom-style="inputCustome"  placeholder="请输入账号" :clearable="false" v-model="form.userName" type="text"/>
					<view class="loading-absolute" v-if="this.form.userName">
						<u-loading v-if="this.isLodingName == 0" mode="flower" />	
						<text v-else-if="this.isLodingName == 1" class="cuIcon-roundcheckfill text-green"></text>
						<text v-else-if="this.isLodingName == 2" class="cuIcon-roundclosefill text-red"></text>
					</view>
					</u-form-item>
				<u-form-item required  prop="password" :border-bottom="false"><input v-model="form.password" password placeholder="请输入密码" /></u-form-item>
				<u-form-item required  prop="checkPass" :border-bottom="false">
					<input v-model="form.checkPass" @blur="diffPassword = form.password != form.checkPass" password placeholder="请再输入一次密码" />
				</u-form-item>
				<u-form-item required  prop="nickName" :border-bottom="false"><input v-model="form.nickName" placeholder="请输入昵称" /></u-form-item>
				<u-form-item required  prop="email" :border-bottom="false">
					<!-- <input v-model="form.email" placeholder="请输入邮箱" /> -->
					<u-input placeholder-style="color:#94afce" :custom-style="inputCustome"  placeholder="请输入邮箱" :clearable="false" v-model="form.email" type="text"/>
					<view class="loading-absolute" v-if="this.form.email">
						<u-loading v-if="this.isLodingEmail == 0" mode="flower" />	
						<text v-else-if="this.isLodingEmail == 1" class="cuIcon-roundcheckfill text-green"></text>
						<text v-else-if="this.isLodingEmail == 2" class="cuIcon-roundclosefill text-red"></text>
					</view>
				</u-form-item>
				<u-form-item style="width: 84%;" required  prop="code" :border-bottom="false">
					<input class="zai-input" v-model="form.code" placeholder="请输入验证码" />
					<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
				</u-form-item>
				<u-form-item required  prop="sex" :border-bottom="false">
					<u-radio-group v-model="form.sex">
						<u-radio name="男" shape="circle">男</u-radio>
						<u-radio name="女" shape="circle" active-color="#FF4A2D">女</u-radio>
					</u-radio-group>
				</u-form-item>
				<u-form-item required  prop="isAgree" :border-bottom="false">
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
			<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
			<u-toast ref="uToast" />
		</view>
	</c-scroll>
</template>

<script>
export default {
	data() {
		return {
			inputCustome: {
				'background': '#ffffff',
				'border': '1px solid #a7b6d0',
				'border-radius': '100upx',
				'padding': '14upx 40upx',
				'height': '76upx',
				'width': '100%',
				'font-size': '30upx'
			},
			isLodingName: 4,
			isLodingEmail: 4,
			codeTips: '',
			verifyCode: '',
			form: {
				userName: '',
				password: '',
				checkPass: '',
				nickName: '',
				email: '',
				inviteCode: '',
				sex: '',
				code: '',
				isAgree: false
			},
			errorType: ['toast'],
			// 表单验证规则
			rules: {
				userName: [
					{ required: true, message: '请输入账号' },
					// { pattern: '/^([A-Za-z0-9_]){3,12}$/', message: '账号只能有字母和数字、“_”，长度在3-12之间'},
					{
						validator: (rule, value) => {
							let f = /^([A-Za-z0-9_]){3,12}$/.test(value);
							if(!f) this.isLodingName = 2
							return f;
						},
						message: '只能有字母和数字、“_”，长度在3-12位之间',
						trigger: ['blur', 'change']
					},
					{ // 校验账号是否已存在
						asyncValidator: (rule, value, callback) => {
							this.isLodingName = 0
							this.$http.get('/check/userName', {userName: value}).then(res=>{
								if(!res.status) {
									this.isLodingName = 2
									callback(new Error('账号重复'));
								} else {
									this.isLodingName = 1
									callback();
								}
							})
						},
						trigger: ['blur', 'change']
					},
				],
				password: [{ required: true, message: '请输入密码' }, { min: 6, max: 12, message: '密码长度在6-12之间' }],
				checkPass: [
					{ required: true, message: '请重新输入密码' },
					{
						validator: (rule, value) => {
							console.log(vaue);
							return value === this.form.password;
						},
						message: '两次输入的密码不相等',
						trigger: ['blur', 'change'],
					},
					
				],
				
				nickName: [{ required: true, message: '请输入昵称' }],
				email: [
					{ required: true, message: '请输入邮箱' },
					{
						validator: (rule, value) => {
							let f = this.$u.test.email(value);
							if(!f) this.isLodingEmail = 2
							return f
						},
						message: '请输入正确的邮箱',
						trigger: ['blur', 'change']
					},
					{ // 校验账号是否已存在
						asyncValidator: (rule, value, callback) => {
							this.isLodingEmail = 0
							this.$http.get('/check/email', {email: value}).then(res=>{
								if(!res.status) {
									this.isLodingEmail = 2
									callback(new Error('邮箱重复'));
								} else {
									this.isLodingEmail = 1
									callback();
								}
							})
						},
						trigger: ['blur', 'change']
					},
				],
				code: [{ required: true, message: '请输入验证码' }],
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
		codeChange(text) {
			this.codeTips = text;
		},
		// 获取验证码
		getCode() {
			if(this.form.email == '') {
				this.$u.toast('邮箱不能为空');
				return ;
			}
			// 检测邮箱 是否存在
			this.$http.get('/check/email', {email: this.form.email}).then(res => {
				if (res.status == this.$http.SUCCESS) {
					this.sendCode();
				} else {
					this.$u.toast('邮箱已存在，请换个邮箱试试');
				}
			})
		},
		sendCode() {
			if(this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码',
					mask: true
				})
				this.$http.get('/sendRegisterCode', {email: this.form.email}).then(res => {
					uni.hideLoading();
					this.$refs.uCode.start();
					if (res.status == this.$http.SUCCESS) {
						this.verifyCode = res.data
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$refs.uToast.show({
							title: res.msg,
							type: 'success'
						})
						// 通知验证码组件内部开始倒计时
					} else {
						this.$refs.uToast.show({
							title: res.msg,
							type: 'warning'
						})
					}
				})
			} else {
				this.$refs.uToast.show({
					title: '倒计时结束后再发送',
					type: 'warning'
				})
			}
		},
		register() {
			this.$refs.uForm.validate(valid => {
				// 表单验证成功
				if (valid) {
					this.$http.get('/judgeVerifyCode', {code: this.form.code, verifyCode: this.verifyCode}).then(res => {
						if (res.status == this.$http.SUCCESS) {
							this._register()
						} else {
							this.$refs.uToast.show({
								title: res.msg,
								type: 'warning'
							})
						}
					})
				}
			});
		},
		_register() {
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
	}
};
</script>

<style lang="stylus">
.zai-box
	background-color #FFFFFF
	height auto
	width 100%
	position relative
	display flex
	flex-direction column
	align-items center
	justify-content center
.zai-form
	width 70%
	margin 30upx 0
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
.input-placeholder
	color #94afce
.zai-input
	border 1px solid #a7b6d0
	width 100%
	border-radius 100upx
	padding 0 40rpx
	height 80upx
	font-size 30upx
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
.loading-absolute
	position: absolute; 
	right: 100rpx;
</style>

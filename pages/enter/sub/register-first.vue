<template>
	<view>
		<!-- 提示语 -->
		<c-title :imageSrc="'/static/image/avatar-left.jpg'">
			<block slot="content">
				<view>欢迎来到缘来！</view>
				<view>开启你的缘分之旅</view>
			</block>
		</c-title>

		<!-- 表单 -->
		<u-form class="form" label-width="0" :model="form" ref="uForm" :errorType="errorType">
			<u-form-item prop="email" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请输入邮箱" :clearable="false" v-model="form.email" type="text" />
				<view class="loading-absolute" v-if="this.form.email">
					<u-loading v-if="emailStatus == 0" mode="flower" />
					<text v-else-if="emailStatus == 1" class="cuIcon-roundcheckfill text-green"></text>
					<text v-else-if="emailStatus == 2" class="cuIcon-roundclosefill text-red"></text>
				</view>
			</u-form-item>
			<u-form-item prop="code" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请输入验证码" :clearable="false" v-model="form.code" type="text" />
				<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
			</u-form-item>
			<u-form-item prop="password" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请设置密码" :passwordIcon="false" :clearable="false" v-model="form.password" type="password" />
			</u-form-item>
			<view class="text-sm padding-left  padding-top-xs" style="color: #A7A7A7;">
				注册即同意
				<text class="navJump" @click="$u.route('/pages/enter/serviceAgreement')">《缘来服务协议》</text>
			</view>
		</u-form>

		<view class="btn-bottom text-center">
			<button @click="next" class=" cu-btn round lines-red lg">下一步</button>
			<view class="margin-tb-xl" style="color: #A7A7A7;">
				已有账号？
				<span @click="$u.route('/pages/enter/login')" class="navJump">点此登录</span>
			</view>
		</view>
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputCustome: {
				background: '#ffffff',
				border: '1px solid #C0C0C0',
				'border-radius': '100upx',
				padding: '14upx 40upx',
				height: '76upx',
				width: '100%',
				'font-size': '30upx'
			},
			form: {
				email: '',
				code: '',
				password: ''
			},
			verifyCode: '',
			emailStatus: 4,
			codeTips: '',
			errorType: ['toast'],
			// 表单验证规则
			rules: {
				password: [{ required: true, message: '请输入密码' }, { min: 6, max: 12, message: '密码长度在6-12之间' }],
				email: [
					{ required: true, message: '请输入邮箱' },
					{
						validator: (rule, value) => {
							let f = this.$u.test.email(value);
							if (!f) this.emailStatus = 2;
							return f;
						},
						message: '请输入正确的邮箱',
						trigger: ['change']
					},
					{
						// 校验账号是否已存在
						asyncValidator: (rule, value, callback) => {
							this.emailStatus = 0;
							this.$http.get('/check/email', { email: value }).then(res => {
								if (!res.status) {
									this.emailStatus = 2;
									callback(new Error('邮箱重复'));
								} else {
									this.emailStatus = 1;
									callback();
								}
							});
						},
						trigger: ['change']
					}
				],
				code: [{ required: true, message: '请输入验证码' }],
			}
		};
	},
	// 设置表单规则
	mounted() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		next() {
			this.$refs.uForm.validate(valid => {
				// 表单验证成功
				if (valid) {
					this.$http.get('/judgeVerifyCode', { email: this.form.email, code: this.form.code, verifyCode: this.verifyCode }).then(res => {
						if (res.status == this.$http.SUCCESS) {
							this.$emit('next', res.data, this.form);
						} else {
							this.$refs.uToast.show({
								title: res.msg,
								type: 'warning'
							});
						}
					});
				}
			});
		},
		// 注册
		codeChange(text) {
			this.codeTips = text;
		},
		// 获取验证码
		getCode() {
			if (this.form.email == '') {
				this.$u.toast('邮箱不能为空');
				return;
			}
			if (this.emailStatus != 1) {
				this.$u.toast('邮箱不合法');
				return;
			}
			// 检测邮箱 是否存在
			this.sendCode();
		},
		sendCode() {
			if (this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码',
					mask: true
				});
				this.$http.get('/sendRegisterCode', { email: this.form.email }).then(res => {
					uni.hideLoading();
					this.$refs.uCode.start();
					if (res.status == this.$http.SUCCESS) {
						this.verifyCode = res.data;
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$refs.uToast.show({
							title: res.msg,
							type: 'success'
						});
						// 通知验证码组件内部开始倒计时
					} else {
						this.$refs.uToast.show({
							title: res.msg,
							type: 'warning'
						});
					}
				});
			} else {
				this.$refs.uToast.show({
					title: '倒计时结束后再发送',
					type: 'warning'
				});
			}
		}
	}
};
</script>

<style lang="stylus">
.tips-border
	width 100%
	height 206rpx
	margin-top 140rpx
.title-text view
	padding 12rpx 0
.form
	width 100%
	margin 100rpx auto 0
.navJump
	color #A7A7A7
	font-weight 600
	padding-bottom 4rpx
	border-bottom 1px solid #A7A7A7
.cu-btn.lg
	margin-top 80rpx
	width 210rpx
.btn-bottom
	padding-top 20%
</style>

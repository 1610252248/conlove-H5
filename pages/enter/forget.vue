<template>
	<c-scroll midHeight class="content">
		<!-- 提示语 -->
		<c-title :imageSrc="'/static/image/avatar-left.jpg'">
			<block slot="content">
				<view>找回密码</view>
				<view>要记住新的密码噢</view>
			</block>
		</c-title>

		<!-- 表单 -->
		<u-form class="form" label-width="0" :model="form" ref="uForm" :errorType="errorType">
			<u-form-item prop="email" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请输入邮箱" :clearable="false" v-model="form.email" type="text" />
			</u-form-item>
			<u-form-item prop="code" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请输入验证码" :clearable="false" v-model="form.code" type="text" />
				<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
			</u-form-item>
			<u-form-item prop="password" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请设置密码" :clearable="false" :passwordIcon="false" v-model="form.password" type="password" />
			</u-form-item>
			<view class="text-sm padding-left  padding-top-xs" style="color: #A7A7A7;">
				登录即同意
				<text class="navJump" @click="$u.route('/pages/enter/serviceAgreement')">《缘来服务协议》</text>
			</view>
		</u-form>
		<view class="btn-bottom text-center">
			<button @click="next" class=" cu-btn round bg-red lg">找回并登陆</button>
			<view class="margin-tb-xl" style="color: #A7A7A7;">
				已有账号？
				<span @click="$u.route('/pages/enter/login')" class="navJump">点此登录</span>
			</view>
		</view>

		<u-toast ref="uToast" />
		<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
	</c-scroll>
</template>

<script>
import { mapActions } from 'vuex';
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
			codeTips: '',
			errorType: ['toast'],

			rules: {
				email: [
					{ required: true, message: '请输入邮箱' },
					{
						validator: (rule, value) => {
							return this.$u.test.email(value);
						},
						message: '请输入正确的邮箱',
						trigger: ['change']
					}
				],
				code: [{ required: true, message: '请输入验证码' }],
				password: [{ required: true, message: '请输入密码' }, { min: 6, max: 12, message: '密码长度在6-12之间' }]
			}
		};
	},
	// 设置表单规则
	mounted() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		...mapActions([
			'set' // 将 `this.set()` 映射为 `this.$store.dispatch('set')`
		]),
		// 注册
		codeChange(text) {
			this.codeTips = text;
		},
		next() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.reSetPassAndLogin(this.form);
				}
			});
		},
		reSetPassAndLogin(form) {
			this.$http.post('/modifyPassword', {code:  form.code, verifyCode: this.verifyCode,
			 email: form.email, password: form.password}).then(res => {
				if(res.status == this.$http.SUCCESS) {
					this.set(res.data);
					this.$eventBus.$emit('login-success');
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/user/user',
						isTab: true,
						duration: 1000
					});
				} else {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'warning'
					})
				}
			});
		},
	
		// 获取验证码
		getCode() {
			if (this.form.email == '') {
				this.$u.toast('邮箱不能为空');
				return;
			}
			if (!this.$u.test.email(this.form.email)) {
				this.$u.toast('请输入正确的邮箱');
				return;
			}

			if (this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码',
					mask: true
				});
				this.$http.get('/sendVerifyCode', { email: this.form.email }).then(res => {
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
.content
	width 84%
	margin 0 auto
.title-text view
	padding 12rpx 0
.navJump
	color #A7A7A7
	font-weight 600
	padding-bottom 4rpx
	border-bottom 1px solid #A7A7A7
.form
	margin-top 90rpx
.cu-btn.lg
	margin-top 80rpx
	width 280rpx
.btn-bottom
	padding-top 20%
</style>

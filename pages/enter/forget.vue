<template>
	<c-scroll midHeight>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index > basics ? '' : 'text-red'" v-for="(item, index) in basicsList" :key="index">
					<text :class="'cuIcon-' + item.cuIcon"></text>
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="flex align-center justify-center flex-direction">
			<u-form v-show="basics == 0" class="zai-form" :model="form" ref="uForm"  :errorType="['toast']">
				<u-form-item :label-width="0" prop="userName" :border-bottom="false"><input class="zai-input" v-model="form.userName" placeholder="账号 / 邮箱" /></u-form-item>
				<u-form-item :label-width="0" prop="code" :border-bottom="false">
					<input class="zai-input" v-model="form.code" placeholder="验证码" />
					<u-button slot="right" type="success" size="mini" @click="getCode">{{ codeTips }}</u-button>
				</u-form-item>
			</u-form>
			<u-form v-show="basics == 1" class="zai-form" :model="data" ref="uForm2" :errorType="['toast']">
				<u-form-item :label-width="0" prop="password" :border-bottom="false">
					<input class="zai-input" v-model="data.password" password placeholder="新密码" />
					</u-form-item>
				<u-form-item :label-width="0" prop="checkPass" :border-bottom="false">
					<input class="zai-input" v-model="data.checkPass" password placeholder="再次输入密码" />
				</u-form-item>
			</u-form>

			<view class="flex margin-top"><u-button class="btn" :ripple="true" @click="next">下一步</u-button></view>
			<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		</view>
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
export default {

	data() {
		return {
			codeTips: '',
			verifyCode: '',
			basicsList: [
				{cuIcon: 'usefullfill',	name: '验证邮箱'},
				{cuIcon: 'radioboxfill',name: '修改密码'},
				// {cuIcon: 'roundcheckfill',name: '完成'},
			],
			basics: 0,
			form: {
				userName: '',
				code: ''
			},
			rules: {
				userName: [{ required: true, message: '请输入账号或邮箱' }],
				code: [{ required: true, message: '请输入验证码' }]
			},
			data: {
				password: '',
				checkPass: ''
			},
			rules2: {
				password: [{ required: true, message: '请输入密码' },
				{ min: 6, max: 12, message: '密码长度在6-12之间' }],
				checkPass: [
					{ required: true, message: '请重新输入密码' },
					{
						validator: (rule, value) => {
							return value === this.data.password;
						},
						message: '两次输入的密码不相等'
					}
				],
			}
		};
	},

	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		
		this.$refs.uForm.setRules(this.rules);
		this.$refs.uForm2.setRules(this.rules2);
	},
	methods: {
		next() {
			if(this.basics == 0) {
				this.$refs.uForm.validate(valid => {
					if(valid) {
						this.$http.get('/judgeVerifyCode', {code: this.form.code, verifyCode: this.verifyCode}).then(res => {
							if (res.status == this.$http.SUCCESS) {
									this.basics++;
							} else {
								this.$refs.uToast.show({
									title: res.msg,
									type: 'warning'
								})
							}
						})
					}
				})
				
			} else {
				this.$refs.uForm2.validate(valid => {
					if (valid) {
						this.$http.get('/modifyPassword',{userName: this.form.userName, password: this.data.password}).then(res => {
							this.$refs.uToast.show({
								title: res.msg,
								type: 'success',
								url: '/pages/enter/login',
								duration: 1500
							})
						})
					}
				});
			}
		},

		// 获取验证码
		getCode() {
			if(this.form.userName == '') {
				this.$u.toast('账号或邮箱不能为空');
				return ;
			}
			
			if(this.$refs.uCode.canGetCode) {
				uni.showLoading({
					title: '正在获取验证码',
					mask: true
				})
				this.$http.get('/sendVerifyCode', {userName: this.form.userName}).then(res => {
					uni.hideLoading();
					this.$refs.uCode.start();
					if (res.status == this.$http.SUCCESS) {
						this.verifyCode = res.data
						console.log(this.verifyCode);
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
		codeChange(text) {
			this.codeTips = text;
		},
	}
};
</script>

<style lang="stylus">
.head-image
	margin-top 50rpx
	width 500rpx
	height 400rpx
	min-height 200rpx
.head-title
	width 532rpx
	height 92rpx
.zai-form
	width 64%
	margin 80rpx auto 0
.zai-input
	border 1px solid #a7b6d0
	width 100%
	border-radius 100upx
	padding 0 40rpx
	height 80upx
	font-size 30upx
	color #94afce
.input-placeholder, .text-color
	color #94afce
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 20px
	font-size 30upx
	padding 0 200rpx
</style>

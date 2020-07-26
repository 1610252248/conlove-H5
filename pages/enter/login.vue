<template>
	<c-scroll midHeight>
		<view class="flex align-center justify-center flex-direction">
			<!-- （图片和标题） -->
			<image src="/static/image/pic-login-head.png" mode="aspectFit" class="head-image"></image>
			<image src="/static/image/title.png" mode="aspectFit" class="head-title"></image>

			<u-form class="zai-form" :model="form" ref="uForm" :errorType="['toast']">
				<u-form-item :label-width="0" prop="userName" :border-bottom="false"><input class="zai-input" v-model="form.userName" placeholder="账号 / 邮箱" /></u-form-item>
				<u-form-item :label-width="0" prop="password" :border-bottom="false">
					<input class="zai-input" v-model="form.password" password placeholder="密码" />
				</u-form-item>
				<!-- <view url="/pages/index/register" hover-class="none" class="zai-label" v-if="illegal">
				<span style="color:red;font-weight: 600;">由于你之前的违规，请自觉离开本平台</span>
			</view> -->
				<view class="flex margin-top">
					<u-button class="btn" :ripple="true" @click="navToIndex">随便看看</u-button>
					<u-button class="btn" :ripple="true" @click="login">立即登录</u-button>
				</view>
				<view class="margin-tb-xl flex justify-between padding-lr" style="color: #87a1bc;">
					<view @click="$u.route('/pages/enter/forget')">忘记密码？</view>
					<view @click="$u.route('/pages/enter/register')">立即注册</view>
				</view>
			</u-form>
		</view>
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters([
			// 映射 this.isLogin 为 store.state.isLogin
			'isLogin'
		])
	},
	data() {
		return {
			form: {
				userName: '',
				password: ''
			},
			rules: {
				userName: [{ required: true, message: '请输入账号或邮箱' }],
				password: [{ required: true, message: '请输入密码' }]
			},
			routes: [
				'register', 'login', 'forget'
			]
		};
	},
	onShow() {
		if (this.isLogin) {
			this.$u.toast('您已登录');
			setTimeout(() => {
				this.navToIndex();
			}, 1000);
		}
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		...mapActions([
			'set' // 将 `this.set()` 映射为 `this.$store.dispatch('set')`
		]),
		navToIndex() {
			uni.switchTab({
				url: '/pages/home/home'
			});
		},
		login() {
			console.log('login');
			this.$refs.uForm.validate(valid => {
				console.log(valid);
				if (valid)  {
					this._login()
				}
			});
		},
		_login() {
			this.$http.post('/login', this.form).then(res => {
				if (res.status == this.$http.SUCCESS) {
					
					let pages = getCurrentPages(), len = pages.length, delta = 1;
					while(len > 0 && this.routes.findIndex(item => pages[len-1].route.indexOf(item) != -1) != -1) {
						delta++;
						len--;
					}
					if(len==0) {
						this.$refs.uToast.show({
							title: res.msg,
							type: 'success',
							url: '/pages/home/home',
							isTab: true,
							duration: 1500
						});
					} else {
						this.$refs.uToast.show({
							title: res.msg,
							type: 'success'
						});
						setTimeout(() => {
							uni.navigateBack({delta})
						}, 1500)
					}
					this.set(res.data);
					// 全局事件 登陆成功
					this.$eventBus.$emit('login-success');
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
	border-radius 1000px
	font-size 30upx
	padding 0 38rpx
</style>

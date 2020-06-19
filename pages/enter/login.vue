<template>
	<view class="flex align-center justify-center flex-direction">
		<!-- （图片和标题） -->
		<image src="/static/image/pic-login-head.png" mode="aspectFit" class="head-image"></image>
		<image src="/static/image/title.png" mode="aspectFit" class="head-title"></image>

		<view class="zai-form">
			<input class="zai-input" v-model="user.userName" placeholder="请输入用户名" />
			<input class="zai-input" v-model="user.password" password placeholder="请输入密码" />
			<!-- <view class="zai-label">忘记密码？</view> -->
			<view class="flex margin-top-lg">
				<button class="btn bg-red round " @click="navToIndex">随便看看</button>
				<button class="btn bg-red round" @click="login">立即登录</button>
			</view>
			<view class="flex justify-center margin-top-xl text-color">
				<view>还没有账号？</view>
				<view @click="navToRegister" class="text-bold" style="text-decoration: underline;">点此注册</view>
			</view>

			<!-- <view url="/pages/index/register" hover-class="none" class="zai-label" v-if="illegal">
				<span style="color:red;font-weight: 600;">由于你之前的违规，请自觉离开本平台</span>
			</view> -->
		</view>
	</view>
</template>

<script>
import { mapMutations, mapState,mapActions } from 'vuex'
export default {
	computed: mapState([
	  // 映射 this.isLogin 为 store.state.isLogin
	  'isLogin'
	]),
	data() {
		return {
			user: {
				userName: '',
				password: ''
			}
		};
	},
	onBackPress() {
		if(this.isLogin) return false;
		console.log('back');
		this.navToIndex();
		return true;
	},
	onShow() {
		if(this.isLogin) {
			uni.navigateBack();
		}
	},
	methods: {
		...mapActions([
		  'setIsLogin', // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		navToRegister() {
			uni.navigateTo({
				url: '/pages/enter/register'
			});
		},
		navToIndex() {
			uni.switchTab({
				url: '/pages/home/home'
			})
		},
		login() {
			this.setIsLogin();
			uni.showToast({
				title: '登陆成功',
				icon: 'none',
			})
			setTimeout(()=>{
				uni.switchTab({
					url: '/pages/user/user'
				})
			}, 1000)
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
	width 70%
	margin 100rpx auto 150rpx
.zai-input
	border 1px solid #a7b6d0
	margin 30rpx 0
	border-radius 100upx
	padding 14upx 40upx
	height 80upx
	font-size 30upx
	color #94afce
.btn
	font-size 30upx
	padding 0 38rpx
.input-placeholder, .text-color
	color #94afce
</style>

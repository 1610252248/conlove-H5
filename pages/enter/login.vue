<template>
	<c-scroll midHeight class="content">
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
			</u-form-item>
			<u-form-item prop="password" :border-bottom="false">
				<u-input :custom-style="inputCustome" placeholder="请输入密码" :password-icon="false" :clearable="false" v-model="form.password" type="password" />
			</u-form-item>
		</u-form>
		
		<view class="flex justify-between padding-lr-xl margin-top-xs">
			<view class="navJump" @click="$u.route('/pages/enter/forget')">忘记密码？</view>
			<view class="navJump" @click="$u.route('/pages/enter/register')">立即注册</view>
		</view>
		
		<view class="btn-bottom">
			<view class="flex justify-around">
				<button @click="back" class="cu-btn round lines-red lg"> 随便逛逛</button>
				<button @click="login" class="cu-btn round bg-red lg"> 登录</button>
			</view>
			<view class="margin-tb-xl text-center"  style="color: #A7A7A7;">
				登录即同意
				<span @click="$u.route('/pages/enter/serviceAgreement')" class="navJump">《缘来服务协议》</span>
			</view>
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
			inputCustome: {
				'background': '#ffffff',
				'border': '1px solid #C0C0C0',
				'border-radius': '100upx',
				'padding': '14upx 40upx',
				'height': '76upx',
				'width': '100%',
				'font-size': '30upx'
			},
			errorType: ['toast'],
			form: {
				email: '',
				password: '',
			},
			
			rules: {
				email: [{ required: true, message: '请输入邮箱' }],
				password: [{ required: true, message: '请输入密码' }]
			}
		}
	},
	// 设置表单规则
	mounted() {
		this.$refs.uForm.setRules(this.rules);
	},
	onShow() {
		if (this.isLogin) {
			this.$u.toast('您已登录');
			setTimeout(() => {
				this.$u.route({
					url: '/pages/user/user',
					type: 'tab'
				})
			}, 1000);
		}
	},
	methods: {
		...mapActions([
			'set' // 将 `this.set()` 映射为 `this.$store.dispatch('set')`
		]),
		back() {
			uni.navigateBack();
		},
		login() {
			this.$refs.uForm.validate(valid => {
				if (valid)  {
					this._login()
				}
			});
		},
		_login() {
			this.$http.post('/login', this.form).then(res => {
				if (res.status == this.$http.SUCCESS) {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/user/user',
						isTab: true,
						duration: 1500
					});
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
	},
};
</script>

<style lang="stylus">
.content
	width 84%
	margin 0 auto
.title-text view
	padding 12rpx 0
.form 
	margin-top 90rpx
.cu-btn, .lg
	width 210rpx
.btn-bottom 
	padding-top 50%
.navJump
	color #A7A7A7 
	padding-bottom 2rpx
	border-bottom 1px solid #A7A7A7
</style>

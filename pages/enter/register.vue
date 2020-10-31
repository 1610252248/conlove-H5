<template>
	<c-scroll midHeight>
		<register-first @next="next" v-if="step == 1" />
		<register-second @next="register" v-else />
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import registerFirst from '@/pages/enter/sub/register-first.vue'
import registerSecond from '@/pages/enter/sub/register-second.vue'
export default {
	components: {
		registerFirst, registerSecond
	},
	
	data() {
		return {
			step: 1,
			data: {
				
			},
			token: ''
		};
	},

	computed: {
		...mapGetters([
			// 映射 this.isLogin 为 store.state.isLogin
			'isLogin'
		])
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
		// 拿到邮箱和密码
		next(token, data) {
			this.token = token;
			this.data = this.$u.deepMerge(this.data, data);
			this.step++;
		},
		
		// 注册
		register(data, labelList) {
			this.data = this.$u.deepMerge(this.data, data);
			this.$http.post('/register', {token: this.token, user: this.data, label: labelList}).then(res => {
				if(res.status == this.$http.SUCCESS) {
					this._login()
				} else {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'warning',
					})
				}
			});
		},
		_login() {
			let _this = this
			this.$http.post('/login', this.data).then(ress => {
				_this.$refs.uToast.show({
					title: '注册成功',
					type: 'success',
					url: '/pages/user/user',
					isTab: true,
					duration: 1500
				});
				_this.set(ress.data);
				// 全局事件 登陆成功
				_this.$eventBus.$emit('login-success');
			});
		}
	},
	
};
</script>

<style lang="stylus">

</style>

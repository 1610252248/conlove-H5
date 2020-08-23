<template>
	<c-scroll midHeight>
		<register-first @next="next" v-if="step == 1" />
		<register-second @next="register" v-else />
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
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
	methods: {
		// 拿到邮箱和密码
		next(token, data) {
			this.token = token;
			this.data = this.$u.deepMerge(this.data, data);
			this.step++;
		},
		
		// 注册
		register(data) {
			this.data = this.$u.deepMerge(this.data, data);
			this.$http.post('/register', {token: this.token, user: this.data}).then(res => {
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
	},
	
};
</script>

<style lang="stylus">

</style>

<template>
	<view class="content" v-if="isLoad.length > 0">
		<view class="margin-tb flex justify-center">
			<u-image  width="40%" shape="circle" height="300rpx" :src="state == 0 ? '/static/image/warning.png' : '/static/image/correct.png'" />
		</view>
		<view style="height: 60rpx; line-height: 60rpx;">
			{{state == 0 ? '链接失效了' : '邮箱激活成功'}} <br/>
			<text @click="navToHome">点击去缘来主页</text>
		</view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				state: 0,
				isLoad: []
			}
		},
		onLoad({token}) {
			if(token != null)
				this.verify(token)
		},
		methods: {
			// 验证邮箱
			verify(token){
				this.$http.get('/verifyMail', {token}).then(res => {
					if (res.status == this.$http.SUCCESS) {
						this.state = 1
					}
					this.isLoad.push(1)
				})
			},
			
			navToHome() {
				this.$u.route({
					type: 'tab',
					url: '/pages/home/home'
				})
			}
		},
	}
</script>

<style lang="stylus">
.content 
	width 96%
	margin 0 auto
	text-align center
</style>

<template>
	<c-scroll midHeight>
		<view class="cu-form-group">
			<view class="title">在个人主页展示缘来贴</view>
			<switch class="red scale" @change="Switch" :class="isSwitch ? 'checked' : ''" :checked="isSwitch ? true : false"></switch>
		</view>
		<view class="cu-form-group">
			<view class="title">黑名单</view>
			<text class="cuIcon-right text-black"></text>
		</view>
		<view class="cu-form-group" @click="logout">
			<view class="title">退出登录</view>
			<text class="cuIcon-right text-black"></text>
		</view>
	</c-scroll>
</template>

<script>
import {mapActions } from 'vuex';
export default {
	
	data() {
		return {
			isSwitch: true
		};
	},

	methods: {
		...mapActions([
			'setIsLogin' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		Switch(e) {
			this.isSwitch = e.detail.value;
		},
		logout() {
			this.setIsLogin(false);
			uni.showToast({
				title: '退出登录成功',
				icon: 'none'
			})
			setTimeout(()=>{
				uni.navigateBack();
			}, 1000);
		}
	}
};
</script>

<style lang="stylus">
.cu-form-group
	min-height 80rpx !important
	.title
		min-width calc(4em + 15px)
.scale
	transform scale(0.7)
</style>

<template>
	<view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			flag: true
		}
	},
	onShow() {
		if(this.flag) {
			uni.navigateTo({
				url: '/pages/release/release'
			})
		} else {
			uni.switchTab({
				url: '/pages/home/home'
			})
		}
		this.flag = !this.flag;
	},
	
};
</script>

<style></style>

<template>
	<view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			flag: false
		}
	},
	onShow() {
		this.flag = !this.flag;
		if(this.flag) {
			uni.navigateTo({
				url: '/pages/release/release'
			})
		} else {
			uni.switchTab({
				url: '/pages/home/home'
			})
		}
	},
	
};
</script>

<style></style>

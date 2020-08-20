<template>
	<view style="width: 100%;">
		<image src="/static/image/yuanlai.jpg" style="width: 100%; height: 100vh;" mode="aspectFill"></image>
	</view>
</template>

<script>
export default {
	onLoad() {
		setTimeout(()=>{
			uni.switchTab({
				url:'/pages/home/home'
			})
		},2500)
	},
}
</script>

<style>
</style>

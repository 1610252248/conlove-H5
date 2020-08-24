<template>
	<c-scroll maxHeight>
		<image src="/static/image/yuanlai.jpg" style="width: 100%; height: 100%;" mode="scaleToFill"></image>
	</c-scroll>
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

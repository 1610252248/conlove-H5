<template>
	<view class="cu-item" @click="clickItem">
		<view class="content">
			<text class="margin-right" :class="icon"></text>
			<text>{{title}}</text>
		</view>
	</view>
	
</template>

<script>
	export default{
		props: {
			icon: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			}
		},
		methods: {
			clickItem() {
				this.$emit('click')
			}
		},
	}
</script>

<style>
</style>

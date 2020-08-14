<template>
	<view class="card" @click="clickCard">
		<view class="padding-lr-sm padding-tb-xs" v-if="top">
			<slot name="top"></slot>
		</view>
		<u-line v-if="line" color="#e3e5e7" />
		<view class="text-sm padding-lr padding-tb-sm">
			<slot name="content"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			line: {
				type: Boolean,
				default: true
			},
			top: {
				ype: Boolean,
				default: true
			}
		},
		methods: {
			clickCard() {
				this.$emit('child-click')
			}
		},
	}
</script>


<style lang="stylus">
.card
	box-shadow 0px 2px 5px #EDEDED
	width 86%
	margin 40rpx auto
	border 1px solid #e5e5e5;
	border-radius 15rpx
	color black
	padding 5rpx 0 !important
	text
		height 46rpx
		line-height 46rpx
</style>

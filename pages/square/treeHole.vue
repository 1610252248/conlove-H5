<template>
	<view>
		<view class="solids-bottom padding-bottom" @click="navToTreeHoleDetail">
			<view class="flex padding justify-center">
				<image class="cu-avatar xl round margin-left" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" mode="aspectFill"></image>
			</view>
			<view class="box-content radius margin-center">
				<text class="text-white  text-df padding-lr-xs">
					span多行居中测试span多行span多行居中测试span多行span多行居中测试span多行span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试span多行居中测试
				</text>
			</view>
			<c-info-bar />
		</view>
		<view class="solids-bottom padding-bottom">
			<view class="flex padding justify-center">
				<image class="cu-avatar xl round margin-left" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg" mode="aspectFill"></image>
			</view>
			<view class="box-content radius margin-center"><text class="text-white text-bold text-df padding-lr-xs">span多行居中</text></view>
			<c-info-bar />
		</view>
	</view>
</template>

<script>
import cInfoBar from '@/components/conlove/c-info-bar.vue';

export default {
	name: 'treeHole',
	components: {
		cInfoBar
	},
	methods: {
		navToTreeHoleDetail() {
			uni.navigateTo({
				// url: '@/pages/square/treeHoleD'
				url: '/pages/square/treeHoleDetail'
			})
		}
	},
};
</script>

<style lang="stylus">
.box-content
	width 90%
	background-color #ffadad
	padding 30% 0
	margin-top -100rpx
	margin-bottom 20rpx
	border 1px solid #c7c7c7
	display table
	text
		display table-cell
		vertical-align middle
		text-align center
.cu-avatar
	z-index 999
</style>

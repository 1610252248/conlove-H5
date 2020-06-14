<template>
	<view>
		<view class="solids-bottom padding-bottom" @click="navToTreeHoleDetail(false)">
			<!-- 头像 -->
			<view class="flex padding justify-center"><image class="cu-avatar xl round margin-left" :src="data.avatar" mode="aspectFill"></image></view>
			<!-- 树洞内容 -->
			<view class="box-content radius margin-center" :style="{ backgroundColor: data.color }">
				<text class="text-white text-bold text-df padding-lr-xs">{{ data.content }}</text>
			</view>

			<c-info-bar @click-message="clickMessage"/>
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
	props: {
		data: {
			type: Object,
			default: () => ({
				avatar: '',
				color: '',
				content: ''
			})
		},
	},
	methods: {
		navToTreeHoleDetail(isFocus) {
			uni.navigateTo({
				// url: '@/pages/square/treeHoleD'
				url: '/pages/square/treeHoleDetail?isFocus=' +  isFocus,
			});
		},
		
		clickMessage() {
			this.navToTreeHoleDetail(true);
		}
	}
};
</script>

<style lang="stylus">
.box-content
	width 90%
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

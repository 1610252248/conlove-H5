<template>
	<view >
		<view style="height: 200rpx;"></view>
		<view class="flex justify-center" @click="navToRelease(false)">
			<view class="flex c-border justify-start align-center">
				<u-avatar size="240" src="/static/image/avatar-left.jpg" />
				<view style="width: 100%; text-align: center;">
					<view class="text-lg"><text class="text-xxl">给自己发</text> <text class="text-bold cuIcon-right"/></view>
					<view style="color: #FFADAD;">开启属于你的遇见</view>
				</view>
			</view>
		</view>
		<view class="flex   justify-center"  @click="navToRelease(true)">
			<view class="flex c-border justify-end align-center">
				<view style="width: 100%; text-align: center;">
					<view class="text-lg"><text class="text-xxl">为朋友发</text> <text class="text-bold cuIcon-right"/></view>
					<view style="color: #FFADAD;">优秀的TA应该被看到</view>
				</view>
				<u-avatar size="240" src="/static/image/avatar-right.jpg" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		navToRelease(friend) {
			this.$u.route('/pages/release/release', {friend})
		}
	},
	
};
</script>

<style lang="stylus">
.c-border 
	width 88%
	height 240rpx
	border-radius 200rpx
	border 1px #FFADAD solid
	margin-top 100rpx
	
</style>

<template>
	<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					<view class="cu-tag badge" :class="index % 2 == 0 ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view class="content">
					<view class="text-black">Bobobobb</view>
					<view class="text-gray text-df">给你暗送秋波</view>
					<view class="text-gray text-xs">来自 缘来动态</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{ $utils.dateUtils.format('2020-4-8 17:15:56') }}</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);">
					<view class="cu-tag badge cuIcon-female bg-pink"></view>
				</view>
				<view class="content">
					<view class="text-black">Bobobobb</view>
					<view class="text-gray text-df">给你暗送秋波</view>
					<view class="text-gray text-xs">来自 你的主页</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{ $utils.dateUtils.format('2020-4-10 17:15:56') }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>

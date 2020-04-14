<template>
	<c-scroll>
		<view>
			<!-- 用户 -->
			<view class="bg-gray">
				<view class="user-content padding-left-sm">
					<view class="flex justify-start align-center padding-top">
						<view class="cu-avatar round xl margin-left" :style="{ backgroundImage: 'url(/static/image/default.jpeg)' }">
							<view class="cu-tag lg badge" :class="isFemale ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
						</view>
						<view class="content margin-left text-black margin-top-sm">
							<view class="text-bold">
								Bobobobb
								<text class="margin-left-sm cuIcon-write" @click="navToEditUser"></text>
							</view>
							<view class="text-cut padding-top-xs text-sm">我有我的奥妙</view>
						</view>
					</view>
					<view class="padding flex flex-wrap">
						<view v-for="(item, index) in ColorList" :key="index" class="cu-btn" :class="'border-color-' + item.color">{{ item.content }}</view>
					</view>
				</view>
			</view>
			<!-- 学校信息 -->
			<view class="card">
				<view class="margin-bottom-xs">学校信息</view>
				<view class="padding-left text-sm">
					<view>
						<text>学校</text>
						<text class="text-gray margin-left">西安电子科技大学</text>
					</view>
					<view>
						<text>专业</text>
						<text class="text-gray margin-left">计算机技术</text>
					</view>
					<view>
						<text>年级</text>
						<text class="text-gray margin-left">2019级硕士</text>
					</view>
				</view>
			</view>

			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs">个性展示</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view class="text-nowrap"><text>关键词</text></view>
						<view class="flex flex-wrap margin-left-xs">
							<view class="info-tag bg-red">工学类</view>
							<view class="info-tag bg-yellow">熬夜冠军</view>
							<view class="info-tag bg-red">吃鸡</view>
							<view class="info-tag bg-yellow">王者</view>
							<view class="info-tag bg-blue">腿特长</view>
							<view class="info-tag bg-blue">厨艺满分</view>
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-nowrap"><text>关键词</text></view>
						<view class="text-gray margin-left"><text>约卓游吗</text></view>
					</view>
				</view>
			</view>

			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs" style="height: 46rpx;">
					<view class="fl"><text>缘来</text></view>
					<view class="fr text-gray text-lg">
						<!-- <text class="cuIcon-attentionfill"></text> -->
						<text class="cuIcon-attentionforbidfill"></text>
					</view>
				</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view><image style="width: 220rpx" mode="widthFix" src="@/static/image/wyb.jpg"></image></view>
						<view class="margin-left" style="width: 80%;">
							<view>
								<text class="cuIcon-notification margin-right-xs"></text>
								<text>等一个人</text>
							</view>
							<view>
								<text class="text-gray margin-right">20-4-11</text>
								<text class="cuIcon-likefill text-red">20</text>
							</view>
						</view>
						<view class="text-gray text-lg"><text class="cuIcon-deletefill"></text></view>
					</view>
				</view>
			</view>

			<!-- 动态 -->
			<view class="card">
				<view class="margin-bottom-xs"><text>动态</text></view>
				<view class="flex justify-between flex-wrap text-sm">
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-1.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-2.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-3.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-1.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
				</view>
			</view>
		</view>
	</c-scroll>
</template>

<script>
export default {
	data() {
		return {
			isFemale: false,
			ColorList: [{ color: 'red', content: '23岁' }, { color: 'yellow', content: '射手座' }, { color: 'blue', content: '西安' }, { color: 'blue', content: '硕士在读' }]
		};
	},
	methods: {
		navToEditUser() {
			uni.navigateTo({
				url: '/pages/user/userEdit'
			})
		}
	},
};
</script>

<style lang="stylus">
.content
	max-width 400rpx
.cu-btn
	background-color transparent
	border 1rpx solid #007AFF
	border-radius 10rpx
	height 40rpx
	font-size 26rpx
	line-height 40rpx
	padding 6rpx 15rpx
	margin-left 18rpx
.card
	width 86%
	margin 40rpx auto 0
	border 1rpx solid #a7a7a7
	border-radius 15rpx
	color black
	padding 20rpx 20rpx 14rpx
	text
		height 46rpx
		line-height 46rpx
.text-sm
	font-size 26rpx
.info-tag
	padding 5rpx 12rpx
	margin 0 0 16rpx 20rpx
	border-radius 10rpx
.justify-between 
	width 96%
	margin 5rpx auto
.justify-between::after
	width 180rpx
	content ''
.dt-item 
	width 180rpx
.dt-image
	width 180rpx
	height 180rpx
	border-radius 20rpx
</style>

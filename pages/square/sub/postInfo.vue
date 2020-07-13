<template>
	<view  v-if="Object.keys(data).length">
		<view class="box-content">
			<view class="flex justify-start align-center">
				<view @click.stop="navToOtherUser(data.user.id)" class="cu-avatar round" :style="[{ backgroundImage: 'url(' + data.user.avatar + ')' }]">
					<view class="cu-tag badge" :class="data.user.sex == '女' ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view @click.stop="navToOtherUser(data.user.id)" class="margin-left-sm">
					<view class="box-userName text-hidden">{{ data.user.nickName }}</view>
					<view class="text-xs text-gray">{{ $utils.dateUtils.format(data.createTime) }}</view>
				</view>
				<view v-show="dotsShow" @click.stop="more" class="dots">
					<!--是否隐藏动态 -->
					<text v-if="!data.isPublic" class="margin-right-sm text-gray cuIcon-attentionforbid" />
					<text class="cuIcon-more" />
				</view>
			</view>
		</view>
		<view class="bg-white padding text-black padding-bottom-xs">
			<text class="text-wrap">{{ data.content }}</text>
			<view class="grid grid-square margin-top-xs" :class="data.images.length == 1 ? 'col-1' : 'col-3'">
				<view class="bg-img" v-for="item in data.images" :key="item.id" :style="{ backgroundImage: 'url(' + item.image + ')' }" @click.stop="viewImage(item.image)"/>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => ({})
		},
		dotsShow: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		viewImage(url) {
			let images = [];
			for (let obj of this.data.images) images.push(obj.image);

			uni.previewImage({ urls: images, current: url });
		},
		more() {
			this.$emit('more');
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			this.$u.route('/pages/user/otherUser', {id})
		}
	}
};
</script>

<style lang="stylus">
.box-userName
	font-size $uni-font-size-base
	color #333333
	max-width 300rpx
.box-content
	width 90%
	margin 0 auto
.image-sm
	width 40rpx
	height 40rpx
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
.dots
	margin-left auto
	margin-right 0
	padding-left 30rpx
	padding-right 10rpx
</style>

<template>
	<view class="post-info" v-if="Object.keys(data).length">
		<view class="box-content">
			<view class="flex justify-start align-center">
				<view @click.stop="navToOtherUser" class="cu-avatar round" :style="[{ backgroundImage: 'url(' + data.user.avatar + ')' }]">
					<view class="cu-tag badge" :class="data.user.isFemale ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
				</view>
				<view @click.stop="navToOtherUser" class="margin-left-sm">
					<view class="box-userName text-hidden">{{ data.user.userName }}</view>
					<view class="text-xs text-gray">{{ $utils.dateUtils.format(data.createTime) }}</view>
				</view>
				<!--是否隐藏动态 -->
				<view v-if="data.hidePost" class="margin-left text-gray cuIcon-attentionforbid"></view>
				<view v-show="dotsShow" @click.stop="more" class="dots"><text class="cuIcon-more"></text></view>
			</view>
		</view>
		<view class="bg-white padding text-black padding-bottom-xs" v-if="data.imageList">
			<text class="text-wrap">{{ data.content }}</text>
			<view class="grid grid-square margin-top-xs" :class="data.imageList.length == 1 ? 'col-1' : 'col-3'">
				<view
					class="bg-img "
					v-for="(item, index) in data.imageList"
					:key="index"
					:style="[{ backgroundImage: 'url(' + item + ')' }]"
					@click.stop="viewImage"
					:data-url="item"
				></view>
			</view>
		</view>
		
	</view>
</template>

<script>
import cInfoBar from '@/components/conlove/c-info-bar.vue';
export default {
	components: {cInfoBar},
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
		name() {},
		viewImage(e) {
			uni.previewImage({
				urls: this.data.imageList,
				current: e.currentTarget.dataset.url
			});
		},
		more() {
			this.$emit('more');
		},
		// 跳转用户资料
		navToOtherUser() {
			//当前统一跳转 其它用户
			uni.navigateTo({
				url: '/pages/user/otherUser'
			})
		}
	},
	
};
</script>

<style lang="stylus">
.post-info
	width 100%
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

<template>
	<view class="box-display">
		<view class="bg-white text-gray margin-left margin-bottom text-sm" >
			<view class="text-height">
				上传帖子的图片： {{imgList.length}}/6
			</view>
			<view>
				(第一张将作为封面展示，真实图片将优先获得曝光率~)
			</view>
		</view>
	
		<view style="height: 700rpx;">
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<6">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white">
			<view class="action">
				<button class="cu-btn bg-red round" @click="back">
					上一步
				</button>
			</view>
			<view class="action">
				<button class="cu-btn bg-red round" >
					发布 <text class="cuIcon-right"></text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [],
				isLoading: false,
			}
		},
		methods: {
			ChooseImage() {
				uni.chooseImage({
					success: (res) => {
						this.imgList.push(...res.tempFilePaths);
					}
				});
			},
			ViewImage(e) {
				console.log(e);
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					content: '确定要删除照片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			nextSec() {
				this.isLoading = true
			},
			back() {
				uni.showModal({
					title: '哎呀',
					content: '还没有完成，确定返回上一步吗？',
					cancelText: '手滑手滑',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.$emit("back");
						}
					}
				})
				
			}
		},
	}
</script>

<style lang="stylus">
.box-display
	width 90%
	margin 0 auto
.text-height 
	height 50rpx
	line-height 50rpx
.cu-bar 
	width 90%
	margin 0 auto
.cu-btn 
	padding 0 65rpx
	height 80rpx
.text-sm 
	font-size 26rpx
</style>

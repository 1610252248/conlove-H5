<template>
	<view>
		<c-custom><block slot="center">发表说说</block></c-custom>
		<view class="content">
			<view class="cu-form-group margin-xs" >
				<textarea style="min-height: 250rpx;"  @input="textareaInput" placeholder="此刻的想法..."></textarea>
			</view>
			<view class="cu-bar bg-white margin-top solids-top">
				<view class="action padding-left-xs">
					上传图片
				</view>
				<view class="action padding-right-xs">
					{{imgList.length}}/9
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @click="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @click.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @click="ChooseImage" v-if="imgList.length<9">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgList: [],
			textareaAValue: ''
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
		textareaInput(e) {
			this.textareaAValue = e.detail.value
		},
	},
	
	
};
</script>

<style lang="stylus">
.content
	height 800rpx
	width 100%
	margin 100rpx auto 0
.cu-form-group
	min-width calc(4em + 15px)
.solids-top::after 
	border-top 20upx solid #eee

</style>

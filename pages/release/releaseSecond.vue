<template>
	<view class="box-display">
		<view class="bg-white text-gray margin-left margin-bottom text-sm" >
			<view class="text-height" >
				上传帖子的图片：{{images.length}}/6
			</view>
			<view>
				(第一张将作为封面展示，真实图片将优先获得曝光率~)
			</view>
		</view>
	 
		<view style="height: 700rpx;" >
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img"  v-for="(item,index) in images" :key="index" @tap="ViewImage" :data-url="images[index]">
						<image :src="images[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="images.length<6">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		 
		<view class="cu-bar bg-white">
			<view class="action">
				<button class="cu-btn bg-red round" @click="show = true">
					上一步
				</button>
			</view>
			<view class="action">
				<u-button   class=" btn bg-red round" @click="nextSec">
					发布 <text class="cuIcon-right"></text>
				</u-button>
			</view>
		</view>
		
		<u-modal v-model="show" title="哎呀" cancel-text="手滑手滑" show-cancel-button
		content="信息还没保存，确定取消吗？" :mask-close-able="true" @confirm="confirm" />
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				default: ()=>{[]}
			},
		},
		data() {
			return {
				images: [],
				isLoading: false,
				show: false,// model 显示
			}
		},
		mounted() {
			setTimeout(() => {
				this.images = []
				let data = this._props.data;
				for(let obj of data) {
					this.images.push(obj.image)
				}
			}, 100)
		},
		methods: {
			async ChooseImage() {
				await this.$http.urlImgUpload('/fileUpload').then(res => {
					for(let image of res) {
						if(this.images.length < 6) this.images.push(image);
					}
				})
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.images,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				this.images.splice(e.currentTarget.dataset.index, 1)
			},
			nextSec() {
				if(!this.images || this.images.length == 0) {
					uni.showToast({
						title: '请至少选择一张照片',
						icon: 'none'
					})
					return ;
				}
				
				
				this.$emit('next-sec', this.images)
			},
			confirm() {
				this.$emit("back");
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
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 1000px
	font-size 30upx
	padding 0 60rpx
</style>

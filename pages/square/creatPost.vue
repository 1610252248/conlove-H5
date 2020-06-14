<template>
	<view>
		<c-custom @send="send"><block slot="center">发表说说</block></c-custom>
		<view class="content">
			<view class="cu-form-group margin-xs" >
				<textarea style="min-height: 250rpx;" v-model="data.content"  placeholder="此刻的想法..."></textarea>
			</view>
			<view class="cu-bar bg-white margin-top solids-top">
				<view class="action padding-left-xs">
					上传图片
				</view>
				<view class="action padding-right-xs">
					{{data.imageList.length}}/9
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in data.imageList" :key="index" @click="ViewImage" :data-url="data.imageList[index]">
					 <image :src="item" mode="aspectFill"  @click="viewImage" :data-url="item"></image>
						<view class="cu-tag bg-red" @click.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @click="ChooseImage" v-if="data.imageList.length<9">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	
	data() {
		return {
			data: {
				user: {
					avatar: '/static/image/default-2.jpeg',
					userName: 'QAQ',
					isFemale: true
				},
				createTime: '',
				content: '',
				imageList: [],
				comments: []
			},
		}
	},
	methods: {
		...mapMutations({
			addNewPost: 'addNewPost'
		}),
		ChooseImage() {
			uni.chooseImage({
				success: (res) => {
					this.data.imageList.push(...res.tempFilePaths);
					
					console.log(res.tempFiles);
					// console.log(res.tempFilePaths);
				}
			});
		},
		ViewImage(e) {
			console.log(e);
			uni.previewImage({
				urls: this.imageList,
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
						this.data.imageList.splice(e.currentTarget.dataset.index, 1)
					}
				}
			})
		},
		send() {
			this.data.createTime = this.$utils.dateUtils.currentDate();
			this.addNewPost(this.data);
			uni.switchTab({
				url: '/pages/square/square'
			})
		},
		viewImage(e) {
			uni.previewImage({
				urls: this.data.imageList,
				current: e.currentTarget.dataset.url,
			});
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

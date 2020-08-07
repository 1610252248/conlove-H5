<template>
	<view>
		<c-custom @send="send" v-if="id == -1"><block slot="center">发布动态</block></c-custom>
		<c-custom @send="send" sendName="修改" v-else ><block slot="center">修改动态</block></c-custom>
		<view class="content">
			<view class="cu-form-group margin-xs"><textarea style="min-height: 250rpx;" v-model="post.content" placeholder="此刻的想法..."></textarea></view>
			<view class="cu-bar solids-top padding-xs">
				<view class="action">上传图片</view>
				<view class="action">{{ images.length }}/9</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-3 grid-square flex-sub">
					<view class="bg-img" v-for="(item, index) in images" :key="index" @click="ViewImage(item)">
						<image :src="item" mode="aspectFill" />
						<view class="cu-tag bg-red" @click.stop="DelImg(index)"><text class="cuIcon-close" /></view>
					</view>
					<view class="solids" @click="ChooseImage" v-if="images.length < 9"><text class="cuIcon-cameraadd"></text></view>
				</view>
			</view>
		</view>
		<u-modal v-model="show" :content="'确定要'+(id==-1?'发布':'修改')+'吗？'" :mask-close-able="true" @confirm="confirm" />
		<u-modal v-model="showDel" content="确定要删除照片吗？" :mask-close-able="true" @confirm="confirmDel" />
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			post: {
				content: '',
			},
			images: [],
			show: false,
			showDel: false,
			imgIndex: 0,
			id: -1,
		};
	},
	onLoad({id}) {
		if(id != null) {
			this.getPost(id);
			this.id = id;
		} else {
			this.id = -1;
		}
	},
	methods: {
		getPost(id) {
			this.$http.get('/getModify/post', {id}).then(res => {
				this.post = res.data;
				for(let obj of this.post.images) {
					this.images.push(obj.image)
				}
			})
		},
		
		ChooseImage() {
			this.$http.urlImgUpload('/fileUpload').then(res => {
				for (let image of res) {
					if (this.images.length < 9) this.images.push(image);
				}
			});
		},

		ViewImage(url) {
			uni.previewImage({
				urls: this.images,
				current: url
			});
		},
		confirmDel() {
			this.images.splice(this.imgIndex, 1);
		},
		DelImg(index) {
			this.imgIndex = index;
			this.showDel = true;
		},
		confirm() {
			// 说明是修改动态
			if(this.id != -1) {
				this.$http.post('/updatePost', {post: this.post,  images: this.images}).then(res => {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						back: true
					});
					this.$eventBus.$emit("update-post");
				})	
			} else {
				
				this.$http.post('/addPost', { content: this.post.content, images: this.images }).then(res => {
					// 全局事件 表明有新的数据，让post刷新
					this.$eventBus.$emit("add-post");
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						isTab: true,
						url: '/pages/square/square'
					});
				});
			}
		},
		send() {
			if (this.post.content.length == 0 && this.images.length == 0) {
				this.$u.toast('不能发布空白的动态');
				return;
			}
			this.show = true;
		}
	}
};
</script>

<style lang="stylus">
.content
	width 100%
.cu-form-group
	min-width calc(4em + 15px)
.solids-top::after
	border-top 20upx solid #eee
</style>

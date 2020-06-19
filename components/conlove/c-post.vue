<template>
	<view class="post">
		<view class="display-box solids-bottom" @click="navToPostDetail(false)">
			<!-- 说说内容 -->
			<post-info :dotsShow="dotsShow" :data="postData" @more="showModal" />
			<!-- 赞评论功能 -->
			<c-info-bar @click-message="clickMessage" showMode />
			<!-- 评论 至多展示三条评论 -->
			<view class="post-comment margin-top-sm">
				<view class="flex justify-start " v-for="(item, index) in postData.comments" :key="index">
					<view class="text-grey text-nowrap">{{ item.userName + '：' }}</view>
					<view class="text-black text-hidden">{{ item.content }}</view>
				</view>
			</view>
			<view class="post-like margin-top-xs">
				<view class="fl "><text class="text-gray margin-left-lg  text-xs">查看全部 13 条评论 >></text></view>
			</view>
		</view>

		<!-- 更多菜单 -->
		<view class="cu-modal bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog radius">
				<view class="cu-list menu text-black">
					<!-- 隐藏/公开动态 -->
					<view class="cu-item" @click="changeHidePost">
						<view class="content">
							<text class="margin-right" :class="postData.hidePost?'cuIcon-attention ':'cuIcon-attentionforbid'"></text>
							<text>{{postData.hidePost? '公开动态' : '隐藏动态'}}</text>
						</view>
					</view>
					<!-- 删除动态 -->
					<view class="cu-item" @click="deletePost">
						<view class="content">
							<text class="cuIcon-delete margin-right"></text>
							<text>删除动态</text>
						</view>
					</view>
					<view class="cu-item" @click="modifyPost">
						<view class="content">
							<text class="cuIcon-edit margin-right"></text>
							<text>修改动态</text>
						</view>
					</view>
					<view class="cu-item"><view class="content">取消</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue';
import cInfoBar from '@/components/conlove/c-info-bar.vue';
import { mapActions } from 'vuex'
export default {
	name: 'post',
	components: {
		postInfo,
		cInfoBar
	},
	props: {
		postData: {
			type: Object,
			default: () => ({
				user: {
					avatar: '/static/image/default.jpeg',
					userName: 'Bobbobbb',
					isFemale: false
				},
				hidePost: false,
				content: '更新内容了，hhhhhhhhhhhhhhhh',
				createTime: '2020-5-20 13:14:20',
				imageList: [
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				],
				comments: [
					{
						userName: 'Abraxas',
						content: '赞赞~asdddddddddddddddddad~~！！'
					},
					{
						userName: '小冰 ',
						content: 'wls bbbbbbbbbb！！'
					},
					{
						userName: 'The shy',
						content: 'wls bbbbbbbbbbbasdddddddddddddbb！！'
					}
				]
			})
		},
		dotsShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			bottomModal: false
		};
	},
	methods: {
		 ...mapActions([
		  'setPostData', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
		]),
		/**
		 * @param {Object} isFocus 是否点击message 进去详情的
		 * 跳转详情页面
		 */
		navToPostDetail(isFocus) {
			uni.navigateTo({
				url: '/pages/square/postDetail?isFocus=' + isFocus
			});
		},
		clickMessage() {
			this.navToPostDetail(true);
		},

		//显示modal
		showModal() {
			this.bottomModal = true;
		},
		//关闭modal
		hideModal() {
			this.bottomModal = false;
		},
		//改变隐藏动态
		changeHidePost() {
			this.postData.hidePost = !this.postData.hidePost;
			uni.showToast({
				title: this.postData.hidePost ? '隐藏动态成功' : '公开动态成功',
				icon: 'none'
			})
		},
		//删除动态
		deletePost() {
			uni.showToast({
				title: '删除动态成功',
				icon: 'none'
			})	
		},
		// 更新动态
		modifyPost() {
			console.log(this.postData);
			this.setPostData(this.postData);
			uni.navigateTo({
				url: '/pages/square/creatPost'
			})
		}
	}
};
</script>

<style lang="stylus">
.post
	width 100%
.display-box
	padding 30rpx 0
	width 100%
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
</style>

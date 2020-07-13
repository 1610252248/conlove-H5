<template>
	<view>
		<view  class="display-box solids-bottom" v-for="(item, index) in lists" :key="item.id" @click="navToPostDetail(false, item.id)">
			<!-- 说说内容 -->
			<post-info :data="item" :dotsShow="dotsShow" @more="showModal(index)"/>
			<!-- 赞和评论 -->
			<post-info-bar :data="item" showMode :isAppreciate="isAppreciate(item.id)" 
			@change-appreciate="changAppreciate($event, index)" 
				@click-message="navToPostDetail(true, item.id)"
			/>
			<!-- 评论 至多展示三条评论 -->
			<view class="post-comment margin-tb-sm">
				<view class="flex justify-start" v-if="index < 3" v-for="(comment, index) in item.comments" :key="comment.id">
					<view class="text-grey text-nowrap">{{ comment.user.nickName + '：' }}</view>
					<view class="text-black text-hidden">{{ comment.content }}</view>
				</view>
			</view>
			<!-- 评论超过3个，显示【查看全部 】 -->
			<view class="post-like margin-bottom-xs" v-if="item.comments.length > 3">
				<text class="text-gray margin-left text-xs">查看全部 {{ item.comments.length }} 条评论 >></text>
			</view>
		</view>
		<!-- 加载 -->
		<view class="cu-load" :class="!isLoad ? 'loading' : 'over'" />
		
		<!-- 更多菜单 -->
		<view class="cu-modal bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog">
				<view class="cu-list menu" v-if="lists.length">
					<!-- 隐藏/公开动态 -->
					<c-text @click="changPublic" :title="!lists[idx].isPublic? '公开动态' : '隐藏动态'"
					:icon="!lists[idx].isPublic?'cuIcon-attention ':'cuIcon-attentionforbid'" />
					
					<!-- 删除动态 -->
					<c-text @click="show=true" title="删除动态" icon="cuIcon-delete" />
					
					<!-- 修改动态 -->
					<c-text @click="modify" title="修改动态" icon="cuIcon-edit" />
					<c-text class="c-border-top" title="取消" />
				</view>
			</view>
		</view>
		
		<u-modal v-model="show"  show-cancel-button content="确定删除吗" :mask-close-able="true" @confirm="deletePost" />
		
	</view>
</template>

<script>
import postInfo from '@/pages/square/sub/postInfo.vue';
import postInfoBar from '@/pages/square/sub/post-info-bar.vue';
export default {
	components: {
		postInfo,
		postInfoBar
	},
	props: {
		lists: {
			type: Array,
			default: () => {[]}
		},
		appreciateList: {
			type: Array,
			default: () => {[]}
		},
		isLoad: {
			type: Boolean,
			type: false,
		},
		dotsShow: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			bottomModal: false,
			idx: 0, // 选中的下标
			show: false, // 提示model
		};
	},
	methods: {
		// 帖子是否点过赞
		isAppreciate(id) {
			let idx = this.appreciateList.findIndex(item => item.postId == id);
			return idx != -1 ;
		},
		
		// 点击评论按钮
		clickMessage(id) {
			this.navToPostDetail(true, id);
		},
		// isFocus 是否点击评论按钮
		navToPostDetail(isFocus, id) {
			this.$u.route('/pages/square/postDetail', { isFocus, id });
		},

		// 动态改变点赞个数
		changAppreciate(val, idx) {
			this.$emit('chang-appreciate', val, idx);
		},
		
		//显示modal
		showModal(index) {
			this.idx = index;
			this.bottomModal = true;
		},
		//关闭modal
		hideModal() {
			this.bottomModal = false;
		},
		//改变隐藏动态
		changPublic() {
			this.$emit('chang-public', this.idx);
		},
		//删除动态
		deletePost() {
			this.$emit('delete', this.idx)
		},
		// 更新动态
		modify() {
			this.$u.route('/pages/square/creatPost', {id: this.lists[this.idx].id})
		},
	}
};
</script>

<style lang="stylus">
.display-box
	padding 30rpx 0 10rpx
	width 100%
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
</style>

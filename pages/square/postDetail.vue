<template>
	<view>
		<c-scroll minHeight @scrolltolower="lower" :scrollId="scrollId">
			<!-- 帖子内容 -->
			<post-info :data="post" style="padding-top: 30rpx;" />
			<!-- xx赞 xx评论 -->
			<post-info-bar :data="post" @click-message="clickMessage" :isAppreciate="isAppreciate" @change-appreciate="changAppreciate" />
			<!-- 评论 -->
			<c-comment id="comment"  class="margin-top-sm" :comments="comments" 
			 @nav-to-reply="navToReply" @change-like="changLike" @reply="reply" />
			 
			<view class="cu-load" :class="!isLoad ? 'loading' : 'over'"/>
		</c-scroll>
		<!-- 输入框 -->
		<c-input ref="cInput" :placeholder="placeholder" @send-comment="sendComment" />

		<u-toast ref="uToast" />
	</view>
</template>

<script>
import { mapState } from 'vuex';
import postInfoBar from '@/pages/square/sub/post-info-bar.vue';
import postInfo from '@/pages/square/sub/postInfo.vue';
export default {
	components: {
		postInfo,
		postInfoBar
	},
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			post: {}, // 帖子对象
			comments: [], // 评论列表
			// 请求评论参数
			page: 1, //当前页
			pageSize: 8, // 每页数量
			totalPage: 0, // 总页数
			isAppreciate: false, // 帖子是否点赞
			// 加载更多
			isLoad: false,
			loadCnt: 0, // 防抖动
			scrollId: '' ,// 滚动id
			//  默认评论提示
			placeholder: '评论',
			cIndex: '', // 回复评论的下标
			parentCommentId: 0 // 回复评论的id
		};
	},
	onLoad({ isFocus, id }) {
		// 是否聚焦输入框
		if (isFocus == 'true') {
			this.$nextTick(() => {
				this.$refs.cInput.focusInput()
			});
		}
		this.$http.get('/verifyLogin')
		this.getPost(id);
		this.getComments(id);
		this.getPostAppreciate(id);
		// this.getAppreciate();
	},
	methods: {
		
		//  帖子对象
		getPost(id) {
			this.$http.get('/getPost', { id }).then(res => {
				this.post = res.data;
			});
		},
		// 评论列表
		getComments(id) {
			let data = { id: id, page: this.page, pageSize: this.pageSize };
			this.$http.get('/postComment', data).then(res => {
				// 设置每个评论，是否点赞
				this.setAppreciate(res.data.list)
				this.totalPage = res.data.pages;
				// 没有数据或者只有1页
				if (this.page >= this.totalPage) this.isLoad = true;
			});
		},
		// 设置每个评论，是否点赞
		setAppreciate(list) {
			this.$http.get('/post/commentAppreciate').then(res => {
				let appreciateList = res.data;
				for(let obj of list) {
					let idx = appreciateList.findIndex(item => item.commentId == obj.id)
					obj.isAppreciate = (idx == -1 ? false : true);
					this.comments.push(obj)
				}
			});
		},
		// 当前帖子 是否点赞
		getPostAppreciate(id) {
			this.$http.get('/post/isAppreciate', { id }).then(res => {
				if (res.data != null) this.isAppreciate = true;
			});
		},
		// 改变点赞个数
		changAppreciate(val) {
			this.post.appreciate += val;
		},
		clickMessage() {
			this.placeholder = '评论'
			this.$refs.cInput.focusInput()
		},
	
		// 发送评论
		sendComment(content) {
			// 说明是 子评论
			if(this.placeholder != '评论') {
				let data = {content, commentId: this.parentCommentId}
				this.$http.post('/post/replyComment', data).then(res => {
					let comment = res.data;
					comment.user = this.userDB;
					let i = this.cIndex;
					if(this.comments[i].newComments == null)
						this.comments[i].newComments = [comment];
					else 
						this.comments[i].newComments.unshift(comment);
				});
				return ;
			}
			
			this.scrollId = '';
			this.$http.post('/post/sendComment', { content, postId: this.post.id }).then(res => {
				let comment = res.data;
				comment.user = this.userDB;
				comment.childComments = []
				comment.newComments = []
				this.comments.unshift(comment);
				this.scrollId = 'comment';
			});
		},
		/**
		 * @param {Object} id 评论id
		 * @param {Object} isLike 是否点赞
		 */
		changLike(id, isLike) {
			if (!isLike) { 
				this.$http.post('/post/addCommentLike', { commentId: id });
			} else {
				this.$http.get('/post/delCommentLike', { id});
			}
		},
		// 回复评论
		reply(index, id, name) {
			this.cIndex = index;
			this.parentCommentId = id;
			this.$refs.cInput.clearContent();
			this.placeholder = '回复'+ name + ': ';
			this.$refs.cInput.focusInput()
		},
		// 跳转回复评论页面
		navToReply(id) {
			this.$u.route('/pages/square/reply/post-reply-comment', { id });
		},
		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			// loadCnt 防止划多次
			if (this.loadCnt > 0) return;
			if (this.isLoad) return;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getComments(this.post.id);
			else this.isLoad = true;
			this.loadCnt--;
		}
	}
};
</script>

<style lang="stylus">

</style>

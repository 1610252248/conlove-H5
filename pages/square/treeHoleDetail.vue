<template>
	<view>
		<c-scroll minHeight @scrolltolower="lower" :scrollId="scrollId">
			<!-- 树洞内容 -->
			<tree-hole-info :data="treeHole" />
			<!-- xx赞 和 xx评论 -->
			<tree-hole-info-bar :data="treeHole" :isAppreciate="isAppreciate" @change-appreciate="changAppreciate" @click-message="focusInput" />
		
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
import treeHoleInfo from '@/pages/square/sub/tree-hole-info.vue';
import treeHoleInfoBar from '@/pages/square/sub/tree-hole-info-bar.vue';
export default {
	components: {
		treeHoleInfo,
		treeHoleInfoBar
	},
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},

	data() {
		return {
			treeHole: {}, // 帖子对象
			comments: [], // 评论列表
			isAppreciate: false, // 帖子是否点赞
			// 请求评论参数
			page: 1, //当前页
			pageSize: 8, // 每页数量
			totalPage: 0, // 总页数
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
		if (isFocus == 'true') this.focusInput();
		this.getTreeHole(id);
		this.getComments(id);
		this.getTreeHoleAppreciate(id);
	},
	methods: {
		// 跳转回复评论页面
		navToReply(id) {
			this.$u.route('/pages/square/reply/tree-reply-comment', { id });
		},
		// 当前帖子 是否点赞
		getTreeHoleAppreciate(id) {
			this.$http.get('/treeHole/isAppreciate', { id }).then(res => {
				if (res.data != null) this.isAppreciate = true;
			});
		},
		
		// id 评论id,  isLike 是否点赞
		changLike(id, isLike) {
			if (!isLike) { 
				this.$http.post('/treeHole/addCommentLike', { commentId: id });
			} else {
				this.$http.get('/treeHole/delCommentLike', { id});
			}
		},
		// 动态改变点赞个数
		changAppreciate(val) {
			this.treeHole.appreciate += val;
		},
		focusInput() {
			this.$nextTick(() => {
				this.$refs.cInput.isFocus = true;
			});
		},
		
		// 树洞详情
		getTreeHole(id) {
			this.$http.get('/getTreeHole', { id }).then(res => {
				this.treeHole = res.data;
			});
		},
		
		// 评论列表
		getComments(id) {
			let data = { id: id, page: this.page, pageSize: this.pageSize };
			this.$http.get('/treeHole/getComments', data).then(res => {
				// 设置每个评论，是否点赞
				this.setAppreciate(res.data.list)
				this.totalPage = res.data.pages;
				// 没有数据或者只有1页
				if (this.page >= this.totalPage) this.isLoad = true;
			});
		},
		
		// 设置每个评论，是否点赞
		setAppreciate(list) {
			this.$http.get('/treeHole/commentAppreciate').then(res => {
				let appreciateList = res.data;
				for(let obj of list) {
					let idx = appreciateList.findIndex(item => item.commentId == obj.id)
					obj.isAppreciate = (idx == -1 ? false : true);
					this.comments.push(obj)
				}
			});
		},
		// 回复评论
		reply(index, id, name) {
			this.cIndex = index;
			this.parentCommentId = id;
			this.$refs.cInput.clearContent();
			this.placeholder = '回复'+ name + ': ';
			this.$refs.cInput.focusInput()
		},
		
		// 发送评论
		sendComment(content) {
			// 说明是 子评论
			
			if(this.placeholder != '评论') {
				let data = {content, commentId: this.parentCommentId}
				this.$http.post('/treeHole/replyComment', data).then(res => {
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
			this.$http.post('/treeHole/sendComment', { content, treeHoleId: this.treeHole.id }).then(res => {
				let comment = res.data;
				comment.user = this.userDB;
				comment.childComments = []
				comment.newComments = []
				this.comments.unshift(comment);
				this.scrollId = 'comment';
			});
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
			if (this.page <= this.totalPage) this.getComments(this.treeHole.id);
			else this.isLoad = true;
			this.loadCnt--;
		}
	}
};
</script>
<style lang="stylus">
.box-content
	width 90%
	background-color #ffadad
	padding 20% 0
	margin-top -100rpx
	margin-bottom 20rpx
	border 1px solid #c7c7c7
	display table
	text
		display table-cell
		vertical-align middle
		text-align center
.cu-avatar
	z-index 999
</style>

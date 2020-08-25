<template>
	<view>
		<!-- 导航bar -->
		<c-custom-mid>
			<block slot="center">{{ comment.childComments == null ? '' : comment.childComments.length + '条回复' }}</block>
		</c-custom-mid>
		<c-scroll minHeight :scrollId="scrollId">
			<view class="cu-list menu-avatar comment " id="comment">
				<!-- 主评论 -->
				<c-comment-info v-if="Object.keys(comment).length" :comment="comment" @change-like="pChangLike" :replyInfo="false" @reply="clickMessage" />
			</view>
			
			<!-- 子评论 -->
			<c-comment :anonymous="true" :treeHoleId="comment.treeHoleId" @reply="reply" @change-like="changLike" :comments="comment.childComments" :replyInfo="false" />
			<!-- 加载 -->
			<view class="cu-load" :class="!isLoad ? 'loading' : 'over'"></view>
		</c-scroll>
		<!-- 输入框 -->
		<c-input ref="cInput" :placeholder="placeholder" @send-comment="sendComment" />
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			comment: {},
			placeholder: '评论',
			scrollId: '',
			replyName: '',
			isLoad: false
		};
	},
	onLoad({ id }) {
		this.getComment(id);
		setTimeout(() => {
			this.isLoad = true;
		}, 500);
	},
	methods: {
		// 父评论
		clickMessage() {
			this.placeholder = '评论';
			this.$refs.cInput.focusInput();
		},
		//父评论 点赞
		pChangLike(id, isLike) {
			if (!isLike) {
				this.$http.post('/treeHole/addCommentLike', { commentId: id });
			} else {
				this.$http.get('/treeHole/delCommentLike', { id });
			}
		},
		// 回复评论
		// index 第几个子评论，父评论id，回复用户名 name
		reply(index, id, name) {
			this.replyName = name;
			this.$refs.cInput.clearContent();
			this.placeholder = '回复' + name + ': ';
			this.$refs.cInput.focusInput();
		},
		// 发送评论
		sendComment(content) {
			// 说明是 子评论
			let data = { content, commentId: this.comment.id };
			if (this.placeholder != '评论') data.replyName = this.replyName;
			this.scrollId = '';
			this.$http.post('/treeHole/replyComment', data).then(res => {
				let comment = res.data;
				comment.user = this.userDB;
				this.comment.childComments.unshift(comment);
				this.comment.
				this.scrollId = 'comment';
			});
		},
		// 拿数据
		getComment(id) {
			this.$http.get('/treeHole/getReply', { id }).then(res => {
				this.comment = res.data;
				this.getAppreciate(this.comment.childComments);
			});
		},
		// 用户点赞评论列表
		getAppreciate(comments) {
			this.comment.childComments = [];
			this.$http.get('/treeHole/reply/commentAppreciate').then(res => {
				let appreciateList = res.data;
				for (let obj of comments) {
					let idx = appreciateList.findIndex(item => item.commentId == obj.id);
					obj.isAppreciate = idx == -1 ? false : true;
					this.comment.childComments.push(obj);
				}
			});
		},

		/**
		 * @param {Object} id 评论id
		 * @param {Object} isLike 是否点赞
		 */
		changLike(id, isLike) {
			if (!isLike) {
				this.$http.post('/treeHole/reply/addCommentLike', { commentId: id });
			} else {
				this.$http.get('/treeHole/reply/delCommentLike', { id });
			}
		}
	}
};
</script>
<style lang="stylus">

</style>

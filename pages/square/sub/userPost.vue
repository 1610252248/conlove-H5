<template>
	<view>
		<c-custom-mid><block slot="center">
			{{nickName }}
		</block></c-custom-mid>
		<c-scroll @scrolltolower="lower" midHeight>
			<c-post :lists="postList" :appreciateList="appreciateList" :isLoad="isLoad" x
				@chang-appreciate="changAppreciate"   @chang-public="changPublic"
				@delete="deletePost"/>
		</c-scroll>
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
			// 帖子数组
			postList: [],
			// 点赞帖子数组
			appreciateList: [],
			// 请求帖子参数
			page: 1, //当前页
			pageSize: 4, // 每页数量
			totalPage: 0 ,// 总页数
			// 加载更多
			isLoad: false,
			loadCnt: 0,
			dotsShow: false,
			nickName: ''
		};
	},
	
	onLoad({id}) {
		// 初始化拿到数据
		if(id == null) {
			this.$u.toast('地址错误');
			return ;
		}
		this.init(id);
		// 监听新动态，重新拿到请求
		this.$eventBus.$on('update-post', () => {
			this.init(id);
		});
		if(this.userDB.id == id) {
			this.dotsShow = true;
		}
	},
	methods: {
		// 初始化函数
		init(id) {
			this.postList = []
			this.page = 1;
			this.getUser(id)
			this.getPost(id)

		},
		getUser(id) {
			this.$http.get('/getUser', {id}).then(res => {
				this.nickName = res.data.user.nickName + '的动态'
			})
		},
		// 请求帖子数据
		getPost(id) {
			let data = {id, page: this.page, pageSize: this.pageSize }
			this.$http.get('/user/getUserPost', data).then(res => {
				res = res.data;
				this.totalPage = res.pages;
				this.postList.push(...res.list);
				if(this.totalPage <= this.page) this.isLoad = true;
				// 先数据，在点赞帖子，防止渲染过快
				this.getPostLike(id)
			});
		},
		// 请求点赞帖子
		getPostLike(id) {
			this.$http.get('/getPostAppreciate', {id}).then(res => {
				this.appreciateList = res.data;
			});
		},
		
		// 动态改变点赞个数
		changAppreciate(val, idx) {
			this.postList[idx].appreciate += val;
		},
		// 公开/私有
		changPublic(idx) {
			this.postList[idx].isPublic ^= 1;
			this.$http.post('/updatePost', {post: this.postList[idx]});
		},
		deletePost(idx) {
			this.$http.post('/deletePost', this.postList[idx]).then(res => {
				this.postList.splice(idx, 1);
			})
		},
		
		// 页面触底，加载更多数据
		lower() {
			// 防止抖动
			if (this.loadCnt > 0) return;
			if (this.isLoad) return;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getPost();
			else this.isLoad = true;
			this.loadCnt--;
		}
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

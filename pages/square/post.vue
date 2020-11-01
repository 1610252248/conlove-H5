<template>
	<c-scroll minHeight @scrolltolower="lower">
		<view class="padding-tb-sm solids-bottom" v-if="swaiperList.length > 0">
			<u-swiper style="width: 650rpx; margin: 0 auto;" :list="swaiperList"></u-swiper>
		</view>
		<c-post :lists="postList" :appreciateList="appreciateList"  
			@chang-appreciate="changAppreciate" :isLoad="isLoad"  @chang-public="changPublic"
			@delete="deletePost"/>
	</c-scroll>
</template>

<script>

export default {
	data() {
		return {
			// 帖子数组
			swaiperList: [
					// {image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'},
					// {image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'},
					// {image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'}
				],
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
		};
	},
	mounted() {
		// 初始化拿到数据
		this.init();
		// 监听新动态，重新拿到请求
		this.$eventBus.$on('add-post', () => {
			this.$nextTick(() => {
				this.init();
			});
		});
		this.$eventBus.$on('login-success', () => {
			this.$nextTick(() => {
				this.init();
			});
		});
	},
	methods: {
		// 初始化函数
		init() {
			this.postList = []
			this.page = 1;
			this.getPost()
			this.getSwiper()
		},
		// 获取轮播
		getSwiper() {
			this.swaiperList = []
			this.$http.get('/swiper/all').then(res => {
				for(let o of res.data) {
					if(o.isPublic === 1) {
						this.swaiperList.push(o)
					}
				}
			})
		},
		// 请求帖子数据
		getPost() {
			this.$http.get('/getAllPost', { page: this.page, pageSize: this.pageSize }).then(res => {
				res = res.data;
				this.totalPage = res.pages;
				if(this.page >= this.totalPage) this.isLoad = true;
				this.postList.push(...res.list);
				// 请求数据玩之后，在请求点赞数组，避免渲染过快
				this.getPostLike()
			});
		},
		// 请求点赞帖子
		getPostLike() {
			this.$http.get('/getPostAppreciate').then(res => {
				this.appreciateList = res.data;
			});
		},
		
		// 动态改变点赞个数
		changAppreciate(val, idx) {
			this.postList[idx].appreciate += val;
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

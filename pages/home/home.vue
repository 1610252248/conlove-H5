<template>
	<view >
		<c-scroll @scrolltolower="lower" midHeight>
			<c-home :lists="list" :isLoad="isLoad" @chang-public="changPublic" @delete="deleteSticker"
			 />
		</c-scroll>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [], // 首页列表渲染的数据
			isNoData: false, //延迟2s拿数据
			isLoad: false,
			loadCnt: 0,
			page: 1, //当前请求页
			pageSize: 4, // 每页数量
			totalPage: 0, // 总页数
		};
	},
	onLoad() {
		this.init();
		this.$eventBus.$on('update-sticker', () => {
			this.init();
		})
	},
	onPullDownRefresh() {
		this.$http.get('/getAllSticker', {page: 1, pageSize: 10}).then(res => {
			let lastId = this.list[0].id;
			for(let obj of res.data.list) {
				// 如果是更新的
				uni.getImageInfo({
					src:obj.images[0].image ,
					success: res => {
						if(obj.id > lastId)  {
							obj.isLong = res.height*680/res.width * 2 > 800
							this.list.push(obj)
						}
					}
				})
			}
		})
		setTimeout(() => {
			uni.stopPullDownRefresh();
		}, 500)
	},
	
	methods: {
		/**
		 * 初始化拿数据,清空原数据之后请求
		 */
		init() {
			this.page = 1;
			this.list = [];
			this.getListData();
		},

		/**
		 * 获取首页列表的数据
		 */
		getListData() {
			this.$http.get('/getAllSticker', {page: this.page, pageSize: this.pageSize}).then(res => {
				res = res.data;
				this.totalPage = res.pages;
				this.page = res.pageNum;
				if(this.page >= this.totalPage) this.isLoad = true
				for(let obj of res.list) {
					uni.getImageInfo({
						src:obj.images[0].image ,
						success: res => {
							obj.isLong = res.height*680/res.width > 800
							this.list.push(obj)
						}
					})
				}
			})
		},
		// 公开/私有 
		changPublic(idx) {
			this.list[idx].isPublic ^= 1;
			this.$http.post('/updateSticker', {sticker: this.list[idx]});
		},
		
		// 删除帖子
		deleteSticker(idx) {
			this.$http.post('/deleteSticker',this.list[idx]).then(res => {
				this.list.splice(idx, 1);
			})
		},
		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			// loadCnt 防止划多次
			if(this.loadCnt > 0) return ;
			if(this.isLoad) return ;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getListData();
			else this.isLoad = true;
			this.loadCnt--;
		},

		/**
		 * 获取性别图片地址
		 */
		getSexImage(sex) {
			return require('@/static/image/' + (sex === 0 ? 'male.png' : 'female.png'));
		},

		/**
		 * 跳转首页详情
		 */
		navToHomeDetail(id) {
			uni.navigateTo({
				url: '/pages/home/homeDetail?id=' + id
			});
		}
	}
};
</script>

<style lang="stylus">
// .bottom-bar 
// 	border-radius 10rpx
// 	color #FFFFFF
// 	background-color #600b7c;
// 	opacity: 0.9;
	
// 	position absolute
// 	bottom 0
// 	width 100%
// 	.content 
// 		display flex
// 		height 70rpx
// 		line-height 70rpx
// 		width 80%
// 		margin 0 auto
	
// .btn
// 	color #ffffff !important
// 	background-image linear-gradient(135deg, #ff924d, #fc696e)
// 	border-radius 1000px
// 	font-size 26upx
// 	margin auto 0 auto auto
// 	height 60rpx
// 	line-height 60rpx
// 	width 200rpx
</style>

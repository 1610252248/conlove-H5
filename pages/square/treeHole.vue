<template>
	<c-scroll @scrolltolower="lower">
		<view v-for="(item, index) in treeHoleList" :key="item.id" class="solids-bottom padding-bottom" @click="navToTreeHoleDetail(false, item.id)">
			<!-- 树洞内容 -->
			<tree-hole-info :data="item" />

			<!-- xx赞 和 xx评论 -->
			<tree-hole-info-bar
				:data="item"
				:isAppreciate="isAppreciate(item.id)"
				@change-appreciate="changAppreciate($event, index)"
				@click-message="navToTreeHoleDetail(true, item.id)"
			/>
		</view>
		<view class="cu-load" :class="!isLoad ? 'loading' : 'over'"></view>
	</c-scroll>
</template>

<script>
import treeHoleInfo from '@/pages/square/sub/tree-hole-info.vue';
import treeHoleInfoBar from '@/pages/square/sub/tree-hole-info-bar.vue';
export default {
	components: {
		treeHoleInfo,
		treeHoleInfoBar
	},
	data() {
		return {
			// 树洞数据列表
			treeHoleList: [],
			// 用户点赞树洞列表
			appreciateList: [],
			isLoad: false,
			page: 1, //当前请求页
			pageSize: 4, // 每页数量
			totalPage: 0 // 总页数
		};
	},
	mounted() {
		this.init();
		// 监听新动态，重新拿到请求
		this.$eventBus.$on('add-tree-hole', () => {
			this.$nextTick(() => {
				this.init();
			});
		});
	},
	methods: {
		// 初始化数据
		init() {
			this.treeHoleList = [];
			this.getTreeHole();
			
		},
		// 树洞数据列表
		getTreeHole() {
			this.$http.get('/getAllTreeHole', { page: this.page, pageSize: this.pageSize }).then(res => {
				res = res.data;
				this.totalPage = res.pages;
				if(this.page >= this.totalPage) this.isLoad = true;
				this.treeHoleList.push(...res.list);
				// 请求数据玩之后，在请求点赞数组，避免渲染过快
				this.getTreeHoleLike();
			});
		},
		// 用户点赞的树洞
		getTreeHoleLike() {
			this.$http.get('/treeHole/getAppreciate').then(res => {
				this.appreciateList = res.data;
			});
		},
		navToTreeHoleDetail(isFocus, id) {
			this.$u.route('/pages/square/treeHoleDetail', { isFocus, id });
		},
		// 得到当前动态 点过/没点过赞
		isAppreciate(id) {
			let idx = this.appreciateList.findIndex(item => item.treeHoleId == id);
			return idx == -1 ? false : true;
		},

		// 动态改变点赞个数
		changAppreciate(val, idx) {
			this.treeHoleList[idx].appreciate += val;
		},

		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			// 防止抖动
			if (this.loadCnt > 0) return;
			if (this.isLoad) return;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getTreeHole();
			else this.isLoad = true;
			this.loadCnt--;
		}
	}
};
</script>

<style lang="stylus">
.box-content
	width 90%
	padding 30% 0
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

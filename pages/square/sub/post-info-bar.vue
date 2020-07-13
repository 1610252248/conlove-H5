<template>
	<view>
		<c-info-bar 
		 :data="data" :isAppreciate="isLike"
		 @chang-appreciate="changAppreciate()" 
		 @click-message="clickMessage()" 
		 :showMode="showMode" />
	</view>
</template>

<script>
/**
 * 二次封装 动态帖子的 赞和评论
 */
export default {
	props: {
		// 动态帖子的数据
		data: {
			type: Object,
			default: () => ({})
		},
		// 用户是否点过赞
		isAppreciate:{
			type: Boolean,
			default: false,
		},
		
		showMode:{
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			// 来接受 isAppreciate
			isLike: false,
		}
	},
	watch: {
		// 监听
		isAppreciate(newValue, oldValue) {
			this.isLike = newValue;
		}
	},
	methods: {
		/**
		 * @param {Object} isFocus 是否点击message 进去详情的
		 * 跳转详情页面
		 */
		clickMessage() {
			
			this.$emit('click-message');
		},
		// 动态改变点赞状态
		changAppreciate() {
			// 没点过赞
			if (!this.isLike) {
				this.$http.post('/addPostAppreciate', { postId: this.data.id }).then(res => {
					this.$emit('change-appreciate', +1); // 点赞个数+1
				});
			} else { // 点过赞
				this.$http.get('/delPostAppreciate', { postId: this.data.id }).then(res => {
					this.$emit('change-appreciate', -1);// 点赞个数-1
				});
			}
			this.isLike = !this.isLike;
		},
		
		
	}
};
</script>

<style></style>

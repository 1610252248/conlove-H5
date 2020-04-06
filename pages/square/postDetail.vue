<template>
	<view>
		<c-scroll >
			<post-info style="padding-top: 30rpx;"/>
			<c-comment class="margin-top"/>
		</c-scroll>
	</view>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue';
import cComment from '@/components/conlove/c-comment.vue';
import cScroll from '@/components/conlove/c-scroll.vue'
export default {
	components: {postInfo, cComment,cScroll}
};
</script>

<style lang="stylus">

	
</style>

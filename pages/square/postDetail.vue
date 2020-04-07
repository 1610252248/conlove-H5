<template>
	<view>
		<c-scroll >
			<post-info style="padding-top: 30rpx;"/>
			<c-info-bar />
			<c-comment class="margin-top-sm"/>
		</c-scroll>
	</view>
</template>

<script>
import postInfo from '@/pages/square/postInfo.vue';
import cComment from '@/components/conlove/c-comment.vue';
import cScroll from '@/components/conlove/c-scroll.vue'
import cInfoBar from '@/components/conlove/c-info-bar.vue'	
export default {
	components: {postInfo, cComment,cScroll, cInfoBar}
};
</script>

<style lang="stylus">

	
</style>

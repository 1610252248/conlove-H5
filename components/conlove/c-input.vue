<template>
	<view class="cu-bar input input-fixed" v-show="isLogin">
		<input :placeholder="placeholder" @blur="inputBlur" :focus="isFocus" v-model="content" class="padding-left-sm solid" maxlength="40" />
		<button class="cu-btn round bg-blue shadow-blur" @click="sendComment">发送</button>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin']),
	},
	props: {
		placeholder: {
			type: String,
			default: '评论'
		},
	},
	data() {
		return {
			content: '',
			isFocus: false,
		};
	},
	methods: {
		sendComment() {
			if (this.content.length == 0) {
				this.$u.toast('内容不能为空哦~');
				return;
			}
			this.$emit('send-comment', this.content);
			this.content = '';
		},
		inputBlur() {
			this.isFocus = false;
		},
		clearContent() {
			this.content = ''
		},
		focusInput() {
			this.isFocus = true;
		}
	}
};
</script>

<style lang="stylus">
.input-fixed 
	width 100%
	position fixed
	min-height 42px
	bottom 0
	left 0
	right 0
	background-color #FFFFFF
	z-index 9999
	padding 0 20rpx 6rpx
	box-shadow 1px 2px 8px 4px #dadada

</style>

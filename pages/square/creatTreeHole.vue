<template>
	<view>
		<c-custom @send="send"><block slot="center">发布树洞</block></c-custom>
		<c-scroll scrollHight>
			<view class="box-content radius margin-center" :style="{ backgroundColor: data.bgColor }">
				<textarea class="text-white  text-df padding-lr-xs" auto-height v-model="data.content" placeholder="此刻的想法..."></textarea>
			</view>
			<view class="bgcSelect flex justify-center align-center">
				<text style="color: #919799;">背景色:</text>
				<text class="cu-avatar sm round  margin-xs" :style="'background-color:' + item" v-for="(item, index) in ColorList" :key="index" @click="changColor(index)">
					<text v-if="activeIndex == index" class="cuIcon-check"></text>
				</text>
			</view>
		</c-scroll>
		<u-modal v-model="show" content="确定要发布吗？" :mask-close-able="true" @confirm="confirm" />
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			data: {
				content: '',
				bgColor: '#ffadad',
				avatar: '',
			},
			show: false,
			activeIndex: 6,
			ColorList: ['#f94c4c', '#ff6c55', '#ffd259', '#9ad683', '#81c2eb', '#cd9fe0', '#ffadad', '#adabae', '#515151']
		};
	},
	methods: {
		changColor(index) {
			this.data.activeIndex = index;
			this.data.bgColor = this.ColorList[index];
		},
		send() {
			if(this.data.content.length == 0) {
				this.$u.toast('内容不能为空');
				return ;
			}
			this.show = true;
		},
		confirm() {
			// 随机头像
			this.data.avatar = '/static/avatar-pool/avatar-' + Math.floor(Math.random() * 6) + '.jpg';
			
			this.$http.post('/addTreeHole', this.data).then(res => {
				// 全局事件 表明有新的数据，让树洞刷新
				this.$eventBus.$emit("add-tree-hole");
				this.$refs.uToast.show({
					title: res.msg,
					type: 'success',
					isTab: true,
					url: '/pages/square/square'
				});
			})
			
		},
	}
};
</script>

<style lang="stylus">
.box-content
	width 90%
	padding 35% 0
	margin-bottom 20rpx
	margin-top 100rpx
	border 1px solid #c7c7c7
	display table
	textarea
		display table-cell
		text-align center
.textarea-placeholder
	color #ffffff
	height 40rpx
.bgcSelect
	margin 0 auto
	width 94%
	height 80rpx
	line-height 80rpx
</style>

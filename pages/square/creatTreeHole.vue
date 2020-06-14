<template>
	<view>
		<c-custom @send="send"><block slot="center">发表树洞</block></c-custom>
		<c-scroll scrollHight>
			<view class="box-content radius margin-center" :style="{backgroundColor: data.color}">
				<textarea class="text-white  text-df padding-lr-xs" auto-height v-model="data.content" placeholder="此刻的想法..."></textarea>
			</view>
			<view class="bgcSelect flex justify-center align-center">
				<text style="color: #919799;">背景色:</text>
				<text class="cu-avatar sm round  margin-xs" :style="'background-color:' + item.color"
				 v-for="(item, index) in ColorList" :key="index" @click="changColor(index)">
					<text v-if="data.selectIndexColor == index" class="cuIcon-check"></text>
				</text>
			</view>
		</c-scroll>
	</view>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			data: {
				content: '',
				color: '#ffadad',
				selectIndexColor: 6,
				avatar: '',
				createTime: '',
			},
			
			ColorList: [
				{ color: '#f94c4c' },
				{ color: '#ff6c55' },
				{ color: '#ffd259' },
				{ color: '#9ad683' },
				{ color: '#81c2eb' },
				{ color: '#cd9fe0' },
				{ color: '#ffadad' },
				{ color: '#adabae' },
				{ color: '#515151' }
			]
		};
	},
	methods: {
		...mapMutations({
			addNewTreeHole: 'addNewTreeHole'
		}),
	
		changColor(index) {
			this.data.selectIndexColor = index;
			this.data.color = this.ColorList[index].color;
		},
		send() {
			// 随机头像
			this.data.avatar = '/static/avatar-pool/avatar-' + Math.floor(Math.random()*6) + '.jpg';
			this.data.createTime = this.$utils.dateUtils.currentDate();
			console.log(this.data);
			this.addNewTreeHole(this.data);
			uni.switchTab({
				url: '/pages/square/square'
			})
		}
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

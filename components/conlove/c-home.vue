<template>
	<view>
		<view class="display-box solids-bottom" v-for="(item, index) in listData" :key="index" @click="navToHomeDetail(item.id)">
			<view>
				<!--是否隐藏动态 -->
				<text v-if="hidePost" class="hidePost margin-left text-gray cuIcon-attentionforbid"></text>
				<text v-show="dotsShow" :style="{'left':hidePost?'270rpx':'300rpx'}" @click.stop="showModal(index)" class="cuIcon-more"></text>
			</view>
			<image lazy-load class="box-image" :src="item.images[0]" mode="widthFix"></image>
			<view class="box-info-up">
				<text class="fl">{{ item.school + ' | ' + item.grade }}</text>
				<image class="sex-image fl" :src="getSexImage(item.sex)"></image>
				<text class="fr">{{ $utils.getAge(item.age) + '岁 | ' + item.height + 'cm' }}</text>
			</view>
			<view class="box-info-down">
				<!-- 头像和用户名 -->
				<view class="user fl flex align-center" @click.stop="navToOtherUser">
					<image class="userAvatar" :src="item.userDto.avatarUrl"></image>
					<text class="box-userName text-cut">{{ item.userDto.nickname }}</text>
				</view>
				<!-- 标题 -->
				<view class="title fr flex align-center">
					<text class="cuIcon-notification"></text>
					<text class="title-text text-cut">{{ item.title }}</text>
				</view>
			</view>
		</view>
		<view class="cu-load" :class="!isLoad ? 'loading' : 'over'"></view>
		
		<!-- 更多菜单 -->
		<view class="cu-modal bottom-modal" :class="bottomModal ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog radius">
				<view class="cu-list menu text-black">
					<!-- 隐藏/公开动态 -->
					<view class="cu-item" @click="changeHidePost">
						<view class="content">
							<text class="margin-right" :class="hidePost?'cuIcon-attention ':'cuIcon-attentionforbid'"></text>
							<text>{{hidePost? '公开缘来' : '隐藏缘来'}}</text>
						</view>
					</view>
					<!-- 删除动态 -->
					<view class="cu-item" @click="deletePost">
						<view class="content">
							<text class="cuIcon-delete margin-right"></text>
							<text>删除缘来</text>
						</view>
					</view>
					<view class="cu-item" @click="modifyPost">
						<view class="content">
							<text class="cuIcon-edit margin-right"></text>
							<text>修改缘来</text>
						</view>
					</view>
					<view class="cu-item"><view class="content">取消</view></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	props: {
		listData: {
			type: Array,
			default: () => []
		},
		isLoad: {
			type: Boolean,
			default: false
		},
		dotsShow: {
			type: Boolean,
			default: false
		},
	},
	
	data() {
		return {
			bottomModal: false,
			hidePost: false,
			
			activeIndex: 0,
		};
	},

	methods: {
		...mapActions([
		  'setHomeData', // 将 `this.setHomeData()` 映射为 `this.$store.dispatch('setHomeData')`
		]),
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
		},
		//显示modal
		showModal(index) {
			this.activeIndex = index;
			this.bottomModal = true;
		},
		//关闭modal
		hideModal() {
			this.bottomModal = false;
		},
		//改变隐藏动态
		changeHidePost() {
			this.hidePost = !this.hidePost;
			uni.showToast({
				title: this.hidePost ? '隐藏缘来成功' : '公开缘来成功',
				icon: 'none'
			})
		},
		//删除动态
		deletePost() {
			uni.showToast({
				title: '删除缘来成功',
				icon: 'none'
			})	
		},
		// 更新动态
		modifyPost() {
			this.setHomeData(this.listData[this.activeIndex]);
			uni.navigateTo({
				url: '/pages/release/release'
			})
		},
		// 跳转用户资料
		navToOtherUser() {
			//当前统一跳转 其它用户
			uni.navigateTo({
				url: '/pages/user/otherUser'
			})
		}
	}
};
</script>

<style lang="stylus">
.display-box
	width 100%
	display flex
	flex-direction column
	align-items center
	padding 30rpx 0
	margin 0rpx auto 20rpx
.box-image
	width 90%
	border-radius 20rpx
	box-shadow 0rpx 0rpx 20rpx 4rpx rgba(51, 51, 51, 0.15)
.box-info-up
	width 90%
	font-size 28rpx
	color #333333
	margin 30rpx auto 20rpx
.box-info-down
	width 90%
	height 60rpx
	.user
		max-width 45%
		.box-userName
			position relative
			top 5rpx
			font-size 28rpx
			color #333333
			margin-left 10rpx
			max-width 70%
	.title
		max-width 45%
		height 100%
		font-size 30upx
		color #333333
		font-weight 600
		.title-text
			margin-left 10upx
.cuIcon-more 
	position relative
	padding-left 20rpx
	padding-right 20rpx
	left 300rpx
	bottom 20rpx
.hidePost 
	position relative
	left 20rpx
	bottom 20rpx
</style>

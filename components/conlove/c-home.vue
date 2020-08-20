<template>
	<view v-if="lists.length">
		<view class="display-box solids-bottom" v-for="(item, index) in lists" :key="index" @click="navToHomeDetail(item.id)">
			<view v-show="item.user.id == userDB.id">
				<!--是否隐藏动态 -->
				<text v-if="!item.isPublic" class="isPublic margin-left text-gray cuIcon-attentionforbid"></text>
				<text :style="{'left':!item.isPublic?'270rpx':'300rpx'}" @click.stop="showModal(index)" class="cuIcon-more"></text>
			</view>
			<image lazy-load class="box-image" :src="item.images[0].image" mode="widthFix"></image>
			<view class="box-info-up">
				<text class="fl">{{ item.school + ' | ' + item.grade }}</text>
				<image class="sex-image fl" :src="getSexImage(item.sex)"></image>
				<text class="fr">{{ $utils.getAge(item.birthDate) + '岁 | ' + item.height + 'cm' }}</text>
			</view>
			<view class="box-info-down">
				<!-- 头像和用户名 -->
				<view class="user fl flex align-center" @click.stop="navToOtherUser(item.user.id)">
					<image class="userAvatar" :src="item.user.avatar"></image>
					<text class="box-userName text-cut">{{ item.user.nickName }}</text>
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
			<view class="cu-dialog">
				<view class="cu-list menu">
					<!-- 隐藏/公开缘来 -->
					<c-text @click="changPublic" :title="!lists[idx].isPublic? '公开缘来' : '隐藏缘来'"
					:icon="!lists[idx].isPublic?'cuIcon-attention ':'cuIcon-attentionforbid'" />
					
					<!-- 删除缘来 -->
					<c-text @click="show=true" title="删除缘来" icon="cuIcon-delete" />
					
					<!-- 修改缘来 -->
					<c-text @click="modify" title="修改缘来" icon="cuIcon-edit" />
					<c-text class="c-border-top" title="取消" />
				</view>
			</view>
		</view>
		
		<u-modal v-model="show"  show-cancel-button content="确定删除吗" :mask-close-able="true" @confirm="deletePost" />
	</view>
</template>

<script>
import { mapState } from 'vuex';
	
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	props: {
		lists: {
			type: Array,
			default: () => []
		},
		isLoad: {
			type: Boolean,
			default: false
		},
	},
	data() {
		return {
			bottomModal: false,
			idx: 0, // 选中的下标
			show: false, // 提示model
		};
	},

	methods: {
		//获取性别图片地址
		getSexImage(sex) {
			return require('@/static/image/' + (sex === '男' ? 'male.png' : 'female.png'));
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
			this.idx = index;
			this.bottomModal = true;
		},
		//关闭modal
		hideModal() {
			this.bottomModal = false;
		},
		//改变隐藏动态
		changPublic() {
			this.$emit('chang-public', this.idx);
		},
		//删除动态
		deletePost() {
			this.$emit('delete', this.idx)
		},
		// 更新动态
		modify() {
			this.$u.route('/pages/release/release', {id: this.lists[this.idx].id})
		},
		// 跳转用户资料
		navToOtherUser(id) {
			this.$u.route('/pages/user/otherUser', {id})
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
	line-height 60rpx
	.user
		max-width 45%
		.box-userName
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
.isPublic 
	position relative
	left 20rpx
	bottom 20rpx
.c-border-top 
	border-top 6px solid #ececec;
</style>

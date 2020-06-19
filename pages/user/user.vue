<template>
	<c-scroll>
		<!-- 没有登陆 -->
		<view v-if="!this.isLogin">
			<view class="bg-gray padding">
				<view class="flex justify-start align-center ">
					<view class="cu-avatar round xl margin-left" style="backgroundImage:url(/static/image/avatar-default.png)"></view>
					<view @click="navToLogin" class="margin-left text-lg text-bold">点击登录</view>
				</view>
			</view>
			<view class="card">
				<view class="flex justify-center flex-direction align-center" style="height: 60vh;">
					<image style="width: 150upx;height: 150upx;" src="/static/image/pic-dataIsNone.png"></image>
					<text  style="color:#bebebe">暂无数据</text>
				</view>
			</view>
		</view>

		<view v-else>
			<!-- 用户 -->
			<view class="bg-gray ">
				<view class="user-content padding-left">
					<!-- 修改资料和设置 -->
					<view class="flex userSetting text-lg" style="color: #000000;">
						<view @click="navToEditUser" class="padding-xs cuIcon-write"></view>
						<view @click="navToSetting" class="padding-xs cuIcon-settings"></view>
					</view>
					<view class="flex justify-start align-center padding-top">
						<view class="cu-avatar round xl margin-left" :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
							<view class="cu-tag lg badge" :class="!user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
						</view>
						<view class="content margin-left text-black margin-top-sm">
							<view class="text-bold">
								<text>{{ user.name }}</text>
							</view>
							<view class="text-cut padding-top-xs text-sm">{{ user.sign }}</view>
						</view>
					</view>
					<view class="padding flex flex-wrap">
						<view class="cu-btn border-color-red">{{ getAge() }}</view>
						<view class="cu-btn border-color-yellow">{{ getConstellation() }}</view>
						<view class="cu-btn border-color-blue">{{ user.city }}</view>
						<view class="cu-btn border-color-blue">{{ getCurSchool() }}</view>
					</view>
				</view>
			</view>

			<!-- 学校信息 -->
			<view class="card">
				<view class="margin-bottom-xs">学校信息</view>
				<view class="padding-left text-sm">
					<view>
						<text>学校</text>
						<text class="text-gray margin-left">{{ user.school }}</text>
					</view>
					<view>
						<text>专业</text>
						<text class="text-gray margin-left">{{ user.major }}</text>
					</view>

					<view>
						<text>年级</text>
						<text class="text-gray margin-left">{{ getGrade() }}</text>
					</view>
				</view>
			</view>

			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs">个性展示</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view class="text-nowrap"><text>关键词</text></view>

						<!-- 已选标签 -->
						<view class="flex flex-wrap margin-left-xs">
							<view class="info-tag" :class="getTagColor(index)" v-for="(item, index) in selectTagList" :key="index">{{ item }}</view>
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-nowrap">关于我</view>
						<view class="text-gray margin-left">{{ user.introduce }}</view>
					</view>
				</view>
			</view>

			<!-- 缘来 -->
			<view class="card" @click="navToUserHome">
				<view class="margin-bottom-xs" style="height: 46rpx;"><view class="fl">缘来</view></view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view class="fl"><image style="width: 220rpx" mode="widthFix" src="@/static/image/wyb.jpg"></image></view>
						<view class="margin-left fl" style="width: 60%;">
							<view class="cuIcon-notification"><text class="margin-left-xs">等一个人 等二个人 等三个人 等四个人开黑</text></view>
							<view>
								<text class="text-gray margin-right">2020-6-15 14:27:26</text>
								<text class="cuIcon-likefill text-red">20</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<!-- 动态 -->
			<view class="card" @click="navToUserPost">
				<view class="margin-bottom-xs"><text>动态</text></view>
				<view class="flex justify-between flex-wrap text-sm">
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-1.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-2.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-3.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
				</view>
			</view>
		</view>
	</c-scroll>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: mapState([
		// 映射 this.isLogin 为 store.state.isLogin
		'isLogin'
	]),
	data() {
		return {
			// 用户信息
			user: {
				name: 'BobBobo',
				avatar: '/static/img/face.jpg',
				sex: 2,
				date: '1998-10-28',
				city: '西安',
				sign: '我有我的奥妙',
				school: '西安电子科技大学',
				major: '计算机专业',
				grade: '研一', //在校情况
				introduce: '约桌游吗~'
			},
			//用户选择的标签
			selectTagList: ['吃鸡', '腿特长', '王者荣耀', '工学类'],

			//计算年级使用的映射
			gradeList: { 一: 1, 二: 2, 三: 3, 四: 4 },
			// 卡片展示情况， 0全部展示，1只展示缘来，2只展示动态
			cardState: 0
		};
	},
	methods: {
		navToEditUser() {
			uni.navigateTo({
				url: '/pages/user/userEdit'
			});
		},
		// 获取年级
		getGrade() {
			let grade = this.user.grade;
			if (grade === '已工作') return grade;
			let year = this.$utils.dateUtils.currentDate().split('-')[0] - this.gradeList[grade[1]];
			let str = year + '级' + (grade[0] === '研' ? '硕士' : '本科');
			return str;
		},
		// 获取选中标签的 颜色
		getTagColor(idx) {
			idx %= 3;
			let color = '';
			switch (idx) {
				case 0:
					color = 'bg-red';
					break;
				case 1:
					color = 'bg-yellow';
					break;
				case 2:
					color = 'bg-blue';
					break;
			}
			return color;
		},
		// 获取年龄
		getAge() {
			return this.$utils.dateUtils.GetAge(this.user.date) + '岁';
		},
		// 获取星座
		getConstellation() {
			return this.$utils.dateUtils.getconstellation(this.user.date);
		},
		// 获取在校情况，本科在读、硕士在读、已工作
		getCurSchool() {
			let grade = this.user.grade;
			if (grade === '已工作') return grade;
			let str = (grade[0] === '研' ? '硕士' : '本科') + '在读';
			return str;
		},
		//跳转用户动态
		navToUserPost() {
			uni.navigateTo({
				url: '/pages/square/sub/userPost'
			});
		},
		//跳转用户缘来页面
		navToUserHome() {
			uni.navigateTo({
				url: '/pages/home/sub/userHome'
			});
		},
		navToSetting() {
			uni.navigateTo({
				url: '/pages/user/setting'
			});
		},
		// 登录跳转
		navToLogin() {
			uni.navigateTo({
				url: '/pages/enter/login'
			})
		}
	}
};
</script>

<style lang="stylus">
.content
	max-width 400rpx
.cu-btn
	background-color transparent
	border 1rpx solid #007AFF
	border-radius 10rpx
	height 40rpx
	font-size 26rpx
	line-height 40rpx
	padding 6rpx 15rpx
	margin-left 18rpx
.card
	box-shadow: 0px 2px 5px #EDEDED;
	width 86%
	margin 40rpx auto
	border: 1px solid #cecece;
	border-radius 15rpx
	color black
	padding 30rpx 20rpx
	text
		height 46rpx
		line-height 46rpx
.bg-red
	border 1px solid #ff4a2d
.bg-blue
	border 1px solid #3f91e3
.bg-yellow
	border 1px solid #ffb434
.text-sm
	font-size 26rpx
.info-tag
	padding 5rpx 12rpx
	margin 0 0 16rpx 20rpx
	border-radius 10rpx
.justify-between
	width 96%
	margin 5rpx auto
.justify-between::after
	width 180rpx
	content ''
.dt-item
	width 180rpx
.dt-image
	width 180rpx
	height 180rpx
	border-radius 20rpx
.text-gray
	color #8b8b8b
.userSetting
	position absolute
	top 44rpx
	right 30rpx
</style>

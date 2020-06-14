<template>
	<c-scroll>
		<view>
			<!-- 用户 -->
			<view class="bg-gray">
				<view class="user-content padding-left-sm">
					<view class="flex justify-start align-center padding-top">
						<view class="cu-avatar round xl margin-left" :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
							<view class="cu-tag lg badge" :class="!user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
						</view>
						<view class="content margin-left text-black margin-top-sm">
							<view class="text-bold" @click="navToEditUser">
								<text>{{ user.name }}</text>
								<text class="margin-left-sm cuIcon-write" ></text>
							</view>
							<view class="text-cut padding-top-xs text-sm">{{ user.sign }}</view>
						</view>
					</view>
					<view class="padding flex flex-wrap">
						<!-- <view  class="cu-btn border-color-red" >{{ getAge(user.date) }}</view> -->
						<view  class="cu-btn border-color-red" >23</view>
						<view  class="cu-btn border-color-yellow" >{{ 2 }}</view>
						<view  class="cu-btn border-color-blue" >{{ 2 }}</view>
						<view  class="cu-btn border-color-blue" >{{ 2 }}</view>
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
						<text class="text-gray margin-left">{{ getGrade(user.grade) }}</text>
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
						<view class="text-gray margin-left">{{user.introduce}}</view>
					</view>
				</view>
			</view>

			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs" style="height: 46rpx;">
					<view class="fl"><text>缘来</text></view>
					<view class="fr text-gray text-lg">
						<!-- <text class="cuIcon-attentionfill"></text> -->
						<text class="cuIcon-attentionforbidfill"></text>
					</view>
				</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view><image style="width: 220rpx" mode="widthFix" src="@/static/image/wyb.jpg"></image></view>
						<view class="margin-left" style="width: 80%;">
							<view>
								<text class="cuIcon-notification margin-right-xs"></text>
								<text>等一个人</text>
							</view>
							<view>
								<text class="text-gray margin-right">20-4-11</text>
								<text class="cuIcon-likefill text-red">20</text>
							</view>
						</view>
						<view class="text-gray text-lg"><text class="cuIcon-deletefill"></text></view>
					</view>
				</view>
			</view>

			<!-- 动态 -->
			<view class="card">
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
					<view class="dt-item">
						<image class="dt-image" src="@/static/image/view-1.jpg"></image>
						<view class="text-cut">谁的青春这么累谁的青春这么累</view>
					</view>
				</view>
			</view>
		</view>
	</c-scroll>
</template>

<script>
export default {
	data() {
		return {
			user: {
				name: 'BobBobo',
				avatar: '/static/img/face.jpg',
				sex: '2',
				date: '请选择',
				city: '西安',
				sign: '我有我的奥妙',
				school: '西安电子科技大学',
				major: '计算机专业',
				grade: '研一', //在校情况
				introduce: '约桌游吗~'
			},
			selectTagList: ['吃鸡', '腿特长', '王者荣耀', '工学类'],
			isFemale: false,
			ColorList: [{ color: 'red', content: '23岁' }, { color: 'yellow', content: '射手座' }, { color: 'blue', content: '西安' }, { color: 'blue', content: '硕士在读' }],
			gradeList: {'一': 1,'二': 2,'三': 3,	'四': 4},
		};
	},

	methods: {
		navToEditUser() {
			uni.navigateTo({
				url: '/pages/user/userEdit'
			});
		},
		// 获取年级
		getGrade(grade) {
			if(grade === '已工作') return grade;
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
		getAge(date) {
			// let year = 
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
	width 86%
	margin 40rpx auto 0
	border 1rpx solid #a7a7a7
	border-radius 15rpx
	color black
	padding 20rpx 20rpx 14rpx
	text
		height 46rpx
		line-height 46rpx
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
</style>

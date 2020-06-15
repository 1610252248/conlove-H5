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
				    <!-- 用户4个标签 年龄、星座、城市、在校情况 -->
					<view class="padding flex flex-wrap">
						<view class="cu-btn border-color-red" >{{getAge()}}</view>
						<view class="cu-btn border-color-yellow" >{{ getConstellation() }}</view>
						<view class="cu-btn border-color-blue" >{{ user.city }}</view>
						<view class="cu-btn border-color-blue" >{{ getCurSchool() }}</view>
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
						<view class="text-gray margin-left">{{user.introduce}}</view>
					</view>
				</view>
			</view>

			<!-- 缘来 -->
			<view class="card ">
				<view class="margin-bottom-xs" style="height: 46rpx;">
					<view class="fl">缘来</view>
				</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view class="fl"><image style="width: 220rpx" mode="widthFix" src="@/static/image/wyb.jpg"></image></view>
						<view class="margin-left fl" style="width: 50%;">
							<view class="cuIcon-notification">
								<text class="margin-left-xs">等一个人</text>
							</view>
							<view>
								<text class="text-gray margin-right">2020-6-15</text>
								<text class="cuIcon-likefill text-red">20</text>
							</view>
						</view>
						<view class="fr text-gray text-lg">
							<view class="cuIcon-deletefill"></view>
							<view class="cuIcon-attentionfill"></view>
							<view class="cuIcon-attentionforbidfill"></view>
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
export default {
	data() {
		return {
			// 用户信息
			user: {
				name: 'BobBobo',
				avatar: '/static/img/face.jpg',
				sex: '2',
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
			gradeList: {'一': 1,'二': 2,'三': 3,	'四': 4},
			// 卡片展示情况， 0全部展示，1只展示缘来，2只展示动态
			cardState: 0,
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
			if(grade === '已工作') return grade;
			let str = (grade[0] === '研' ? '硕士' : '本科') + '在读';
			return str;
		},
		//跳转用户动态
		navToUserPost() {
			console.log(1111);
			uni.navigateTo({
				url: '/pages/square/sub/userPost'
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
	width 86%
	margin 40rpx auto
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

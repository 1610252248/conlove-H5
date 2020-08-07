<template>
	<view>
		<c-custom-mid><block slot="center">
			{{user.nickName}}
		</block></c-custom-mid>
		<c-scroll >
			<!-- 用户 -->
			<view class="bg-gray " v-if="user.avatar">
				<view class="user-content padding-left">
					<view class="flex justify-start align-center padding-top">
						<view class="cu-avatar round xl margin-left" :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
							<view class="cu-tag lg badge" :class="!user.sex ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
						</view>
		
						<view class="content margin-left text-black margin-top-sm">
							<view class="text-bold">
								<text>{{ user.nickName }}</text>
							</view>
							<view class="text-cut padding-top-xs text-sm">{{ user.sign == null ? '暂时没有介绍' : user.sign }}</view>
						</view>
					</view>
					<view class="padding flex flex-wrap">
						<view v-if="user.birthDate != null" class="cu-btn border-color-red">{{ getAge() }}</view>
						<view v-if="user.birthDate != null" class="cu-btn border-color-yellow">{{ getConstellation() }}</view>
						<view v-if="user.city != null" class="cu-btn border-color-blue">{{ user.city }}</view>
						<view v-if="user.grade != null" class="cu-btn border-color-blue">{{ getCurSchool() }}</view>
					</view>
				</view>
			</view>
		
			<!-- 学校信息 -->
			<c-school :user="user"  />
		
			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs">个性展示</view>
				<view class="padding-left text-sm">
					<view class="flex justify-start">
						<view class="text-nowrap"><text>关键词</text></view>
						<!-- 已选标签 -->
						<view class="flex flex-wrap margin-left-xs">
							<view class="info-tag" :class="getTagColor(index)" v-for="(item, index) in selectTagList" :key="index">{{ item.name }}</view>
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
				<u-section class="margin-bottom-sm" :bold="false" :show-line="false" :color="'#000000'" title="缘来" sub-title="更多" />
				<view class="padding-left text-sm" v-for="item in stickers" :key="item.id">
					<view class="flex justify-start">
						<view class="fl"><image class="sticker-image" :src="item.images[0].image" @click.stop="viewImage(item.images[0].image)" /></view>
						<view class="margin-left fl" style="width: 60%;">
							<view class="cuIcon-notification">
								<text class="margin-left-xs">{{ item.title }}</text>
							</view>
							<view class="text-wrap text-gray">
								<text>{{ item.introduce }}</text>
							</view>
							<view class="text-gray">
								<text>{{ $utils.dateUtils.format(item.createTime) }}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		
			<!-- 动态 -->
			<view class="card" @click="navToUserPost">
				<u-section class="margin-bottom-sm" :bold="false" :show-line="false" :color="'#000000'" title="动态" sub-title="更多" />
				<view class="flex justify-between flex-wrap text-sm">
					<view class="dt-item" v-for="item in posts" :key="item.id">
						<view v-if="item.images.length > 0"><image class="dt-image" :src="item.images[0].image" @click.stop="viewImage(item.images[0].image)" /></view>
						<view v-else class="dt-image dt-text">{{ item.content }}</view>
					</view>
				</view>
			</view>
		</c-scroll>
		<u-modal v-model="showDel" content="确定要取消秋波吗？" mask-close-able show-cancel-button @confirm="confirmDel" />
		<view class="bg-gray flex align-center justify-center padding-xs" >
			<!-- 喜欢按钮 -->
			<view class="like-box" @click="likeClick" >
				<image v-if="userDB.id != user.id" class="like" :src="isLike ? '/static/image/pic-like-active.png' : '/static/image/pic-like-normal.png'"></image>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			// 用户信息
			user: {
				id: -1,
				nickName: ''
			},
			
			//用户选择的标签
			selectTagList: [],

			//计算年级使用的映射
			gradeList: { 一: 1, 二: 2, 三: 3, 四: 4 },

			// 是否身份认证
			isIdentity: true,

			stickers: [],
			posts: [],
			isLike: false,
			showDel: false,
		};
	},

	onLoad({id}) {
		if(id != null) {
			this.init(id);
		} else {
			this.$u.toast('地址错误!!')
		}
	},
	methods: {
		
		/* 获取个性展示标签，缘来和动态 */
		init(id) {
			this.getUser(id);
			this.getData(id);
			this.getUserLabel(id);
		},
		getUser(id) {
			this.$http.get("/getUser", {id}).then(res => {
				this.user = res.data.user;
				let friend = res.data.friend;
				// 关系等于 空，或者有关系，但不是被动，也可以
				if(friend != null &&  friend.state != 1) {
					this.isLike = true;
				}
			})
		},
		viewImage(url) {
			let images = [url];
			uni.previewImage({ urls: images, current: url });
		},
		getUserLabel(id) {
			this.$http.get('/userLabel', {id}).then(res => {
					this.selectTagList = res.data;
			})
		},
		getData(id) {
			let data = { id, page: 1, pageSize: 3 };
			this.$http.get('/user/getUserPost', data).then(res => {
				this.posts = res.data.list;
			});
			data.pageSize = 1;
			this.$http.get('/user/getUserSticker', data).then(res => {
				this.stickers = res.data.list;
			});
		},

		// 获取年级
		getGrade() {
			if (this.user.grade == null) return null;
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
			if (this.user.birthDate == null) return null;

			return this.$utils.dateUtils.GetAge(this.user.birthDate) + '岁';
		},
		// 获取星座
		getConstellation() {
			if (this.user.birthDate == null) return null;
			return this.$utils.dateUtils.getconstellation(this.user.birthDate);
		},
		// 获取在校情况，本科在读、硕士在读、已工作
		getCurSchool() {
			let grade = this.user.grade;
			if (grade == null) return null;
			if (grade === '已工作') return grade;
			let str = (grade[0] === '研' ? '硕士' : '本科') + '在读';
			return str;
		},

		/*************** 跳转页面 ***************/
		
		//跳转用户动态
		navToUserPost() {
			this.$u.route('/pages/square/sub/userPost',{ id: this.user.id });
		},
		//跳转用户缘来页面
		navToUserHome() {
			this.$u.route('/pages/home/sub/userHome', { id: this.user.id });
		},
	
		likeClick(){
			if(this.isLike) {
				this.showDel = true;
			} else {
				this.$http.post('/changFriend', {userId: this.userDB.id, friendId: this.user.id}).then(res => {
					this.isLike = !this.isLike;
				})
			}
			
			
		},
		confirmDel() {
			this.$http.post('/changFriend', {userId: this.userDB.id, friendId: this.user.id}).then(res => {
				this.isLike = !this.isLike;
			})
		},
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
	box-shadow 0px 2px 5px #EDEDED
	width 86%
	margin 40rpx auto
	border 1px solid #cecece
	border-radius 15rpx
	color black
	padding 20rpx
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
.dt-text
	padding 10rpx
	background-color #f0f0f0
	overflow hidden
.text-gray
	color #8b8b8b
.userSetting
	position absolute
	top 44rpx
	right 30rpx
.identify
	width 30rpx
	height 30rpx
	position relative
	top 5rpx
	margin 0 6rpx 0 20rpx
.sticker-image
	border-radius 20rpx
	width 220rpx
	height 220rpx
.like-box
	background-color rgba(207, 207, 207, 0.4)
	height 80rpx
	border-radius 50%
	z-index 999
	.like
		margin 6rpx 6rpx
		width 70rpx
		height 70rpx
		z-index 999
</style>

<template>
	<view  v-if="Object.keys(user).length && user.avatar">
		<view >
			<!-- 用户 -->
			<view class="bg-gray ">
				<view class="user-content padding-left">
					<!-- 修改资料和设置 -->
					<view v-if="user.id == userDB.id" class="flex userSetting text-lg" style="color: #000000;">
						<view @click="navToEditUser" class="padding-xs cuIcon-write"></view>
						<view @click="navToSetting" class="padding-xs cuIcon-settings"></view>
					</view>
					<view class="flex justify-start align-center padding-top">
						<view class="cu-avatar round xl margin-left" @click="$utils.viewImage(user.avatar)"
						 :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
							<view class="cu-tag lg badge" :class="user.sex == '女' ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view>
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
			<c-school :user="user" @nav-to-school="navToSchool" />

			<!-- 个性展示 -->
			<c-card>
				<view slot="top" >个性展示</view>
				<view slot="content">
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
			</c-card>
			
			<!-- 心动信号 -->
			<c-card >
				<view slot="top" @click="navToFavorite" >
					<text>心动信号</text>
					<text v-if="user.id == userDB.id" class="fr cuIcon-right text-gray"></text>
				</view>
				<view slot="content">
					<view class="margin-bottom-xs">
						<view class="margin-bottom-xs">心仪的TA</view>
						<view class="padding-left-xs text-gray">
							<text>{{user.favorite}}</text>
						</view>
					</view>
					<view class="margin-bottom-xs">
						<view class="margin-bottom-xs">感情观</view>
						<view class="padding-left-xs text-gray">
							<text>{{user.emotion}}</text>
						</view>
					</view>
				</view>
			</c-card>

			<!-- 缘来 -->
			<c-card @child-click="navToUserHome">
				<u-section slot="top" :bold="false" :show-line="false" :color="'#000000'" title="缘来" sub-title="更多" />
				<view slot="content">
					<block v-if="stickers.length">
						<view class="flex justify-start">
							<view class="fl"><image class="sticker-image" :src="stickers[0].images[0].image" @click.stop="viewImage(stickers[0].images[0].image)" /></view>
							<view class="margin-left fl" style="width: 60%;">
								<view class="cuIcon-notification">
									<text class="margin-left-xs">{{ stickers[0].title }}</text>
								</view>
								<view class="text-wrap text-gray">
									<text>{{ stickers[0].introduce }}</text>
								</view>
								<view class="text-gray">
									<text>{{ $utils.dateUtils.format(stickers[0].createTime) }}</text>
								</view>
							</view>
						</view>
					</block>
					<block v-else>
						<u-empty/>
					</block>
				</view>
			</c-card>

			<!-- 动态 -->
			<c-card @child-click="navToUserPost">
				<u-section slot="top" :bold="false" :show-line="false" :color="'#000000'" title="动态" sub-title="更多" />
				<view slot="content" >
					<block v-if="posts.length">
						<view class="flex justify-between flex-wrap text-sm">
							<view class="dt-item" v-for="item in posts" :key="item.id">
								<view v-if="item.images.length > 0"><image class="dt-image" :src="item.images[0].image" @click.stop="viewImage(item.images[0].image)" /></view>
								<view v-else class="dt-image dt-text">{{ item.content }}</view>
							</view>
						</view>
					</block>
					<block v-else>
						<u-empty/>
					</block>
				</view>
			</c-card>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	props: {
		// 用户信息
		user: {
			type: Object,
			default: () => {{}} 
		},
		selectTagList: {
			type: Array,
			default: () => {[]} 
		},
		stickers: {
			type: Array,
			default: () => {[]} 
		},
		posts: {
			type: Array,
			default: () => {[]} 
		},
		isIdentity: {
			type: Boolean,
			default: true
		},
		
	},
	
	methods: {
		
		viewImage(url) {
			let images = [url];
			uni.previewImage({ urls: images, current: url });
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
		// 获取在校情况，学士在读、硕士在读、博士在读，已毕业
		getCurSchool() {
			let graduation = this.user.graduation;
			if (graduation && graduation == 1) return '已毕业';
			return this.user.level + '在读';
		},

		/*************** 跳转页面 ***************/
		// 修改信息
		navToEditUser() {
			this.$u.route('/pages/user/userEdit');
		},
		//跳转用户动态
		navToUserPost() {
			if(this.posts.length == 0) return ;
			this.$u.route('/pages/square/sub/userPost', { id: this.user.id });
		},
		//跳转用户缘来页面
		navToUserHome() {
			if(this.stickers.length == 0) return ;
			this.$u.route('/pages/home/sub/userHome', { id: this.user.id });
		},
		// 设置
		navToSetting() {
			this.$u.route('/pages/user/setting');
		},
		// 登录跳转
		navToLogin() {
			this.$u.route('/pages/enter/login');
		},
		// 学校信息跳转
		navToSchool() {
			if(this.user.id == this.userDB.id)
			this.$u.route('/pages/user/school', {id: this.user.id});
		},
		navToFavorite() {
			if(this.user.id == this.userDB.id)
			this.$u.route('/pages/user/favorite');
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
text 
	height 40rpx
	line-height 40rpx
.sticker-image
	border-radius 20rpx
	width 220rpx
	height 220rpx
</style>

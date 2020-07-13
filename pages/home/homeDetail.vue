<template>
	<view>
		<c-scroll :scrollId="scrollId" :isAnimation="false" minHeight v-if="Object.keys(sticker).length" @scrolltolower="lower">
			<!-- 用户信息 -->
			<view class="user-info">
				<view class="box-info-up">
					<text class="fl">{{ sticker.school + ' | ' + sticker.grade }}</text>
					<image class="sex-image fl" :src="getSexImage(sticker.sex)"></image>
					<text class="fr">{{ $utils.getAge(sticker.birthDate) + '岁 | ' + sticker.height + 'cm' }}</text>
				</view>
				<view class="box-info-down">
					<view class="user fl flex align-center" @click.stop="navToOtherUser(sticker.user.id)">
						<image class="userAvatar" :src="sticker.user.avatar"></image>
						<text class="box-userName text-cut">{{ sticker.user.nickName }}</text>
					</view>
					<view class="title fr flex align-center  text-bold">
						<text class="cuIcon-notification"></text>
						<text class="title-text text-cut">{{ sticker.title }}</text>
					</view>
				</view>
			</view>
			<view class="user-info-image">
				<!-- 喜欢按钮 -->
				<view class="like-box" v-if="!isMySticker" @click="likeClick">
					<image class="like" :src="isLike ? '/static/image/pic-like-active.png' : '/static/image/pic-like-normal.png'"></image>
				</view>
				<!-- 图片轮播 -->
				<swiper class="card-swiper square-dot" indicator-dots circular autoplay @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
					<swiper-item v-for="(item, index) in sticker.images" :key="index" :class="cardCur == index ? 'cur' : ''" >
						<view class="swiper-item"  @click="viewImage(item.image)" >
							<image :src="item.image" mode="aspectFill"/>
						</view>
					</swiper-item>
				</swiper>
				<!-- 帖子详情 -->
				<view class="margin-left-sm  text-left">
					<view class="padding-lg text-gray text-wrap">
						<view>{{ sticker.introduce }}</view>
					</view>
				</view>
			</view>
			<!-- 夸夸墙 -->
			<view class="praise-wall">
				<!-- 标题 -->
				<view class="cu-bar justify-center bg-white">
					<view class="action sub-title">
						<text class="text-xl text-bold text-red">夸夸墙</text>
						<text class="bg-red"></text>
					</view>
				</view>
				<!-- 评论 -->
				<c-comment id="comment"  :comments="comments" @change-like="changLike" :showInfo="false" />
			</view>
			<view class="cu-load" :class="!isLoad ? 'loading' : 'over'"/>
			<u-toast ref="uToast" />
		</c-scroll>
		<c-input @send-comment="sendComment" />
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
			cardCur: 0,
			sticker: {}, //帖子详情
			isMySticker: false, // 是否是自己发的帖子，如果是则不能点赞
			isLike: null, // 用户是否点赞
			hotNums: [5, 10], // 点赞每超过几个有热度图标，暂时2个
			page: 1,
			pageSize: 8,
			totalPage: 0,
			stickerLike: {},
			// 评论列表
			comments: [],
			// 用户赞过的评论
			isLoad: false,
			loadCnt: 0,
			scrollId: '',
		};
	},
	onLoad({ id }) {
		this.getInfo(id);
		this.comments = [];
		this.getComments(id);
	},
	methods: {
		/**
		 * 获取帖子详情
		 */
		getInfo(id) {
			this.$http.get('/sticker', { id }).then(res => {
				this.sticker = res.data.sticker;
				// 是否对当前帖子用户发送秋波
				if(res.data.friend != null) this.isLike = true
				if (this.sticker.user.id == this.userDB.id) this.isMySticker = true;
			});
		},
		getComments(id) {
			let data = { id: id, page: this.page, pageSize: this.pageSize };
			this.$http.get('/stickerComment', data).then(res => {
				this.totalPage = res.data.pages;
				if (this.page >= this.totalPage) this.isLoad = true;
				this.getAppreciate(res.data.list);
				console.log(this.comments);
			});
		},
		getAppreciate(list) {
			
			this.$http.get('/sticker/commentAppreciate').then(res => {
				let appreciateList = res.data;
				for(let obj of list) {
					let idx = appreciateList.findIndex(item => item.commentId == obj.id)
					obj.isAppreciate = (idx == -1 ? false : true);
					this.comments.push(obj)
				}
			});
		},
		/**
		 * 获取性别图片地址
		 */
		getSexImage(sex) {
			return require('@/static/image/' + (sex === '男' ? 'male.png' : 'female.png'));
		},

		viewImage(url) {
			let images = [];
			for(let obj of this.sticker.images) images.push(obj.image)
			uni.previewImage({
				urls: images,
				current: url
			});
		},

		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		},

		
		/**
		 * @param {Object} id 评论id
		 * @param {Object} isLike 是否点赞
		 */
		changLike(id, isLike) {
			if (!isLike) { 
				this.$http.post('/sticker/addCommentLike', { commentId: id });
			} else {
				this.$http.get('/sticker/delCommentLike', { id});
			}
		},
		
		likeClick() {
			this.$http.post('/changFriend', {userId: this.userDB.id, friendId: this.sticker.user.id}).then(res => {
				this.isLike = !this.isLike;
			})
		},

		// 跳转用户资料
		navToOtherUser(id) {
			this.$u.route('/pages/user/otherUser', {id})
		},
		// 发送评论
		sendComment(content) {
			this.scrollId = '';
			this.$http.post('/sticker/sendComment', { content, stickerId: this.sticker.id }).then(res => {
				let comment = res.data;
				comment.user = this.userDB;
				this.comments.unshift(comment);
				this.$refs.uToast.show({ title: res.msg, type: 'success' });
				this.scrollId = 'comment';
			});
		},
		/**
		 * 页面触底，加载更多数据
		 */
		lower() {
			// loadCnt 防止划多次
			if (this.loadCnt > 0) return;
			if (this.isLoad) return;
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getComments(this.sticker.id);
			else this.isLoad = true;
			this.loadCnt--;
		}
	}
};
</script>

<style lang="stylus">
.user-info
	width 100%
	color #333333
	font-size $uni-font-size-base
.box-info-up
	width 85%
	height 55rpx
	margin 30rpx auto 0
.box-info-down
	width 85%
	height 60rpx
	margin 0 auto 30rpx
	.user
		max-width 45%
		.box-userName
			position relative
			top 5rpx
			margin-left 10rpx
			max-width 70%
	.title
		max-width 45%
		height 100%
		font-size 30rpx
		// font-weight 600
		.title-text
			margin-left 10rpx
.user-info-image
	width 100%
	.like-box
		background-color rgba(135, 153, 163, 0.4)
		width 80rpx
		height 80rpx
		border-radius 50%
		position absolute
		top 635rpx
		right 85rpx
		z-index 99
		.like
			margin 6rpx 6rpx
			width 70rpx
			height 70rpx
			z-index 999
.card-swiper
	height 630rpx !important
	.praise-wall
		width 100%
.on-right
	margin-left auto
	margin-right 0
.input-fixed
	position fixed
	bottom 0
	width 100%
	background-color #FFFFFF
	z-index 9999
</style>

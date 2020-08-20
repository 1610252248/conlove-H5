<template>
	<view>
		<c-custom-mid><block slot="center">
			{{user.nickName}}
		</block></c-custom-mid>
		<!-- 用户信息 -->
		<c-scroll midHeight>
			<c-user :user="user" :selectTagList="selectTagList" :isIdentity="isIdentity"
			:stickers="stickers" :posts="posts"
			 />
			 
		</c-scroll>
		<!-- 秋波功能 -->
		<view class="like-box" @click="likeClick" >
			<!-- 喜欢按钮 -->
			<image v-if="userDB.id != user.id" class="like" :src="isLike ? '/static/image/pic-like-active.png' : '/static/image/pic-like-normal.png'"></image>
		</view>
		<u-modal v-model="showDel" content="确定要取消秋波吗？" mask-close-able show-cancel-button @confirm="confirmDel" />
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


		/*************** 跳转页面 ***************/
	
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
.like-box
	background-color rgba(199, 199, 199, 0.4)
	width 96rpx
	height 96rpx
	border-radius 50%
	z-index 99
	position fixed
	bottom 40rpx
	right 52rpx
	display: flex;
	justify-content: center;
	align-items: center;
	.like
		width 70rpx
		height 70rpx
		z-index 999
</style>

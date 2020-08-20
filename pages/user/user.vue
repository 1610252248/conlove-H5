<template>
	<c-scroll midHeight>
		<!-- 用户信息 -->
		<view v-if="!isLogin">
			<view class="bg-gray padding">
				<view class="flex justify-start align-center ">
					<u-avatar class="margin-left" size="110" mode="circle"></u-avatar>
					<view @click="navToLogin" class="margin-left-xl text-df text-bold">点击登录</view>
				</view>
			</view>
			<view class="card">
				<view class="flex justify-center flex-direction align-center" style="height: 60vh;">
					<image style="width: 150upx;height: 150upx;" src="/static/image/pic-dataIsNone.png"></image>
					<text style="color:#bebebe">暂无数据</text>
				</view>
			</view>
		</view>
		<c-user v-else :user="user"  :selectTagList="selectTagList" :isIdentity="isIdentity"
		:stickers="stickers" :posts="posts"
		 />
		 <u-top-tips :navbar-height="0" ref="uTips" @edit-user="navToEditUser"></u-top-tips>
	</c-scroll>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin']),
		...mapState(['userDB'])
	},
	data() {
		return {
			// 用户信息
			user: {},
			//用户选择的标签
			selectTagList: [],

			// 是否身份认证
			isIdentity: true,

			stickers: [],
			posts: [],
			is_login: false,
		};
	},
	onReady() {
		/* 只能密码是空，其它属性不为空，否则就提示信息不完整 */
		let num = 0;
		for (let obj in this.user) {
			if (this.user[obj] == null) num++;
		}
		if (num > 3) {
			this.$refs.uTips.show({
				title: '完善信息之后，得到秋波几率更高哦~',
				type: 'primary',
				duration: '2300'
			});
		}
	},
	onLoad() {
		// 登录之后在请求
		if(this.isLogin) {
			this.init();
		}
		this.$eventBus.$on('login-success', () => {
			this.init();
		});
		this.$eventBus.$on("update-user-info", () => {
			this.init();
		})
	},
	methods: {
		// 修改信息
		navToEditUser() {
			this.$u.route('/pages/user/userEdit');
		},
		/* 获取个性展示标签，缘来和动态 */
		init() {
			this.user = this.$u.deepClone(this.userDB);
			this.getUserLabel();
			this.getData();
		},
		getUserLabel() {
			this.$http
				.get('/userLabel', { id: this.userDB.id })
				.then(res => {
					this.selectTagList = res.data;
				})
				.catch(err => err);
		},
		getData() {
			let data = { id: this.userDB.id, page: 1, pageSize: 3 };
			this.$http.get('/user/getUserPost', data).then(res => {
				this.posts = res.data.list;
			});
			data.pageSize = 1;
			this.$http.get('/user/getUserSticker', data).then(res => {
				this.stickers = res.data.list;
			});
		},
		// 登录跳转
		navToLogin() {
			this.$u.route('/pages/enter/login');
		},
	}
};
</script>

<style lang="stylus">

</style>

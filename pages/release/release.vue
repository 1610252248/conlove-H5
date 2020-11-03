<template>
	<c-scroll max-height>
		<c-custom-mid><block slot="center">发布缘来</block></c-custom-mid>
		<view class="bg-white padding margin-bottom-lg">
			<view class="cu-steps">
				<view class="cu-item" :class="index>basics?'':'text-red'" v-for="(item,index) in basicsList" :key="index">
					<view class="step-bottom">
						<image class="step-image" :src="'/static/image/' +  (index<=basics ? item.imageActive : item.image)" />
					</view> 
					<view class="step-bottom padding-top-sm">
						{{item.name}}
					</view>
				</view>	
			</view>
		</view>
		
		<!-- 基本信息 -->
		<release-first v-if="basics == 0" :data="data"  @next="next" />
		<!-- 心动信号 -->
		<release-third v-if="basics == 1" :data="data" @next="nextThird" />
		<!-- 图片上传 -->
		<release-second v-if="basics == 2" :data="data.images" @back="back" @next-sec="nextSec" />
		<block v-if="basics == 3">
			<view style="height: 40rpx;"></view>
			<view class="margin-tb flex justify-center">
				<u-image :show-loading="false" :fade="false" width="40%" shape="circle" height="300rpx" src="/static/image/release-finish-toast.png" />
			</view>
			<view style="height: 60rpx; line-height: 60rpx;text-align: center;" class="text-bold">
				<view>
					您已{{id != -1 ? '修改' : '发布'}}成功，快 <text class="navJump" @click="navToHome">返回首页</text> 看看吧
				</view>
			</view>
		</block>
		<view style="height: 50rpx;"></view>
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import releaseFirst from '@/pages/release/releaseFirst.vue'
import releaseSecond from '@/pages/release/releaseSecond.vue'
import releaseThird from '@/pages/release/releaseThird.vue'
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin']),
		...mapState(['userDB'])
	},
	components: {
		releaseFirst, releaseSecond, releaseThird
	},
	data() {
		return {
			basicsList: [
				{image: 'release-edit.png', imageActive: 'release-edit-active.png', name: '填写信息'},
				{image: 'release-heart.png', imageActive: 'release-heart-active.png', name: '心动信号'}, 
				{image: 'release-image.png', imageActive: 'release-image-active.png', name: '上传图片'}, 
				{image: 'release-finish.png', imageActive: 'release-finish-active.png',name: '完成'}
			],
			basics: 0,
			data: {
				title: '',
				sex: '',
				school: '西安电子科技大学',
				grade: '',
				birthDate: '',
				height: '',
				introduce: '',
				images: [],
				favorite: '',
				emotion: '',
				level: '',
				friend: true, // 默认为朋友发帖
			},
			id: -1, // 表明不是修改页面过来的
		
			last_user: {},
		
			
		}
	},
	onLoad({id, friend}) {
		if(!this.isLogin) {
			this.$http.get('/verifyLogin').catch( err => {})
		}
		if(id != null) {
			this.id = id;
			this.getSticker(id);
		}
		// 为自己发帖
		if(friend && friend == 'false') {
			let user = this.$u.deepClone(this.userDB);
			for(let key in user) {
				this.data[key] = user[key]
			}
			this.last_user = this.$u.deepClone(this.data);
			this.last_user['id'] = this.userDB['id']
			this.data.images = []
			this.data.friend = false
		}
		
	},
	methods: {
		...mapActions([
			'set' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		getSticker(id) {
			this.$http.get('/getModify/sticker', {id}).then(res => {
				this.data = res.data;
			})
		},
		next(firstData) {
			this.basics++;
			this.data = this.$u.deepMerge(this.data, firstData);;
		},
		nextThird(data) {
			for(let key in data) {
				this.data[key] = data[key]
			}
			this.basics++;
		},
		nextSec(images) {
			// 先判断是否更新信息
			let _this = this;
			if(this.data.friend == false) {
				let flag = false;
				let user = this.$u.deepClone(this.userDB);
				for(let key in this.userDB) {
					if(this.data[key] == null || key === 'id') continue
					if(this.last_user[key] != this.data[key]) {
						user[key] = this.data[key]
						flag = true
					}
				}
				if(flag) {
					uni.showModal({
					    title: '提示',
					    content: '个人信息有改动，是否同步到个人资料？',
						cancelText: '不同步',
						confirmText: '同步',
					    success: function (res) {
					        if (res.confirm) {
								user.grade = null;
								_this.$http.post('/updateUserInfo',  { user: user }).then(res => {
									_this.set({user: user})
									_this.publish(images)
									_this.$eventBus.$emit('update-user-info');
								})
					        } else {
								_this.publish(images)
							}
					    }
					});
				} else {
					this.publish(images)
				}
			} else {
				this.publish(images)
			}
		},
		publish(images) {
			uni.showLoading();
			if(this.id != -1) {
				this.$http.post('/updateSticker', {sticker: this.data, images}).then(res => {
					this.$eventBus.$emit('update-sticker');
					this.jumpHome()
				})
			} else {
				this.data.images = images
				this.$http.post('/addSticker', this.data).then(res => {
					this.$eventBus.$emit('update-sticker')
					this.jumpHome()
				})
			}
		},
		jumpHome() {
			uni.hideLoading();
			this.basics++;
			setTimeout(() => {
				this.$u.route({
					url: '/pages/home/home',
					type: 'tab'
				})
			}, 3000)
		},
		navToHome() {
			this.$u.route({
				type: 'tab',
				url: '/pages/home/home'
			})
		},
		back() {
			this.basics--;
		}
	},
}
</script>

<style lang="stylus">
.step-image
	width: 50rpx;
	height: 50rpx;
.step-bottom 
	position relative
	top 16rpx
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 1000px
	font-size 30upx
	padding 0 100rpx
.navJump
	font-weight 600
	color #94afce
	padding 1px
	border-bottom 0.5px solid #859eb8;
</style>

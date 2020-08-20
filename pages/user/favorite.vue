<template>
	<c-scroll midHeight>
		<c-card :line="false" :top="false">
			<view slot="content">
				<view class="margin-bottom">
					<view class="text-df margin-bottom-sm">心仪的TA</view>
					<textarea
						maxlength="-1"
						auto-height
						v-model="user.favorite"
						class="textarea-border-2"
						placeholder="向大家描述下心里的那个TA吧，
理想型什么的，说不定真的存在哦！"
					/>
				</view>
				<u-line color="#d4d4d4" />
				<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }">
					<u-collapse-item title="看看别人怎么写">
						<text class="text-sm">
							<li>性格好是第一位的，希望对方是个温柔有同理心、积极乐观的妹子。 年龄的话加减3岁都可以接受，也就是99年到93年之间。外表当然可爱漂亮些更好啦，主要还是看眼缘，互相看着顺眼就好，女孩子都是可爱的！ 最后如果家在西安本地或者有留在西安的打算，就再好不过了。</li>
							<li>希望我的她你快快来，别让我找你太久。</li>
						</text>
					</u-collapse-item>
				</u-collapse>
			</view>
		</c-card>

		<c-card :line="false" :top="false">
			<view slot="content">
				<view class="margin-bottom">
					<view class="text-df margin-bottom-sm">感情观</view>
					<textarea
						maxlength="-1"
						v-model="user.emotion"
						auto-height
						class="textarea-border-2"
						placeholder="你心里隐隐期待的情感和婚姻是什么样的呢？
或者有什么想要分享的情感经历吗~"
					/>
				</view>
				<u-line color="#d4d4d4" />
				<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }">
					<u-collapse-item title="看看别人怎么写">
						<text class="text-sm">
							<li>因为圈子太固化，接触异性的机会不多，只谈过一次恋爱，不知不觉就单到现在了。希望有一个人可以一起分享日常，给你讲我的有趣见闻，听你说生活的鸡毛蒜皮，一起探索西安的大街小巷，一起学习进步提升自己。</li>
							<li>感情观的话，我觉得是彼此忠诚，相互陪伴，积极沟通，求同存异，共同进步吧，哈哈哈~</li>
						</text>
					</u-collapse-item>
				</u-collapse>
			</view>
		</c-card>

		<view class="flex padding-top-xl margin-top justify-center"><u-button class="btn bg-redd " :ripple="true" @click="save">保存</u-button></view>
		<view class="flex margin-top margin-bottom justify-center"><u-button class="btn bg-greyy" :ripple="true" @click="cancel">取消</u-button></view>
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			user: {}
		}
	},
	onLoad() {
		this.user = this.$u.deepClone(this.userDB);
	},
	methods: {
		...mapActions([
			'set' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		save() {
			// 后端修改
			this.$http.post('/updateUserInfo', { user: this.user}).then(res => {
				if (res.status == this.$http.SUCCESS) {
					this.set({ user: this.user });
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/user/user',
						isTab: true
					});
					this.$eventBus.$emit('update-user-info');
				}
			});
		},
		cancel() {
			
		},
	},
}
</script>

<style lang="stylus">
text
	height 40rpx
	line-height 40rpx
.textarea-border-2
	width 560rpx
	min-height 400rpx 
	color #8b8b8b
	font-size 24rpx
	margin 0 10rpx
	padding 10rpx 12rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.btn
	border-radius 1000px
	font-size 30upx
	height 70rpx
	padding 0 90rpx
.bg-redd
	color #ffffff !important
	background-color #ff4a2d !important
.bg-greyy
	background-color #8799a3 !important
	color #ffffff !important
</style>

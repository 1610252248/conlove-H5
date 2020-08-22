<template>
	<view class="box-display  padding-bottom-xl">
		<!-- 关于我 -->
		<view class="text-sm">
			<view class="title text-nowrap margin-left-sm margin-bottom-xs">{{nameList.introduce}}</view>
			<textarea
				maxlength="-1"
				auto-height
				v-model="user.introduce"
				class="textarea-border-2"
				placeholder="向对你感兴趣的人介绍下自己吧o(￣▽￣o)~
可以讲讲你的爱好、家庭、求学经历、去过的地方等等等"
			/>
		</view>
		<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }" :itemStyle="{ padding: '0 10rpx' }">
			<u-collapse-item title="看看别人怎么写">
				<text class="text-sm">
					<li>性格：有点内向，但是熟了之后是个小话痨，喜欢分享日常</li>
					<li>家庭：父母是双职工，有一个哥哥，是普通的小康之家，家人感情很好，平时像朋友一样，什么话都可以说~</li>
					<li>兴趣爱好：我爱好不多，喜欢打打羽毛球，喜欢画画但是画得不好，你愿意带我了解接触你喜欢的事就再好不过了。</li>
					<li>喜欢的约会：吃饭唱歌看电影，除了户外运动都还好^w^</li>
				</text>
			</u-collapse-item>
		</u-collapse>
		<u-line color="#d4d4d4" />
		<view style="height: 30rpx;"></view>

		<!-- 心仪的TA -->
		<view class=" text-sm">
			<view class="title text-nowrap margin-left-sm margin-bottom-xs">{{nameList.favorite}}</view>
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
		<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }" :itemStyle="{ padding: '0 10rpx' }">
			<u-collapse-item title="看看别人怎么写">
				<text class="text-sm">
					<li>
						性格好是第一位的，希望对方是个温柔有同理心、积极乐观的妹子。
						年龄的话加减3岁都可以接受，也就是99年到93年之间。外表当然可爱漂亮些更好啦，主要还是看眼缘，互相看着顺眼就好，女孩子都是可爱的！
						最后如果家在西安本地或者有留在西安的打算，就再好不过了。
					</li>
					<li>希望我的她你快快来，别让我找你太久。</li>
				</text>
			</u-collapse-item>
		</u-collapse>
		<u-line color="#d4d4d4" />
		<view style="height: 30rpx;"></view>

		<!-- 心仪的TA -->
		<view class=" text-sm">
			<view class="title text-nowrap margin-left-sm margin-bottom-xs">{{nameList.emotion}}</view>
			<textarea
				maxlength="-1"
				auto-height
				v-model="user.emotion"
				class="textarea-border-2"
				placeholder="你心里隐隐期待的情感和婚姻是什么样的呢？
或者有什么想要分享的情感经历吗~"
			/>
		</view>
		<u-line color="#d4d4d4" />
		<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }" :itemStyle="{ padding: '0 10rpx' }">
			<u-collapse-item title="看看别人怎么写">
				<text class="text-sm">
					<li>
						因为圈子太固化，接触异性的机会不多，只谈过一次恋爱，不知不觉就单到现在了。希望有一个人可以一起分享日常，给你讲我的有趣见闻，听你说生活的鸡毛蒜皮，一起探索西安的大街小巷，一起学习进步提升自己。
					</li>
					<li>感情观的话，我觉得是彼此忠诚，相互陪伴，积极沟通，求同存异，共同进步吧，哈哈哈~</li>
				</text>
			</u-collapse-item>
		</u-collapse>
		
		<view class="flex padding-top-xl margin-top justify-center"><u-button class="btn" @click="next">下一步</u-button></view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {{}}
		}
	},
	data() {
		return {
			user: {
				introduce: '',
				favorite: '',
				emotion: ''
			},
			nameList: {
				introduce: '关于我',
				favorite: '心仪的TA',
				emotion: '感情观'
			}
		};
	},
	mounted() {
		setTimeout(() => {
			let data = this._props.data;
			for(let key in this.user) {
				if(data[key]) this.user[key] = data[key]
			}
			if(data.friend) {
				this.nameList.introduce = '关于我的朋友'
			}
		}, 10);
	},
	methods: {
		// 下一步
		next() {
			// 验证
			let flag = false;
			for(let key in this.user) {
				if(this.user[key] == '') {
					this.$u.toast('请填写' + this.nameList[key])
					return ;
				}
			}
			this.$emit('next', this.user);
			
		}
	},
};
</script>

<style lang="stylus">
.box-display
	width 90%
	margin 0 auto
text
	height 40rpx
	line-height 40rpx
.textarea-border-2
	width 650rpx
	min-height 200rpx !important
	color #8b8b8b
	font-size 24rpx
	margin 0 10rpx
	padding 10rpx 12rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 1000px
	font-size 30upx
	padding 0 100rpx
</style>

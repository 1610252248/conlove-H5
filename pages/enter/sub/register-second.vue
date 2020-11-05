<template>
	<c-scroll max-height>
		<view class="content">
			<view style="width: 84%; margin: 0 auto;">
				<c-title @upload-avatar="uploadAvatar" :imageSrc="imageSrc">
					<block slot="content">
						<view>最后一步！</view>
						<view class="text-xl">构造你的初始形象吧</view>
					</block>
				</c-title>
				
				<!-- 表单 -->
				<u-form class="form" label-width="0"  :model="form" ref="uForm" :errorType="errorType">
					<u-form-item prop="nickName" :border-bottom="false">
						<u-input :custom-style="inputCustome" placeholder="请输入昵称" :clearable="false" v-model="form.nickName" type="text" />
					</u-form-item>
					<u-form-item prop="sex" :border-bottom="false">
						<u-input :custom-style="inputCustome" placeholder="选择性别之后无法修改哦~"  @click="showSex = true" disabled :clearable="false" v-model="form.sex" type="text" />
						<u-icon class="arrow-down-fill"  @click="showSex = true" name="arrow-down-fill" color="#A7A7A7" size="22" />
					</u-form-item>
					<u-form-item prop="shool" :border-bottom="false">
						<u-input :custom-style="inputCustome" placeholder="请选择学校" disabled @click="$refs.schoolPicker.show()" :clearable="false" v-model="form.school" type="text" />
						<u-icon class="arrow-down-fill" @click="$refs.schoolPicker.show()" name="arrow-down-fill" color="#A7A7A7" size="22" />
					</u-form-item>
					<view class="flex justify-between">
						<view style="width: 60%;">
							<u-form-item prop="grade" :border-bottom="false">
								<view class="padding-right">
									<u-input :custom-style="inputCustome" placeholder="请选择入学时间" @click="showGrade=true" disabled :clearable="false" v-model="form.grade" type="text" />
								</view>
								<u-icon class="arrow-down-fill-left" @click="showGrade=true" name="arrow-down-fill" color="#A7A7A7" size="22" />
							</u-form-item>
						</view>
						<view style="width: 40%;">
							<u-form-item prop="level" :border-bottom="false">
								<u-input :custom-style="inputCustome" placeholder="学位" disabled @click="showLevel=true" :clearable="false" v-model="form.level" type="text" />
								<u-icon class="arrow-down-fill" name="arrow-down-fill" @click="showLevel=true" color="#A7A7A7" size="22" />
							</u-form-item>
						</view>
					</view>
					<u-form-item prop="major" :border-bottom="false">
						<u-input :custom-style="inputCustome" placeholder="请输入专业"  :clearable="false" v-model="form.major" type="text" />
					</u-form-item>
				</u-form>
				
			</view>
			<view>
				<c-card>
					<view slot="top">个性展示</view>
					<view slot="content">
						<view class="flex">
							<view class="card-item">关键词:</view>
							<view style="width: 80%">
								<u-tabs :height="60" :font-size="24" :bar-width="30" :gutter="28" :list="labelList"  :current="tabCur" @change="changeTab"></u-tabs>
							</view>
						</view>
						<!-- 关键词内容 -->
						<view class="text-sm margin-top-sm " style="min-height: 180rpx;">
							<view class="flex flex-wrap ">
								<view
									class="info-tag"
									@click="changeTag(item)"
									:class="getTabColor(item)"
									v-for="(item, index) in labelList[tabCur].list[labelList[tabCur].index]"
									:key="index"
								>
									{{ item }}
								</view>
							</view>
						</view>
						<!-- 换一批标签 -->
						<view class="text-center text-sm text-gray margin-bottom-sm" @click="changeList">
							<text>换一批</text>
							<text class="cuIcon-refresh margin-left-xs"></text>
						</view>
						<!-- 已选标签 -->
						<view class="flex text-sm">
							<text class="title text-nowrap margin-right-xs margin-left-sm">已选:</text>
							<view class="text-sm">
								<view class="flex flex-wrap">
									<view class="info-tag" :class="getTagColor(index)" v-for="(item, index) in selectTagList" :key="index">{{ item.name }}</view>
								</view>
							</view>
						</view>
						<view class=" text-sm margin-tb">
							<view class="title text-nowrap margin-left-sm">关于我</view>
							<textarea
								auto-height
								v-model="form.introduce"
								class="textarea-border-2"
								placeholder="向对你感兴趣的人介绍下自己吧o(￣▽￣o)~
可以讲讲你的爱好、家庭、求学经历、去过的地方等等等"
							/>
						</view>
						<u-line color="#d4d4d4" />
						<u-collapse :head-style="{ 'font-size': '24rpx', color: '#066752' }">
							<u-collapse-item title="看看别人怎么写">
								<text class="text-sm">
									<li>性格：有点内向，但是熟了之后是个小话痨，喜欢分享日常</li>
									<li>家庭：父母是双职工，有一个哥哥，是普通的小康之家，家人感情很好，平时像朋友一样，什么话都可以说~</li>
									<li>兴趣爱好：我爱好不多，喜欢打打羽毛球，喜欢画画但是画得不好，你愿意带我了解接触你喜欢的事就再好不过了。</li>
									<li>喜欢的约会：吃饭唱歌看电影，除了户外运动都还好^w^</li>
								</text>
							</u-collapse-item>
						</u-collapse>
					</view>
				</c-card>
			</view>
			
			<view class="text-center">
				<button @click="next" class="cu-btn round bg-red lg"> 开启缘来</button>
				<view class="margin-tb-xl"  style="color: #888888;">
					已有账号？
					<span @click="$u.route('/pages/enter/login')" class="navJump">点此登录</span>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-select v-model="showSex" :list="sexPicker" @confirm="setSex"></u-select>
		<u-select v-model="showLevel" :list="levelList" @confirm="setLevel"></u-select>
		<u-picker v-model="showGrade" mode="time"  :params="{ year: true }" @confirm="setGrage" ></u-picker>
		<schoolPicker themeColor="#097fff" ref="schoolPicker" @onConfirm="setScholl" />
	</c-scroll>
</template>

<script>
import infoMixins from 'common/mixins/user-info.js' // 多余的个人信息（标签和关于我
export default {
	
	mixins:  [infoMixins],
	data() {
		return {
			// 默认头像显示
			imageSrc: '/static/image/register-second.png',
			// 输入框样式
			inputCustome: {
				'background': '#ffffff',
				'border': '1px solid #C0C0C0',
				'border-radius': '100upx',
				'padding': '14upx 40upx',
				'height': '76upx',
				'width': '100%',
				'font-size': '30upx'
			},
			showSex: false,
			schoolShow: false,
			showGrade: false,
			showLevel: false,
			sexPicker: [{ label: '男' }, { label: '女' }],
			levelList: [{ label: '学士' }, { label: '硕士' }, { label: '博士' }],
			// 表单数据
			form: {
				avatar: '/api/img/default_boy.jpg',
				nickname: '',
				sex: '',
				school: '',
				grade: '',
				level: '',
				major: '',
				introduce: ''
			},
			
			errorType: ['toast'],
			// 表单验证规则
			rules: {
				nickName: [{ required: true, message: '请输入昵称' }],
				sex: [{ required: true, message: '请选择性别' }],
				school: [{ required: true, message: '请选择学校' }],
				grade: [{ required: true, message: '请选择年级' }],
				level: [{ required: true, message: '请选择学位' }],
				major: [{ required: true, message: '请输入专业' }]
			},
		};
	},
	// 设置表单规则
	mounted() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		setSex(e) {
			this.form.sex = e[0].label;
		},
		setLevel(e) {
			this.form.level = e[0].label
		},
		setGrage(e) {
			this.form.grade = e.year;
		},
		/**
		 * 确认学校选择
		 */
		setScholl(e) {
			const school = e.label.split('-')[2];
			if (school === '暂未收录') {
				return;
			} else {
				this.form.school = school;
			}
		},
		async uploadAvatar() {
			await this.$http.urlImgUpload('/fileUpload').then(res => {
				this.form.avatar = res[0];
				this.imageSrc = res[0];
				this.isAvatar = true;
			});
		},
		next() {
			this.$refs.uForm.validate(valid => {
				// 表单验证成功
				if (valid) {
					if(!this.isAvatar) {
						if(this.form.sex === '女')
							this.form.avatar = '/api/img/default_girl.jpg'
					}
					this.$emit('next', this.form, this.selectTagList)
				}
			});
		},
	},
	
}
</script>

<style lang="stylus">

.content
	width 100%
	margin 0 auto
.form 
	margin-top 90rpx
.title-text view
	padding 12rpx 0
.arrow-down-fill 
	position absolute
	right 10%
.arrow-down-fill-left
	position absolute
	right 48%
.cu-btn, .lg
	margin-top 60rpx
	width 230rpx	
.navJump
	color #888888 
	font-weight 600
	padding-bottom 4rpx
	border-bottom 1px solid #BBBBBB
.card-item
	height 60rpx
	display inline-block
	line-height 60rpx
	margin 0 18rpx
	color #333333


.info-tag
	padding 4rpx 10rpx
	margin 0 0 16rpx 16rpx
	border-radius 10rpx
.bg-red
	border 1px solid #ff4a2d
.bg-blue
	border 1px solid #3f91e3
.bg-yellow
	border 1px solid #ffb434
.tag-border
	border 1px solid #a7a7a7
	border-radius 15rpx
	color #595959

.bg-redd
	color #ffffff !important
	background-color #ff4a2d !important
.bg-greyy
	background-color #8799a3 !important
	color #ffffff !important
.textarea-border-2
	width 560rpx
	min-height 200rpx !important
	color #8b8b8b
	font-size 24rpx
	margin 0 10rpx
	padding 10rpx 12rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.title
	height 44rpx
	line-height 44rpx
	display flex
	align-items center
</style>

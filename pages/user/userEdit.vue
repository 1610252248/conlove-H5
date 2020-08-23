<template>
	<c-scroll midHeight>
		<!-- 基础资料 -->
		<c-card>
			<view slot="top">基础资料</view>
			<view slot="content">
				<view @click="updateAvatar" class="cu-avatar round xl margin-bottom" :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
					<view class="cu-tag lg badge cuIcon-camerafill"></view>
				</view>
				<view class="title">
					<text class="left-text">昵称</text>
					<view class="margin-left flex"><input placeholder="请输入昵称" class="input-weight" type="text" v-model="user.nickName" /></view>
				</view>
				<view class="title">
					<text class="left-text">生日</text>
					<view class="margin-left title flex">
						<view @click="showYear = true" class="input-border birth-width">
							{{ birth.year }}
							<text class="cuIcon-unfold fr"></text>
						</view>
						<view class="birth-text-padding">年</view>
						<view @click="showMonth = true" class="input-border birth-width">
							{{ birth.month }}
							<text class="cuIcon-unfold fr"></text>
						</view>
						<view class="birth-text-padding">月</view>
						<view @click="showDay = true" class="input-border birth-width">
							{{ birth.day }}
							<text class="cuIcon-unfold fr"></text>
						</view>
						<view class="birth-text-padding">日</view>
					</view>
				</view>
				<view class="title">
					<text class="left-text">常住地</text>
					<view class="margin-left"><input placeholder="请输入常住地" class="input-weight" type="text" v-model="user.city" /></view>
				</view>
				<view class="title">
					<text class="left-text">在校情况</text>
					<view class="margin-left title">
						<view @click="showGraduation = true" class="input-border input-weight">
							<text :class="user.graduation == null ? 'text-placeholder' : ''">
								{{ user.graduation == null ? '请选择' : user.graduation == 0 ? '未毕业' : '已毕业' }}
							</text>
							<text class="cuIcon-unfold fr"></text>
						</view>
					</view>
				</view>
				<view class="flex" style="margin-top: 6rpx;">
					<text class="left-text">个性签名</text>
					<textarea placeholder-class="text-placeholder" placeholder="介绍自己的个性签名吧~~" class="textarea-border" maxlength="30" v-model="user.sign" />
					<text class="totalNum">{{ user.introduce == null ? 0 : user.introduce.length }}/30</text>
				</view>
			</view>
		</c-card>

		<!-- 学校信息 -->
		<c-card>
			<view slot="top">学校信息</view>
			<view slot="content">
				<view class="title">
					<text class="left-text">学校</text>
					<view class="margin-left">
						<view class="input-border input-weight" @click="$refs.schoolPicker.show()">
							<block v-if="!user.school || user.school.length == 0"><text class="text-placeholder">请选择学校</text></block>
							<block v-else>{{ user.school }}</block>
							<text class="cuIcon-unfold fr"></text>
						</view>
					</view>
				</view>
				<view class="title">
					<text class="left-text">专业</text>
					<view class="margin-left"><input placeholder="请输入专业" class="input-weight" type="text" v-model="user.major" /></view>
				</view>
				<view class="title">
					<text class="left-text">年级</text>
					<view class="margin-left title flex">
						<view @click="showGrade = true" class="input-border birth-width">
							{{ user.grade }}
							<text class="cuIcon-unfold fr"></text>
						</view>
						<view class="birth-text-padding">级</view>
						<view @click="showLevel = true" class="input-border birth-width">
							{{ user.level }}
							<text class="cuIcon-unfold fr"></text>
						</view>
					</view>
				</view>
			</view>
		</c-card>

		<!-- 个性展示 -->
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
					<text class="title text-nowrap margin-right-xs margin-left-sm">已选</text>
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
						v-model="user.introduce"
						class="textarea-border-2"
						placeholder="向对你感兴趣的人介绍下自己吧o(￣▽￣o)~
可以讲讲你的爱好、家庭、求学经历、去过的地方等等等"
					/>
					<!-- <text class="totalNum">{{introduce.length}}/30</text> -->
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

		<view class="flex padding-top-xl margin-top justify-center"><u-button class="btn bg-redd " :ripple="true" @click="save">保存</u-button></view>
		<view class="flex margin-top margin-bottom justify-center"><u-button class="btn bg-greyy" :ripple="true" @click="cancel">取消</u-button></view>

		<u-picker mode="time" v-model="showYear" :params="{ year: true }" @confirm="setDate"></u-picker>
		<u-picker mode="time" v-model="showGrade" :params="{ year: true }" @confirm="setGrage"></u-picker>
		<u-picker mode="time" v-model="showMonth" :params="{ month: true }" @confirm="setDate"></u-picker>
		<u-picker mode="time" v-model="showDay" :params="{ day: true }" @confirm="setDate"></u-picker>
		<u-select v-model="showGraduation" :list="graduationList" @confirm="setGraduate"></u-select>
		<u-select v-model="showLevel" :list="levelList" @confirm="setLevel"></u-select>
		<schoolPicker themeColor="#097fff" ref="schoolPicker" @onConfirm="onConfirm" />

		<u-modal v-model="show" title="哎呀" cancel-text="手滑手滑" show-cancel-button content="信息还没保存，确定取消吗？" :mask-close-able="true" @confirm="confirm" />
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import labelList from './label-data/label.js'
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},

	data() {
		return {
			//个人资料
			user: {},
			birth: {
				year: '',
				month: '',
				day: ''
			},
			isFemale: false,
			sexPicker: ['男', '女'],
			tabCur: 0,
			showYear: false,
			showMonth: false,
			showDay: false,
			show: false,
			showGrade: false,
			showLevel: false,
			showGraduation: false,
			levelList: [{ label: '学士' }, { label: '硕士' }, { label: '博士' }],
			graduationList: [{ value: 0, label: '未毕业' }, { value: 1, label: '已毕业' }],
			selectTagList: [],
			colorList: ['bg-red', 'bg-yellow', 'bg-blue'],
			labelList: labelList,
			changUser: false // 改变信息
		};
	},
	onLoad() {
		// 加载数据
		this.init();
	},
	onBackPress() {
		for (let key in this.user) {
			if (this.user[key] !== this.userDB[key]) {
				this.changUser = true;
				break;
			}
		}
		if (this.changUser) {
			this.show = true;
			return true;
		}
	},
	methods: {
		...mapActions([
			'set' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		]),
		/**
		 * 确认学校选择
		 */
		onConfirm(e) {
			const school = e.label.split('-')[2];
			if (school === '暂未收录') {
				return;
			} else {
				this.user.school = school;
			}
		},
		init() {
			this.user = this.$u.deepClone(this.userDB);
			if (this.user.birthDate != null) {
				let obj = this.user.birthDate.split('-');
				this.birth.year = obj[0];
				this.birth.month = obj[1];
				this.birth.day = obj[2];
			}
			// 获取用户标签
			this.$http.get('/userLabel', { id: this.user.id }).then(res => {
				this.selectTagList = [];
				this.selectTagList = res.data;
			});
		},
		sexChange(e) {
			this.user.sex = this.sexPicker[e.detail.value];
		},
		changeTab(index) {
			this.tabCur = index;
		},
		setGrage(e) {
			this.user.grade = e.year;
		},
		setGraduate(e) {
			this.user.graduation = e[0].value;
		},
		setLevel(e) {
			this.user.level = e[0].label;
		},
		setDate(e) {
			for (let key in e) {
				this.birth[key] = e[key];
			}
			let b = this.birth;
			this.user.birthDate = b.year + '-' + b.month + '-' + b.day;
		},
		gradeChange(e) {
			this.user.grade = this.gradePicker[e.detail.value];
		},
		// 换一批 个性展示
		changeList() {
			let cur = this.tabCur;
			let info = this.labelList[cur];
			//
			if (info.index + 1 < info.list.length) info.index++;
			else {
				this.$u.toast('没有其他标签了');
				info.index = 0;
			}
		},
		//获取导航栏选中的 颜色
		getTabColor(tab) {
			if (this.selectTagList.find(item => item.name === tab)) {
				return this.getTagColor(this.tabCur);
			}
			return 'tag-border';
		},
		// 获取选中标签的 颜色
		getTagColor(idx) {
			return this.colorList[idx % 3];
		},
		// 选中/取消 标签
		changeTag(label) {
			this.changUser = true;
			let idx = this.selectTagList.findIndex(item => item.name === label);

			let obj = { name: label, userId: this.userDB.id };

			if (idx != -1) this.selectTagList.splice(idx, 1);
			else this.selectTagList.push(obj);
		},
		// 更新头像
		async updateAvatar() {
			await this.$http.urlImgUpload('/fileUpload').then(res => {
				this.user.avatar = res[0];
			});
		},
		cancel() {
			uni.navigateBack();
		},
		save() {
			let b = this.birth;
			if (b.year == null || b.month == null || b.day == null) {
				this.$refs.uToast.show({
					title: '请填写生日',
					type: 'warning'
				});
			}
			// 后端修改
			this.$http.post('/updateUserInfo', { user: this.user, label: this.selectTagList }).then(res => {
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
		confirm() {
			uni.switchTab({
				url: '/pages/user/user'
			});
		}
	}
};
</script>

<style lang="stylus">
.title
	height 44rpx
	line-height 44rpx
	display flex
	align-items center
.card-item
	height 60rpx
	display inline-block
	line-height 60rpx
	margin 0 18rpx
	color #333333

.cuIcon-camerafill
	background-color transparent !important
	color #8799a3
	font-size 38rpx !important
.left-text
	width 100rpx
uni-input
	padding 0 20rpx
	font-size 24rpx
	color #414141
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.input-weight
	width 410rpx
.input-weight.duan
	width 100rpx
.input-border
	height 1.4em
	line-height 1.4em
	color #414141
	font-size 24rpx
	padding 0 20rpx
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.birth-width
	width 104rpx
	padding 0 10rpx
	text-align center
.birth-text-padding
	padding 0 6rpx
.cuIcon-unfold
	font-size 24rpx
	position relative
	right -4rpx
	font-weight bold
.textarea-border
	width 410rpx
	max-height 120rpx !important
	color #414141
	font-size 24rpx
	// margin 0 0 0 30rpx
	position relative
	right -30rpx
	padding 0 20rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.textarea-border-2
	width 560rpx
	min-height 200rpx !important
	color #8b8b8b
	font-size 24rpx
	margin 0 10rpx
	padding 10rpx 12rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.totalNum
	color #a7a7a7
	position relative
	top 90rpx
	right 66rpx
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
.cu-btn
	padding 0 80rpx
	height 64rpx
.text-placeholder, .uni-input-placeholder, .input-placeholder
	color rgb(192, 196, 204)
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

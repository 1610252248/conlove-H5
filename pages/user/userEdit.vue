<template>
	<view >
		<c-scroll midHeight>
			<!-- 基础资料 -->
			<view class="card">
				<view class="margin-bottom-xs">基础资料</view>
				<view class="padding-left text-sm">
					<view @tap="updateAvatar" class="cu-avatar round xl margin-bottom" :style="{ backgroundImage: 'url(' + user.avatar + ')' }">
						<view class="cu-tag lg badge cuIcon-camerafill"></view>
					</view>
					<view class="title">
						<text class="left-text ">昵称</text>
						<view class="margin-left flex">
							<input  placeholder="请输入昵称" class="input-weight" type="text" v-model="user.nickName" />
						</view>
					</view>
					<view class="title">
						<text class="left-text">性别</text>
						<view class="margin-left title">
							<picker @change="sexChange" :range="sexPicker">
								<view class="input-border input-weight">
									{{user.sex}}
									<text class="cuIcon-triangledownfill fr"></text>
								</view>
							</picker>
						</view>
					</view>
					<view class="title">
						<text class="left-text">生日</text>
						<view class="margin-left title">
							<picker mode="date" @change="dateChange" :start="startDate" :end="endDate">
								<view class="input-border input-weight">
									<text :class="user.birthDate == null ? 'text-placeholder' : ''">{{user.birthDate == null ? '请选择' : user.birthDate}}</text>
									<text class="cuIcon-triangledownfill fr"></text>
								</view>
							</picker>
						</view>
					</view>
					<view class="title">
						<text class="left-text">常住地</text>
						<view class="margin-left"><input placeholder="请输入常住地" class="input-weight" type="text" v-model="user.city" /></view>
					</view>
					<view class="flex" style="margin-top: 6rpx;">
						<text class="left-text">个性签名</text>
						<textarea placeholder-class="text-placeholder" placeholder="介绍自己的个性签名吧~~" class="textarea-border" maxlength="30" v-model="user.sign" />
						<text class="totalNum">{{user.introduce == null ? 0 : user.introduce.length }}/30</text>
					</view>
				</view>
			</view>
			<!-- 学校信息 -->
			<view class="card">
				<view class="margin-bottom-xs">学校信息</view>
				<view class="padding-left text-sm">
					<view class="title">
						<text class="left-text">学校</text>
						<view class="margin-left">
							<!-- <input placeholder="请输入学校" class="input-weight" type="text" v-model="user.school" /> -->
							<view class="input-border input-weight" @click="$refs.schoolPicker.show()">
								<block v-if="!user.school || user.school.length == 0" >
									<text class="text-placeholder">请选择学校</text>
								</block>
								<block v-else>
									{{user.school }}
								</block>
								<text class="cuIcon-triangledownfill fr"></text>
							</view>
						</view>
						
							
					</view>
					<view class="title">
						<text class="left-text">专业</text>
						<view class="margin-left">
							<input placeholder="请输入专业" class="input-weight" type="text" v-model="user.major" /></view>
					</view>
					<view class="title">
						<text class="left-text">在校情况</text>
						<view class="margin-left title">
							<picker @change="gradeChange" :range="gradePicker">
								<view class="input-border input-weight">
									<text :class="user.grade == null ? 'text-placeholder' : ''">{{user.grade == null ? '请选择' : user.grade}}</text>
									<text class="cuIcon-triangledownfill fr"></text>
								</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs">个性展示</view>
				<!-- 关键词导航栏 -->
				<view class="text-sm">
					<view class="card-item">关键词</view>
					<view class="card-item" :class="index == TabCur ? 'cur' : ''" v-for="(item, index) in infoList" :key="index" @tap="TabCur=index">{{ item.name }}</view>
				</view>
				<!-- 关键词内容 -->
				<view class="text-sm margin-top-sm " style="min-height: 180rpx;">
					<view class="flex flex-wrap ">
						<view
							class="info-tag"
							@click="changeTag(item)"
							:class="getTabColor(item)"
							v-for="(item, index) in infoList[TabCur].list[infoList[TabCur].index]"
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
					<text class="title text-nowrap margin-right-xs margin-left">已选</text>
					<view class="text-sm">
						<view class="flex flex-wrap">
							<view class="info-tag" :class="getTagColor(index)" v-for="(item, index) in selectTagList" :key="index">{{ item.name }}</view>
						</view>
					</view>
				</view>
				<view class="flex text-sm margin-tb">
					<text class="title text-nowrap padding-left-xs">关于我</text>
					<textarea v-model="user.introduce" class="textarea-border-2" placeholder="向对你感兴趣的人介绍下自己吧~(￣▽￣)~*" />
					<!-- <text class="totalNum">{{introduce.length}}/30</text> -->
				</view>
			</view>
			<view class="flex padding-top-xl margin-top justify-center">
				<u-button class="btn bg-redd " :ripple="true" @click="save">保存</u-button>
			</view>
			<view class="flex margin-top margin-bottom justify-center">
				<u-button class="btn bg-greyy" :ripple="true" @click="cancel">取消</u-button>
			</view>
		</c-scroll>
		
		<schoolPicker themeColor="#097fff" ref="schoolPicker" @onConfirm="onConfirm" />
	
		
		<u-modal v-model="show" title="哎呀" cancel-text="手滑手滑" show-cancel-button
		content="信息还没保存，确定取消吗？" :mask-close-able="true" @confirm="confirm" />
		<u-toast ref="uToast" />
	</view>
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
			//个人资料
			user: {},
			isFemale: false,
			sexPicker: ['男', '女'],
			startDate: '1985-01-01',
			endDate: '2100-01-01',
			gradePicker: ['已工作', '博士', '研三', '研二', '研一', '大四', '大三', '大二', '大一'],
			TabCur: 0,
			show: false,
			selectTagList: [],
			colorList: ['bg-red', 'bg-yellow', 'bg-blue'],
			infoList: [
				{
					name: '专业',
					list: [['哲学类', '经济类', '法学类', '教育类', '文学类', '历史类', '理学类', '工学类', '农学类', '医学类', '管理类', '艺术类', '军事类']],
					index: 0
				},
				{
					name: '爱好',
					list: [
						['篮球', '跑步', '跳绳', '举重', '足球', '滑板', '羽毛球', '兵乓球', '滑旱冰', '看书', '听音乐', '看电影', '绘画', '写小说', '积木', '王者荣耀'],
						['弹吉他', '钢琴', '萨克斯', '葫芦丝', '折纸', '剪纸', '品茶', '涂鸦', '英雄联盟', '五子棋', 'CF', '地下城勇士', '飞行棋', '真心话大冒险'],
						['吃鸡', '国际象棋', '扑克牌']
					],
					index: 0
				},
				{
					name: '日常',
					list: [],
					index: 0
				},
				{
					name: '经历',
					list: [],
					index: 0
				},
				{
					name: '其它',
					list: [],
					index: 0
				}
			],
			changUser: false, // 改变信息
		};
	},
	onShow() {
		// 加载数据
		this.init();
	},	
	onBackPress() {
		for(let key in this.user) {
			if(this.user[key] !== this.userDB[key]) {
				this.changUser = true; 
				break;
			}
		}
		if(this.changUser) {
			this.show = true
			return true
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
			const school = e.label.split("-")[2];
			// console.log(`源数据:${JSON.stringify(e)}`);
			if (school === '暂未收录') {
				return;
			} else {
				this.user.school = school;
				// console.log(`学校:${school}`);
			}
		},
		init() {
			this.user =  this.$u.deepClone(this.userDB);
			// 获取用户标签
			this.$http.get('/userLabel', { id: this.user.id }).then(res => {
				this.selectTagList = []
				this.selectTagList = res.data;
			});
		},
		sexChange(e) {
			this.user.sex = this.sexPicker[e.detail.value];
		},
		dateChange(e) {
			this.user.birthDate = e.detail.value;
		},
		gradeChange(e) {
			this.user.grade = this.gradePicker[e.detail.value];
		},
		// 换一批 个性展示
		changeList() {
			let cur = this.TabCur;
			let info = this.infoList[cur];
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
				return this.getTagColor(this.TabCur);
			}
			return 'tag-border';
		},
		// 获取选中标签的 颜色
		getTagColor(idx) {
			return this.colorList[idx%3];
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
		updateAvatar() {
			this.$http.urlImgUpload('/fileUpload').then(res => {
				this.user.avatar = res[0];
			})
		},
		cancel() {
			uni.navigateBack();
		},
		save() {
			// 后端修改
			this.$http.post('/updateUserInfo', {user: this.user, label: this.selectTagList}).then(res => {
				if(res.status == this.$http.SUCCESS) {
					this.set({user:this.user});
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/user/user',
						isTab: true
					})
					this.$eventBus.$emit("update-user-info");
				}
			})
		},
		confirm() {
			uni.switchTab({
				url: '/pages/user/user'
			})
		},
	}
};
</script>

<style lang="stylus">
.card
	box-shadow 0px 2px 5px #EDEDED
	width 86%
	margin 40rpx auto
	border 1px solid #cecece
	border-radius 15rpx
	color black
	padding 30rpx 20rpx
	.title
		height 44rpx
		line-height 44rpx
		display flex
		align-items center
	.card-item
		height 50rpx
		display inline-block
		line-height 50rpx
		margin 0 18rpx
		padding 0 4rpx
		color #333333
	.card-item:last-child
		margin-right 0rpx
	.card-item.cur
		border-bottom 4rpx solid #a7a7a7
.cuIcon-camerafill
	background-color transparent !important
	color #8799a3
	font-size 38rpx !important
.left-text
	width 100rpx
uni-input
	padding 0 20rpx
	font-size 24rpx
	color #414141;
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.input-weight
	width 380rpx
.input-weight.duan
	width 100rpx
.input-border
	height 1.4em
	line-height 1.4em
	color #414141;
	font-size 24rpx
	padding 0 20rpx
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.cuIcon-triangledownfill
	font-size 34rpx
.textarea-border
	width 380rpx
	max-height 120rpx !important
	color #414141;
	font-size 24rpx
	margin 0 0 0 30rpx
	padding 0 20rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.textarea-border-2
	width 484rpx
	max-height 200rpx !important
	color #8b8b8b
	font-size 24rpx
	margin 0 0 0 20rpx
	padding 0 14rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.totalNum
	color #a7a7a7
	position relative
	top 90rpx
	right 66rpx
.info-tag
	padding 5rpx 12rpx
	margin 0 0 16rpx 20rpx
	border-radius 10rpx
// .bg-red, .tag-border, .bg-blue, .bg-yellow
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
.text-placeholder,.uni-input-placeholder,.input-placeholder
	color: rgb(192, 196, 204);
.btn
	border-radius 1000px
	font-size 30upx
	height 70rpx
	padding 0 90rpx
.bg-redd 
	color #ffffff !important
	background-color #ff4a2d !important
.bg-greyy 
	background-color: #8799a3!important
	color: #ffffff!important
	
</style>

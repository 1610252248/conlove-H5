<template>
	<view>
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
						<view class="margin-left flex"><input class="input-weight" type="text" v-model="user.name" /></view>
					</view>
					<view class="title">
						<text class="left-text">性别</text>
						<view class="margin-left title">
							<picker @change="sexChange" :range="sexPicker">
								<view class="input-border input-weight">
									<text v-if="user.sex == 2">请选择</text>
									<text v-else>{{ user.sex ? '女' : '男' }}</text>
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
									{{ user.date }}
									<text class="cuIcon-triangledownfill fr"></text>
								</view>
							</picker>
						</view>
					</view>
					<view class="title">
						<text class="left-text">常住地</text>
						<view class="margin-left"><input class="input-weight" type="text" v-model="user.city" /></view>
					</view>
					<view class="flex" style="margin-top: 6rpx;">
						<text class="left-text">个性签名</text>
						<textarea placeholder="介绍自己的个性签名吧~~" class="textarea-border" maxlength="30" v-model="user.sign" />
						<text class="totalNum">{{ introduce.length }}/30</text>
					</view>
				</view>
			</view>
			<!-- 学校信息 -->
			<view class="card">
				<view class="margin-bottom-xs">学校信息</view>
				<view class="padding-left text-sm">
					<view class="title">
						<text class="left-text">学校</text>
						<view class="margin-left"><input class="input-weight" type="text" :value="user.school" /></view>
					</view>
					<view class="title">
						<text class="left-text">专业</text>
						<view class="margin-left"><input class="input-weight" type="text" :value="user.major" /></view>
					</view>
					<view class="title">
						<text class="left-text">在校情况</text>
						<view class="margin-left title">
							<picker @change="gradeChange" :range="gradePicker">
								<view class="input-border input-weight">
									{{ user.grade }}
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
					<view class="card-item" :class="index == TabCur ? 'cur' : ''" v-for="(item, index) in infoList" :key="index" @tap="tabSelect(index)">{{ item.name }}</view>
				</view>
				<!-- 关键词内容 -->
				<view class="text-sm margin-top-sm">
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
							<view class="info-tag" :class="getTagColor(index)" v-for="(item, index) in selectTagList" :key="index">{{ item }}</view>
						</view>
					</view>
				</view>
				<view class="flex text-sm margin-tb">
					<text class="title text-nowrap padding-left-xs">关于我</text>
					<textarea v-model="user.introduce" class="textarea-border-2" placeholder="向对你感兴趣的人介绍下自己吧~(￣▽￣)~*" />
					<!-- <text class="totalNum">{{introduce.length}}/30</text> -->
				</view>
			</view>
			<view class="flex  padding-top-xl margin-top justify-center"><button class="cu-btn bg-red round" @click="save">保存</button></view>
			<view class="flex margin-top margin-bottom justify-center"><button class="cu-btn bg-grey round" @click="back">取消</button></view>
		</c-scroll>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//个人资料
			user: {
				name: 'BobBobo',
				avatar: '/static/img/face.jpg',
				sex: '2',
				date: '请选择',
				city: '西安',
				sign: '我有我的奥妙',
				school: '西安电子科技大学',
				major: '计算机专业',
				grade: '研一', //在校情况
				introduce: '约桌游吗~'
			},
			introduce: '',
			isFemale: false,
			sexIndex: 0,
			sexPicker: ['男', '女'],
			startDate: '1985-01-01',
			endDate: '2100-01-01',
			gradeIndex: 0,
			gradePicker: ['已工作', '博士', '研三', '研二', '研一', '大四', '大三', '大二', '大一'],
			TabCur: 0,
			selectTagList: ['吃鸡', '王者荣耀', '工学类'],
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
			]
		};
	},
	methods: {
		sexChange(e) {
			this.user.sex = e.detail.value;
			this.sex = this.sexPicker[e.detail.value];
		},
		dateChange(e) {
			this.user.date = e.detail.value;
		},
		gradeChange(e) {
			this.user.grade = this.gradePicker[e.detail.value];
		},
		tabSelect(index) {
			this.TabCur = index;
		},
		// 换一批 个性展示
		changeList() {
			let cur = this.TabCur;
			let info = this.infoList[cur];
			//
			if (info.index + 1 < info.list.length) info.index++;
			else {
				uni.showToast({
					title: '没有其他标签了',
					icon: 'none'
				});
				info.index = 0;
			}
		},
		//获取导航栏选中的 颜色
		getTabColor(tab) {
			if (this.selectTagList.find(item => item === tab)) {
				return this.getTagColor(this.TabCur);
			}
			return 'tag-border';
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
		// 选中/取消 标签
		changeTag(tab) {
			let idx = this.selectTagList.findIndex(item => item === tab);
			if (idx != -1) {
				this.selectTagList.splice(idx, 1);
			} else {
				this.selectTagList.push(tab);
			}
		},
		// 更新头像
		updateAvatar() {
			uni.chooseImage({
				success: res => {
					this.user.avatar = res.tempFilePaths[0];
				}
			});
		},
		save() {
			uni.showLoading();
			setTimeout(() => {
				uni.hideLoading();
				uni.showToast({
					title: '用户已保存信息',
					icon: 'none'
				});
			}, 500);
			console.log(this.user);
		},
		back() {
			uni.showModal({
				title: '哎呀',
				content: '信息还没保存，确定取消吗？',
				cancelText: '手滑手滑',
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style lang="stylus">
.card
	width 86%
	margin 40rpx auto 0
	border 1rpx solid #a7a7a7
	border-radius 15rpx
	color black
	padding 20rpx 20rpx 14rpx
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
	color #8b8b8b
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.input-weight
	width 380rpx
.input-weight.duan
	width 100rpx
.input-border
	height 1.4em
	line-height 1.4em
	color #8b8b8b
	font-size 24rpx
	padding 0 20rpx
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.cuIcon-triangledownfill
	font-size 34rpx
.textarea-border
	width 380rpx
	max-height 120rpx !important
	color #8b8b8b
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
.tag-border
	border 1rpx solid #a7a7a7
	border-radius 15rpx
	color #595959
.cu-btn
	padding 0 80rpx
	height 64rpx
</style>

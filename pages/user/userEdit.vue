<template>
	<view>
		<c-scroll>
			<!-- 基础资料 -->
			<view class="card">
				<view class="margin-bottom-xs">基础资料</view>
				<view class="padding-left text-sm">
					<view class="cu-avatar round xl margin-bottom" :style="{ backgroundImage: 'url(/static/image/default.jpeg)' }">
						<view class="cu-tag lg badge cuIcon-camerafill"></view>
					</view>
					<view class="title">
						<text class="left-text">昵称</text>
						<view class="margin-left flex">
							<input class="input-weight"  type="text" name="" id="">
						</view>
					</view>
					<view class="title">
						<text class="left-text">生日</text>
						<view class="margin-left title">
							<picker mode="date" :value="date" @change="dateChange" :start="startDate" :end="endDate">
								<view class="input-border input-weight">{{date}}<text class="cuIcon-triangledownfill fr"></text></view>
							</picker>
						</view>
					</view>
					<view class="title">
						<text class="left-text">常住地</text>
						<view class="margin-left">
							<input class="input-weight"  type="text" name="" id="">
						</view>
					</view>
					
					<view class="flex" style="margin-top: 6rpx;">
						<text class="left-text">个性签名</text>
						<textarea class="textarea-border" maxlength="30" v-model="introduce"  />
						<text class="totalNum">{{introduce.length}}/30</text>
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
							<input class="input-weight"  type="text" name="" id="">
						</view>
					</view>
					<view class="title">
						<text class="left-text">专业</text>
						<view class="margin-left">
							<input class="input-weight"  type="text" name="" id="">
						</view>
					</view>
					<view class="title">
						<text class="left-text">在校情况</text>
						<view class="margin-left title">
							<picker @change="gradeChange" :value="gradeIndex" :range="gradePicker">
								<view class="input-border input-weight">{{grade}}<text class="cuIcon-triangledownfill fr"></text></view>
							</picker>
						</view>
					</view>
				</view>
			</view>
			<!-- 个性展示 -->
			<view class="card">
				<view class="margin-bottom-xs">个性展示</view>
				<view class="text-sm">
					<view>
						<view class="card-item" >
							关键词
						</view>
						<view class="card-item" :class="index==TabCur?'cur':''" v-for="(item,index) in infoList" :key="index" @tap="tabSelect(index)" >
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="text-sm">
					<view class="flex flex-wrap">
						<view class="info-tag" ></view>
						
					</view>
				</view>
				<view class="text-sm">
					<view class="flex flex-wrap ">
						<view class="info-tag tag-border" v-for="(item, index) in infoList[TabCur].list" :key="index">{{item}}</view>
					</view>
				</view>
				<view>
					<view class="text-center text-sm text-gray margin-bottom-sm">
						换一批
						<text class="cuIcon-refresh margin-left-xs"></text>
					</view>
				</view>
				<view class="flex text-sm">
					<text class="title text-nowrap margin-right-xs margin-left" >已选</text>
					<view class="text-sm">
						<view class="flex flex-wrap ">
							<view class="info-tag bg-red ">工学类</view>
							<view class="info-tag bg-yellow">熬夜冠军</view>
							<view class="info-tag bg-red">吃鸡</view>
							<view class="info-tag bg-yellow">王者</view>
							<view class="info-tag bg-blue">腿特长</view>
							<view class="info-tag bg-blue">厨艺满分</view>
						</view>
					</view>
				</view>
				<view class="flex text-sm margin-tb">
					<text class="title text-nowrap padding-left-xs" >关于我</text>
					<textarea class="textarea-border-2" placeholder="向对你感兴趣的人介绍下自己吧~(￣▽￣)~*" />
					<!-- <text class="totalNum">{{introduce.length}}/30</text> -->
				</view>
				
			</view>
			<view class="flex  padding-top-xl margin-top justify-center">
				<button class="cu-btn bg-red round" @click="next()">
					保存
				</button>
			</view>
			<view class="flex margin-top justify-center">
				<button class="cu-btn bg-grey round" @click="next()">
					取消
				</button>
			</view>
		</c-scroll>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				introduce: '',
				isFemale: false,
				sexIndex: 0,
				sexPicker: ['男', '女'],
				sex: '',
				startDate: '1985-01-01',
				endDate: '2100-01-01',
				date: '请选择',
				gradeIndex: 0,
				gradePicker: ['已工作', '博士', '研三', '研二', '研一', '大四', '大三', '大二', '大一'],
				grade: '请选择',
				TabCur: 0,
				// selectTagList: ['吃鸡', '王者'],
				infoList: [
					{
						name: '专业',
						list: [
							'哲学类','经济类','法学类','教育类','文学类','历史类',
							'理学类','工学类','农学类','医学类','管理类','艺术类','军事类'
						],
						index: 0
					},
					{
						name: '爱好',
						list: [
							'哲学类','经济类','法学类','教育类','文学类','历史类',
							'理学类','工学类','农学类','医学类','管理类','艺术类','军事类'
						],
						index: 0
					},
					{
						name: '日常',
						list: [
							'哲学','经济学','法学','教育学','文学','历史学',
							'理学','工学','农学','医学','管理学','艺术学','军事学'
						],
						index: 0
					},
					{
						name: '经历',
						list: [
							'哲学类','经济类','法学类','教育类','文学类','历史类',
							'理学类','工学类','农学类','医学类','管理类','艺术类','军事类'
						],
						index: 0
					},
					{
						name: '其它',
						list: [
							'哲学类','经济类','法学类','教育类','文学类','历史类',
							'理学类','工学类','农学类','医学类','管理类','艺术类','军事类'
						],
						index: 0
					}		
					
				]
			}
		},	
		methods: {
			sexChange(e) {
				this.sexIndex = e.detail.value
				this.sex = this.sexPicker[e.detail.value]
			},
			dateChange(e) {
				this.date = e.detail.value
			},
			gradeChange(e) {
				this.gradeIndex = e.detail.value
				this.grade = this.gradePicker[e.detail.value]
			},
			tabSelect(index) {
				this.TabCur = index;
			}
		},
	}
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
		height: 50rpx;
		display: inline-block;
		line-height: 50rpx;
		margin: 0 18rpx;
		padding: 0 4rpx;
		color #333333
	.card-item:last-child 
		margin-right 0rpx
	.card-item.cur 
		border-bottom 4rpx solid #a7a7a7
.cuIcon-camerafill 
	background-color transparent!important
	color #8799a3
	font-size 38rpx !important
	
.left-text 
	width 100rpx
uni-input 
	padding 0 20rpx
	font-size: 24rpx;
	color #a7a7a7
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.input-weight 
	width 380rpx
.input-weight.duan 
	width 100rpx
.input-border 
	height: 1.4em;
	line-height: 1.4em;
	color #a7a7a7
	font-size: 24rpx;
	padding 0 20rpx
	border-radius 15rpx
	border 1rpx solid #a7a7a7
.cuIcon-triangledownfill 
	font-size 34rpx
.textarea-border 
	width 380rpx
	max-height 120rpx!important
	color  #a7a7a7
	font-size 24rpx
	margin 0 0 0 30rpx
	padding 0 20rpx
	border 1rpx solid #a7a7a7
	border-radius 15rpx
.textarea-border-2
	width 484rpx
	max-height 200rpx!important
	color  #a7a7a7
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

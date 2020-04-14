<template>
	<form class="form">
		<view class="cu-form-group">
			<view class="title">标题：</view>
			<input placeholder="发帖的标题(最多14个字)"  maxlength="14" name="title" v-model="title" style="text-align: right;"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">性别：</view>
			<picker @change="sexChange" :value="sexIndex" :range="sexPicker">
				<view class="picker">
					{{sex}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">学校：</view>
			<input placeholder="西安电子科技大学" v-model="school" style="text-align: right;"></input>
			<!--<picker @change="schoolChange" :value="schoolIndex" :range="schoolPicker">
				<view class="picker">
					{{school}}
				</view>
			</picker> -->
		</view>
		<view class="cu-form-group">
			<view class="title">年级:</view>
			<picker @change="gradeChange" :value="gradeIndex" :range="gradePicker">
				<view class="picker">
					{{grade}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">生日：</view>
			<picker mode="date" :value="date" @change="dateChange" :start="startDate" :end="endDate">
				<view class="picker">
					{{date}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">身高：</view>
			<input placeholder="165"  maxlength="14" name="height" v-model="height" style="text-align: right;"></input>
		</view>
	
		<view class="cu-form-group solid-bottom">
			<view class="title">关于你：</view>
			<textarea name="introduce" maxlength="240" auto-height v-model="introduce" placeholder="介绍下你自己, 收到的秋波的可能性更高哦~ (最少10个字)"></textarea>
		</view>
		<view class="flex  padding-top-xl margin-top justify-center">
			<button class="cu-btn bg-red round" @click="next()">
				下一步
			</button>
		</view>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				
				isLogin: false,
				isLoading: false, // 是否在上传图片
				loadProgress: 0, // 图片上传进度
				
				ownInfoPost: false, // 是否修改个人信息发布个人信息帖
				introduce: '',
				title: '',
				school: '',
				grade: '请选择',
				sex: '请选择',
				height: '',
				phone: '',
				sexIndex: 0,
				sexPicker: ['男', '女'],
				heightIndex: 0,
				heightPicker: ['请选择', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162',
					'163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178',
					'179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194',
					'195', '196', '197', '198', '199', '200', '200+'
				],
				gradeIndex: 0,
				gradePicker: ['已工作', '博士', '研三', '研二', '研一', '大四', '大三', '大二', '大一'],
				imgList: [],
				startDate:getDate('start'),
				endDate:getDate('end'),
				date: '请选择'
			}
		},
		methods: {
			heightChange(e) {
				this.heightIndex = e.detail.value
				this.height = this.heightPicker[e.detail.value]
			},
			
			gradeChange(e) {
				this.gradeIndex = e.detail.value
				this.grade = this.gradePicker[e.detail.value]
			},
			
			dateChange(e) {
				this.date = e.detail.value
			},
			
			sexChange(e) {
				this.sexIndex = e.detail.value
				this.sex = this.sexPicker[e.detail.value]
			},
			next() {
				this.$emit("next");
			}
		},
	}
</script>

<style lang="stylus">
.cu-form-group 
	width 90%
	margin 0 auto
textarea
	min-height 100rpx
	max-height 200rpx
	line-height 50rpx
.cu-btn 
	padding 0 100rpx
	height 80rpx
</style>


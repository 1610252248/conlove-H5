<template>
	<form class="form">
		<view class="cu-form-group">
			<view class="title">标题：</view>
			<input class="text-right" placeholder="发帖的标题(最多14个字)" v-model="data.title"  maxlength="14" ></input>
		</view>
		<view class="cu-form-group">
			<view class="title">性别：</view>
			<picker @change="sexChange" :range="sexPicker">
				<view class="picker">
					{{sex}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">学校：</view>
			<input class="text-right" placeholder="西安电子科技大学" v-model="data.school" ></input>
		</view>
		<view class="cu-form-group">		
			<view class="title">年级:</view>
			<picker @change="gradeChange" :range="gradePicker">
				<view class="picker">
					{{data.grade}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">生日：</view>
			<picker mode="date" :value="data.age" @change="ageChange" start="1970-09-01" end="2100-09-01">
				<view class="picker">
					{{data.age}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">身高：</view>
			<input style="text-align: right;" placeholder="165"  maxlength="14" name="height" v-model="data.height" ></input>
		</view>
	
		<view class="cu-form-group solid-bottom">
			<view class="title">关于你：</view>
			<textarea v-model="data.introduce" maxlength="60" auto-height  placeholder="介绍下你自己, 收到的秋波的可能性更高哦~ (最少10个字)"></textarea>
		</view>
		<view class="flex  padding-top-xl margin-top justify-center">
			<button class="cu-btn bg-red round" @click="next()">
				下一步
			</button>
		</view>
	</form>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		computed: mapState([
		  // 映射 this.homeData 为 store.state.homeData
		  'homeData'
		]),
		data() {
			return {
				data: {
					title: '',
					sex: 0,
					school: '',
					grade: '请选择',
					age: '请选择',
					height: null,
					introduce: '',
				},
				sex: '请选择',
				isLogin: false,
				isLoading: false, // 是否在上传图片
				loadProgress: 0, // 图片上传进度
				ownInfoPost: false, // 是否修改个人信息发布个人信息帖
				phone: '',
				sexPicker: ['男', '女'],
				gradeIndex: 0,
				gradePicker: ['已工作', '博士', '研三', '研二', '研一', '大四', '大三', '大二', '大一'],
			}
		},
		mounted() {
			this.data = this.homeData;
			this.sex = this.sexPicker[this.data.sex];
		},
		methods: {
			/* 数据绑定 */
			gradeChange(e) {
				this.data.grade = this.gradePicker[e.detail.value]
			},
			ageChange(e) {
				this.data.age = e.detail.value
			},
			sexChange(e) {
				this.data.sex = e.detail.value
				this.sex = this.sexPicker[e.detail.value]
			},
			
			// 下一步
			next() {
				// 验证
				let data = this.data;
				if (data.title === '') {
					this.toast('请填写帖子标题!')
				} else if (this.sex === '请选择') {
					this.toast('请选取性别!')
				} else if (data.school === '') {
					this.toast('请填写学校!')
				} else if (data.grade === '请选择') {
					this.toast('请选取年级!')
				} else if (data.age === '请选择') {
					this.toast('请选取生日!')
				} else if (data.height === null) {
					this.toast('请输入身高!')
				} else if (!(/^[0-9]+$/.test(data.height)) || data.height < 150 || data.height > 210) {
					this.toast('请输入正确身高')
				} else if (data.introduce.length < 10) {
					this.toast('请认真填写个人简介，最少10个字!无效帖子将有可能被管理员处理!')
				} else {
					this.$emit("next", this.data);
				}
			},
			
			toast(str) {
				uni.showToast({
					title: str, 
					icon:'none'
				})
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


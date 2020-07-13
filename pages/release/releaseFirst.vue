<template>
	<c-scroll >
		<u-form class="form" :model="form" ref="uForm" :errorType="['toast']" >
			<u-form-item label="标题" prop="title">
				<u-input inputAlign="right" v-model="form.title" placeholder="请输入发帖的标题(最多14个字)" maxlength="14" />
			</u-form-item>
			<u-form-item label="学校" prop="school"><u-input inputAlign="right"  v-model="form.school" placeholder="请输入学校"></u-input></u-form-item>
			<u-form-item label="性别" prop="sex">
				<u-input inputAlign="right" type="select"  v-model="form.sex" placeholder="请选择性别" @click="sexShow = true"></u-input>
			</u-form-item>
			<u-form-item label="年级" prop="grade">
				<u-input inputAlign="right" type="select"  v-model="form.grade" placeholder="请选择年级" @click="gradeShow = true"></u-input>
			</u-form-item>
			<u-form-item label="生日" prop="birthDate">
				<u-input inputAlign="right" type="select"  v-model="form.birthDate" placeholder="请选择生日" @click="dateShow = true"></u-input>
			</u-form-item>
			<u-form-item label="身高" prop="height">
				<u-input inputAlign="right" type="number" v-model="form.height" placeholder="请输入身高"></u-input>
			</u-form-item>
			<u-form-item label="关于你" labelWidth="120" prop="introduce">
				<u-input type="textarea"  placeholder="介绍下你自己, 收到的秋波的可能性更高哦~ (最少10个字)" v-model="form.introduce" />
			</u-form-item>
		</u-form>
		<u-select v-model="sexShow" :list="sexPicker" @confirm="sexChange"></u-select>
		<u-select v-model="gradeShow" :list="gradePicker" @confirm="gradeChange"></u-select>
		<u-picker v-model="dateShow" mode="time" @confirm="dataChange"></u-picker>
		
		<view class="flex padding-top-xl margin-top justify-center"><u-button class="btn" :ripple="true" @click="next">下一步</u-button></view>
	</c-scroll>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {{}} 
		},
	},
	data() {
		return {
			form: {},
			// 操作菜单控制显示
			sexShow: false,
			gradeShow: false,
			dateShow: false,
			// 选择列表
			sexPicker: [
				{value: '0',label: '男'},
				{value: '1',label: '女'}
			],
			gradePicker: [
				{value: '0',label: '已工作'},
				{value: '1',label: '博士'},
				{value: '2',label: '研三'},
				{value: '3',label: '研二'},
				{value: '4',label: '研一'},
				{value: '5',label: '大四'},
				{value: '6',label: '大三'},
				{value: '7',label: '大二'},
				{value: '8',label: '大二'}
			],
	
			// 表单验证规则
			rules: {
				title: [{ required: true, message: '请输入标题'}],
				sex: [{ required: true, message: '请选择性别'}],
				school: [{ required: true, message: '请输入学校'}],
				grade: [{ required: true, message: '请选择年级'}],
				birthDate: [{ required: true, message: '请选择生日'}],
				height: [
					{ required: true, message: '请输入身高'},
					{
						validator: (rule, value) => {
							return this.$u.test.digits(value) && value >= 120 && value <= 230
						},
						message: '请输入正确的身高'
					}
				],
				introduce: [
					{ required: true, message: '请输入关于你'},
					{ min:10, message: '关于你最少10个字'}
				],
			}
		}
	},
	
	mounted() {
		setTimeout(() => {
			//  把height 转一下字符串，不然会报错，不知道为什么
			this._props.data.height = this._props.data.height +''
			this.form = this._props.data;
		}, 100)
		
		this.$refs.uForm.setRules(this.rules);
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	methods: {
		/* 数据绑定 */
		gradeChange(e) {
			this.form.grade = e[0].label;
		},
		sexChange(e) {
			this.form.sex = e[0].label;
		},
		dataChange(e) {
			this.form.birthDate = e.year + '-' + e.month + '-' + e.day;
		},

		// 下一步
		next() {
			// 验证
			this.$refs.uForm.validate(valid => {
				if (valid) {
					this.$emit("next", this.form);
				} 
			});
			
		},
	
	},
}
</script>

<style lang="stylus">
.form
	width 84%
	margin 0 auto
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
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 1000px
	font-size 30upx
	padding 0 100rpx
</style>

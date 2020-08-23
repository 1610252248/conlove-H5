<template>
	<!-- 学校信息 -->
	<view>
		<c-card>
			<view slot="top"  @click="navToSchool">
				<text>学校信息</text>
				<block v-if="user.isIdentify">
					<image class="identify" src="/static/image/identify.png"></image>
					<text class="text-sm" style="color: #68dbdf;">已提交认证材料</text>
				</block>
				<text v-if="showRight && user.id == userDB.id" class="fr cuIcon-right text-gray"></text>
			</view>
			<view slot="content">
				<view>
					<text>学校</text>
					<text class="text-gray margin-left">{{ user.school }}</text>
				</view>
				<view>
					<text>专业</text>
					<text class="text-gray margin-left">{{ user.major }}</text>
				</view>
				<view>
					<text>年级</text>
					<text class="text-gray margin-left" v-if="user.grade && user.level">{{ user.grade + '级' + user.level}}</text>
				</view>
			</view>
		</c-card>
	</view>
	
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	props: {
		user: {
			type: Object,
			default: () => {{}}
		},
		showRight: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			//计算年级使用的映射
			gradeList: { 一: 1, 二: 2, 三: 3, 四: 4 },
		}
	},
	methods: {
		// 获取年级
		getGrade() {
			if (this.user.grade == null) return null;
			let grade = this.user.grade;
			if (grade === '已工作') return grade;
			let year = this.$utils.dateUtils.currentDate().split('-')[0] - this.gradeList[grade[1]];
			let str = year + '级' + (grade[0] === '研' ? '硕士' : '本科');
			return str;
		},
		// 学校信息跳转
		navToSchool() {
			if(this.user.id == this.userDB.id)
			this.$emit('nav-to-school')
		}
	},
}
</script>

<style lang="stylus">
text 
	height 40rpx
	line-height 40rpx
.identify
	width 30rpx
	height 30rpx
	position relative
	top 5rpx
	margin 0 6rpx 0 20rpx
</style>

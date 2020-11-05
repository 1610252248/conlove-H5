<template>
	<c-scroll midHeight >
		<!-- <view class="cu-form-group">
			<view class="title">在个人主页展示缘来贴</view>
			<switch class="red scale" @change="Switch" :class="isSwitch ? 'checked' : ''" :checked="isSwitch ? true : false"></switch>
		</view> -->
		<view class="b-top">
			
			<view class="vertical-space"/>
				
			<view class="cu-form-group" >
				<view class="title">邮箱</view>
				<u-input placeholderStyle="color:#939393" :placeholder="user.email" disabled input-align="right" />
			</view>
			<view class="cu-form-group" @click="navToPassword">
				<view class="title">修改密码</view>
				<text class="cuIcon-right text-gray" />
			</view>
			<!-- <view class="cu-form-group" @click="showApply = true">
				<view class="title">申请校园新锐</view>
				<text class="cuIcon-right text-gray" />
			</view>	 -->
			<!-- <view class="vertical-space"/>
				
			
			
			<view class="cu-form-group">
				<view class="title">黑名单</view>
				<text class="cuIcon-right text-gray" />
			</view> -->
			
			<view class="vertical-space"/>
			<view class="cu-form-group" @click="showLogout = true">
				<view class="title">退出登录</view>
				<text class="cuIcon-right text-gray"/>
			</view>
		</view>
		<u-toast ref="uToast" />
		
		
		<u-modal v-model="showApply" :content="content"></u-modal>
		<u-modal v-model="showLogout" show-cancel-button content="确认要退出吗？" @confirm="logout"></u-modal>
		
	</c-scroll>
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
			isSwitch: true,
			user: {},
			showApply: false,
			content: '111',
			showLogout: false,
		};
	},
	onLoad() {
		this.user = this.$u.deepClone(this.userDB);
	},
	methods: {
		...mapActions([
			'del' // 将 `this.del()` 映射为 `this.$store.dispatch('del')`
		]),
		Switch(e) {
			this.isSwitch = e.detail.value;
		},
		logout() {
			this.del();
			this.$refs.uToast.show({
				title: '退出登录成功',
				type: 'primary',
				url: '/pages/user/user',
				isTab: true
			})
		},
		navToPassword() {
			this.$u.route('/pages/user/sub/modify-password')
		},
		
		apply() {
			
		}
	}
};
</script>

<style lang="stylus">

.scale
	transform scale(0.7)
.b-top 
	background-color #F5F5F5
	height 100%
	width 100%
.vertical-space 
	height 40rpx
</style>

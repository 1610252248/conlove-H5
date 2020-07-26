<template>
	<c-scroll midHeight >
		<!-- <view class="cu-form-group">
			<view class="title">在个人主页展示缘来贴</view>
			<switch class="red scale" @change="Switch" :class="isSwitch ? 'checked' : ''" :checked="isSwitch ? true : false"></switch>
		</view> -->
		<view class="b-top">
			
			<view class="vertical-space"/>
				
			<view class="cu-form-group">
				<view class="title">原密码</view>
				<u-input  placeholder="请输入原密码" type="password" v-model="oldPass"  input-align="right" />
			</view>
			<view class="cu-form-group" >
				<view class="title">新密码</view>
				<u-input  placeholder="请输入新密码" type="password"  v-model="newPass"    input-align="right" />
			</view>
			<view class="margin-tb flex justify-between padding-lr" style="color: #99999e;">
				<view @click="$u.route('/pages/enter/forget')">忘记原密码？</view>
			</view>
			<view class="flex margin-top"><u-button class="btn" :ripple="true" @click="modify">修改</u-button></view>
		
		</view>
		<u-toast ref="uToast" />
		
	</c-scroll>
</template>

<script>
import { mapState} from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			oldPass: '',
			newPass: ''
		};
	},

	methods: {
		modify() {
			let oldPass = this.oldPass 
			let newPass = this.newPass
			if(oldPass == '') {
				this.$u.toast('原密码不能为空')
				return ;
			}
			if(newPass == '') {
				this.$u.toast('新密码不能为空')
				return ;
			}
			if(newPass.length < 6 || newPass.length > 12 ) {
				this.$u.toast('密码长度在6-12位')
				return ;
			}
			this.$http.get('/modify/oldPass',{oldPass, newPass}).then(res => {
				console.log(res);
				if(res.status == this.$http.SUCCESS) {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/user/user',
						isTab: true
					})
				} else {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'warning',
					})
				}
			})
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
.btn
	color #ffffff !important
	background-color #ff4a2d !important
	border-radius 20px
	font-size 30upx
	width 50%

</style>

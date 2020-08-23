<template>
	<view >
		<view class="content">
			<c-title @upload-avatar="uploadAvatar" :imageSrc="imageSrc">
				<block slot="content">
					<view>最后一步！</view>
					<view class="text-xl">构造你的初始形象吧</view>
				</block>
			</c-title>
			
			<!-- 表单 -->
			<u-form class="form" label-width="0"  :model="form" ref="uForm" :errorType="errorType">
				<u-form-item prop="nickName" :border-bottom="false">
					<u-input :custom-style="inputCustome" placeholder="请输入昵称" :clearable="false" v-model="form.nickName" type="text" />
				</u-form-item>
				<u-form-item prop="sex" :border-bottom="false">
					<u-input :custom-style="inputCustome" placeholder="请选择性别"  @click="showSex = true" disabled :clearable="false" v-model="form.sex" type="text" />
					<u-icon class="arrow-down-fill"  @click="showSex = true" name="arrow-down-fill" color="#A7A7A7" size="22" />
				</u-form-item>
				<u-form-item prop="shool" :border-bottom="false">
					<u-input :custom-style="inputCustome" placeholder="请选择学校" disabled @click="$refs.schoolPicker.show()" :clearable="false" v-model="form.school" type="text" />
					<u-icon class="arrow-down-fill" @click="$refs.schoolPicker.show()" name="arrow-down-fill" color="#A7A7A7" size="22" />
				</u-form-item>
				<view class="flex">
					<u-form-item prop="grade" :border-bottom="false">
						<view class="padding-right">
							<u-input :custom-style="inputCustome" placeholder="请选择入学时间" @click="showGrade=true" disabled :clearable="false" v-model="form.grade" type="text" />
						</view>
						<u-icon class="arrow-down-fill-left" @click="showGrade=true" name="arrow-down-fill" color="#A7A7A7" size="22" />
					</u-form-item>
					<view style="width: 50%;">
						<u-form-item prop="level" :border-bottom="false">
							<u-input :custom-style="inputCustome" placeholder="学位" disabled @click="showLevel=true" :clearable="false" v-model="form.level" type="text" />
							<u-icon class="arrow-down-fill" name="arrow-down-fill" @click="showLevel=true" color="#A7A7A7" size="22" />
						</u-form-item>
					</view>
				</view>
				<u-form-item prop="major" :border-bottom="false">
					<u-input :custom-style="inputCustome" placeholder="请输入专业"  :clearable="false" v-model="form.major" type="text" />
				</u-form-item>
			</u-form>
			
			<view class="text-center">
				<button @click="next" class="cu-btn round bg-red lg"> 开启缘来</button>
				<view class="margin-tb-xl"  style="color: #888888;">
					已有账号？
					<span @click="$u.route('/pages/enter/login')" class="navJump">点此登录</span>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-select v-model="showSex" :list="sexPicker" @confirm="setSex"></u-select>
		<u-select v-model="showLevel" :list="levelList" @confirm="setLevel"></u-select>
		<u-picker v-model="showGrade" mode="time"  :params="{ year: true }" @confirm="setGrage" ></u-picker>
		<schoolPicker themeColor="#097fff" ref="schoolPicker" @onConfirm="setScholl" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 默认头像显示
				imageSrc: '/static/image/register-second.png',
				// 输入框样式
				inputCustome: {
					'background': '#ffffff',
					'border': '1px solid #C0C0C0',
					'border-radius': '100upx',
					'padding': '14upx 40upx',
					'height': '76upx',
					'width': '100%',
					'font-size': '30upx'
				},
				showSex: false,
				schoolShow: false,
				showGrade: false,
				showLevel: false,
				sexPicker: [{ label: '男' }, { label: '女' }],
				levelList: [{ label: '学士' }, { label: '硕士' }, { label: '博士' }],
				// 表单数据
				form: {
					avatar: '/static/image/default-avatar.png',
					nickname: '',
					sex: '',
					school: '',
					grade: '',
					level: '',
					major: ''
				},
				
				errorType: ['toast'],
				// 表单验证规则
				rules: {
					nickName: [{ required: true, message: '请输入昵称' }],
					sex: [{ required: true, message: '请选择性别' }],
					school: [{ required: true, message: '请选择学校' }],
					grade: [{ required: true, message: '请选择年级' }],
					level: [{ required: true, message: '请选择学位' }],
					major: [{ required: true, message: '请输入专业' }]
				}
			};
		},
		// 设置表单规则
		mounted() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			setSex(e) {
				this.form.sex = e[0].label;
			},
			setLevel(e) {
				this.form.level = e[0].label
			},
			setGrage(e) {
				this.form.grade = e.year;
			},
			/**
			 * 确认学校选择
			 */
			setScholl(e) {
				const school = e.label.split('-')[2];
				if (school === '暂未收录') {
					return;
				} else {
					this.form.school = school;
				}
			},
			async uploadAvatar() {
				await this.$http.urlImgUpload('/fileUpload').then(res => {
					this.form.avatar = res[0];
					this.imageSrc = res[0];
				});
			},
			next() {
				this.$refs.uForm.validate(valid => {
					// 表单验证成功
					if (valid) {
						this.$emit('next', this.form)
					}
				});
			}
		},
	}
</script>

<style lang="stylus">
.content
	width 84%
	margin 0 auto
.form 
	margin-top 90rpx
.title-text view
	padding 12rpx 0
.arrow-down-fill 
	position absolute
	right 10%
.arrow-down-fill-left
	position absolute
	right 50%
.cu-btn, .lg
	margin-top 60rpx
	width 230rpx	
.navJump
	color #888888 
	font-weight 600
	padding-bottom 4rpx
	border-bottom 1px solid #BBBBBB
</style>

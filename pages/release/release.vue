<template>
	
	<c-scroll max-height>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>basics?'':'text-red'" v-for="(item,index) in basicsList" :key="index">
					<text :class="'cuIcon-' + item.cuIcon"></text> {{item.name}}
				</view>
			</view>
			
		</view>
		<release-first :data="data"  @next="next" v-show="basics == 0"/>
		<release-second :data="data.images" @back="back" @next-sec="nextSec" v-show="basics == 1"/>
		<!-- <release-third  v-show="basics == 2"/> -->
		<u-toast ref="uToast" />
	</c-scroll>
</template>

<script>
import releaseFirst from '@/pages/release/releaseFirst.vue'
import releaseSecond from '@/pages/release/releaseSecond.vue'
import { mapGetters } from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapGetters(['isLogin'])
	},
	components: {
		releaseFirst, releaseSecond
	},
	data() {
		return {
			basicsList: [
				{cuIcon: 'usefullfill',	name: '填写信息'},
				{cuIcon: 'radioboxfill',name: '上传图片'}, 
				// {cuIcon: 'roundcheckfill',name: '完成'}, 
			],
			basics: 0,
			data: {
				title: '',
				sex: '',
				school: '',
				grade: '',
				birthDate: '',
				height: '',
				introduce: '',
				images: []
			},
			id: -1, // 表明不是修改页面过来的
		}
	},
	onBackPress() {
		if(this.id == -1) {
			uni.switchTab({
				url: '/pages/home/home'
			})
			return true;
		} 
	},
	onLoad({id}) {
		if(id != null) {
			this.id = id;
			this.getSticker(id);
		}
		if(!this.isLogin) {
			this.$http.get('/verifyLogin')
		}
			
		
	},
	methods: {
		getSticker(id) {
			this.$http.get('/getModify/sticker/', {id}).then(res => {
				this.data = res.data;
			})
		},
		next(firstData) {
			this.basics++;
			this.data = firstData;
		},
		nextSec(images) {
			// 修改
			if(this.id != -1) {
				this.$http.post('/updateSticker', {sticker: this.data, images}).then(res => {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						back: true
					})
					this.$eventBus.$emit('update-sticker');
				})
			} else {
				this.data.images = images
				this.$http.post('/addSticker', this.data).then(res => {
					this.$refs.uToast.show({
						title: res.msg,
						type: 'success',
						url: '/pages/home/home',
						isTab: true
					})
					this.$eventBus.$emit('add-sticker')
				})
			}
			
		},
		back() {
			this.basics--;
		}
	},
}
</script>

<style lang="stylus">

</style>

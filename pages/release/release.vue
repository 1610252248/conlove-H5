<template>
	
	<c-scroll max-height>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>basics?'':'text-red'" v-for="(item,index) in basicsList" :key="index">
					<text :class="'cuIcon-' + item.cuIcon"></text> {{item.name}}
				</view>
			</view>
			
		</view>
		<release-first @next="next" v-show="basics == 0"/>
		<release-second @back="back" @next-sec="nextSec" v-show="basics == 1"/>
		<!-- <release-third  v-show="basics == 2"/> -->
		
		
	</c-scroll>
</template>

<script>
import { mapMutations } from 'vuex'
import releaseFirst from '@/pages/release/releaseFirst.vue'
import releaseSecond from '@/pages/release/releaseSecond.vue'
export default {
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
				userDto: {
					avatarUrl: '/static/image/default-2.jpeg',
					nickname: 'QAQ'
				},
			}
		}
	},
	
	methods: {
		...mapMutations({
			addNewHome: 'addNewHome'
		}),
		next(firstData) {
			this.basics++;
			this.data = Object.assign(this.data, firstData);
		},
		nextSec(imgList) {
			this.data.images = imgList
			this.data.id = Math.random() * 1000 + 1000;
			this.addNewHome(this.data)
			uni.switchTab({
				url: '/pages/home/home'
			})
		},
		back() {
			this.basics--;
		}
	},
}
</script>

<style lang="stylus">

</style>

<template>
	<c-scroll>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>basics?'':'text-red'" v-for="(item,index) in basicsList" :key="index">
					<text :class="'cuIcon-' + item.cuIcon"></text> {{item.name}}
				</view>
			</view>
			
		</view>
		<release-first @next="next" v-show="basics == 0"/>
		<release-second @back="back" v-show="basics == 1"/>
		<release-third  v-show="basics == 2"/>
		
		
	</c-scroll>
</template>

<script>
import releaseFirst from '@/pages/release/releaseFirst.vue'
import releaseSecond from '@/pages/release/releaseSecond.vue'
import releaseThird from '@/pages/release/releaseThird.vue'
export default {
	components: {
		releaseFirst, releaseSecond, releaseThird
	},
	data() {
		return {
			basicsList: [{
				cuIcon: 'usefullfill',
				name: '填写信息'
			}, {
				cuIcon: 'radioboxfill',
				name: '上传图片'
			}, {
				cuIcon: 'roundcheckfill',
				name: '完成'
			}, ],
			basics: 0,
		}
	},
	methods: {
		next() {
			this.basics++;
		},
		back() {
			this.basics--;
		}
	},
}
</script>

<style lang="stylus">

</style>

<template>
	<view v-if="Object.keys(data).length">
		<view class="box-content">
			<view class="flex justify-start align-center">
				<view @click.stop="navToOtherUser(data.user.id)" class="cu-avatar round" :style="[{ backgroundImage: 'url(' + data.user.avatar + ')' }]">
					<!-- <view class="cu-tag badge" :class="data.user.sex == '女' ? 'cuIcon-female bg-pink' : 'cuIcon-male bg-blue'"></view> -->
				</view>
				<view @click.stop="navToOtherUser(data.user.id)" class="margin-left-sm">
					<view class="box-userName text-hidden">{{ data.user.nickName }}</view>
					<view class="text-xs text-gray">{{ $utils.dateUtils.format(data.createTime) }}</view>
				</view>
				<view v-show="dotsShow" @click.stop="more" class="dots">
					<!--是否隐藏动态 -->
					<text v-if="!data.isPublic" class="margin-right-sm text-gray cuIcon-attentionforbid" />
					<text class="cuIcon-more" />
				</view>
			</view>
		</view>
		<view class="bg-white padding text-black padding-bottom-xs">
			<!-- <text class="text-wrap">{{ data.content }}</text> -->
			<view
				class="c-content" :class="[elId]" :style="{
					height: isLongContent && !showMore ? showHeight + 'rpx' : 'auto'
				}">
				<!-- <text class="text-wrap">{{data.content}}</text> -->
				<u-parse class="text-wrap" :html="getHtml(data.content)"  :tag-style="style" @linkpress="linkClick"></u-parse>
			</view>
			<view v-if="isLongContent" class="see-more">查看全文</view>
			
			<view class="grid grid-square margin-top-xs" :class="data.images.length == 1 ? 'col-1' : 'col-3'">
				<view class="bg-img" v-for="item in data.images" :key="item.id" :style="{ backgroundImage: 'url(' + item.image + ')' }" @click.stop="viewImage(item.image)" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => ({})
		},
		dotsShow: {
			type: Boolean,
			default: false
		},
		showMore: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isLongContent: false, // 是否需要隐藏一部分内容
			showHeight: 280,
			elId: this.$u.guid(), // 生成唯一class
			content:'#双十一# #双十二# 嘿嘿和和',
			style: {
				a:  'color: #2979ff;text-decoration:none;',
			}
			
		};
	},
	mounted() {
		this.$nextTick(function() {
			this.init();
		});
	},
	methods: {
		getHtml(str) {
			if(str.length == 0) return str;
			str = str .replace(/(\r\n|\n|\r)/gm, "<br/>"); 
			let arr = str.split('#')
			let len = arr.length, html = arr[0];
			for(let i = 1; i < len - 1; i++) {
				if(arr[i].length > 0) {
					html += `<a href="` + arr[i] + `">#` + arr[i] + `#</a>`
					if(i + 1 < len - 1) html += arr[i + 1]
					i++;
				} else {
					html += '#'
				}
			}
			if(len > 1) html += arr[len-1];
			return html
		},
		linkClick(e) {
			event.stopPropagation()
			e.ignore();
		},
		init() {
			this.$uGetRect('.' + this.elId).then(res => {
				// 判断高度，如果真实内容高度大于占位高度，则显示收起与展开的控制按钮
				if (res.height > uni.upx2px(this.showHeight)) {
					this.isLongContent = true;
				}
			})
		},
		viewImage(url) {
			let images = [];
			for (let obj of this.data.images) images.push(obj.image);

			uni.previewImage({ urls: images, current: url });
		},
		more() {
			this.$emit('more');
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			this.$u.route('/pages/user/otherUser', { id });
		}
	}
};
</script>

<style lang="stylus">
.box-userName
	font-size $uni-font-size-base
	color #333333;
	max-width 300rpx
	font-weight bold
.box-content
	width 90%
	margin 0 auto
.image-sm
	width 40rpx
	height 40rpx
.post-like
	height 40rpx
	line-height 40rpx
.post-comment
	width 92%
	margin-left auto
	margin-right auto
.dots
	margin-left auto
	margin-right 0
	padding-left 30rpx
	padding-right 10rpx
.c-content
	overflow hidden
.see-more 
	padding 10rpx 0
	color #2979ff
</style>

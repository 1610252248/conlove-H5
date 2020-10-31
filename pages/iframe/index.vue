<template>
	<view class="container bg-white" id="jumpid">
		<view class="imageSrc" v-if="showCode">
			<view >
				<u-image style="margin: 0 auto;" width="260px" height="260px" src="/static/conlove.online.png"></u-image>
			</view>
			<view style="font-size: 20px; text-align: center;">
				请使用手机浏览器，扫描上方二维码预览 (:
			</view>
		</view>
		<div id="showMobilePreview">
			<!-- <div class="mobile_preview_header"><i class="mobile_preview_header_icon"></i></div> -->
			<view >
				<view class="mobile_preview_frame">
					<iframe v-if="!ismobile" :src="url" id="YuFrameMobilePreview" name="YuFrameMobilePreview" frameborder="0" :style="'width:' + width"></iframe>
				</view>
			</view>
			<!-- <div class="mobile_preview_footer"><i class="mobile_preview_footer_icon"></i></div> -->
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			url: '',
			width: '',
			ismobile: true,
			showCode: false,
			width_: 0
		};
	},
	onLoad(opt) {
		this.ismobile = this.isMobile();
		let url = 'pages/home/index'; //你的首页
		console.log(this.ismobile);
		if (this.ismobile) {
			uni.redirectTo({
				url: `/${url}`
			});
		} else {
			this.url = `${location.href}${url}`;
		}
		
	},
	onShow() {},
	mounted() {
		this.$nextTick(function() {
			this.init();
		});
	},
	methods: {
		init() {
			uni.getSystemInfo({
				success: res => {
					if(res.windowWidth > 400) this.showCode = true; 
					this.width_ = res.windowWidth;
				}
			})
		},
		isMobile() {
			let flag = navigator.userAgent.match(
				/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			);
			
			return flag ? true : false;
		}
	}
};
</script>

<style lang="scss">
.container {
	height: 100%;
	iframe {
		display: block;
		width: 375px;
		height: 100%;
		opacity: 0;
		animation: fadeShow 0.3s ease-in forwards 0.3s;
	}
}
@keyframes fadeShow {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.imageSrc {
	z-index: 9999;
	position: absolute;
	left: 20%;
	top: 25%;
}
#showMobilePreview {
	z-index: 9999;
	width: 374px;
	height: 98vh;
	position: absolute;
	right: 20rpx;
	border: 6px solid #eeeff2;
	// left: 80%;
	// top: 50%;
	// transform: translate(-50%, -50%);
	text-align: center;
}

.mobile_preview_header {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	height: 40px;
	width: 387px;
	background: #eeeff2;
	text-align: center;
	line-height: 40px;
	border-top-right-radius: 50px;
	border-top-left-radius: 50px;
}

.mobile_preview_header_icon {
	display: inline-block;
	width: 65px;
	height: 10px;
	background: #c8c9cc;
	border-radius: 9px;
	vertical-align: middle;
	margin-top: 18px;
}

.mobile_preview_frame {
	min-height: 294px;
	height: 98vh;
	// max-height: calc(100vh - 100px);
	// display: block;
	display:block;
}

#YuFrameMobilePreview {
	border: none;
	width: 375px;
	height: 100%;
}

.mobile_preview_footer {
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	height: 52px;
	width: 387px;
	background: #eeeff2;
	text-align: center;
	line-height: 45px;
	border-bottom-right-radius: 50px;
	border-bottom-left-radius: 50px;
}

.mobile_preview_footer_icon {
	display: inline-block;
	width: 43px;
	height: 43px;
	background: #c8c9cc;
	border-radius: 50%;
	vertical-align: middle;
}
</style>

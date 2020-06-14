<template>
	<view>
		<view class="content" @touchstart="hideDrawer">
			<scroll-view
				class="msg-list"
				scroll-y="true"
				:scroll-with-animation="scrollAnimation"
				:scroll-top="scrollTop"
				:scroll-into-view="scrollToView"
				@scrolltoupper="loadHistory"
				upper-threshold="50"
			>
				<!-- 加载历史数据waitingUI -->
				<view class="loading">
					<view class="spinner">
						<view class="rect1"></view>
						<view class="rect2"></view>
						<view class="rect3"></view>
						<view class="rect4"></view>
						<view class="rect5"></view>
					</view>
				</view>
				<view class="row" v-for="(row, index) in msgList" :key="index" :id="'msg' + row.msg.id">
					<!-- 系统消息 -->
					<block v-if="row.type == 'system'">
						<view class="system">
							<!-- 文字消息 -->
							<view v-if="row.msg.type == 'text'" class="text">{{ row.msg.content.text }}</view>
						</view>
					</block>
					<!-- 用户消息 -->
					<block v-if="row.type == 'user'">
						<!-- 自己发出的消息 -->
						<view class="my" v-if="row.msg.userinfo.uid == myuid">
							<!-- 左-消息 -->
							<view class="left">
								<!-- 文字消息 -->
								<view v-if="row.msg.type == 'text'" class="bubble"><rich-text :nodes="row.msg.content.text"></rich-text></view>
								<!-- 图片消息 -->
								<view v-if="row.msg.type == 'img'" class="bubble img" @tap="showPic(row.msg)">
									<image :src="row.msg.content.url" :style="{ width: row.msg.content.w + 'px', height: row.msg.content.h + 'px' }"></image>
								</view>
							</view>
							<!-- 右-头像 -->
							<view class="right"><image :src="row.msg.userinfo.face"></image></view>
						</view>
						<!-- 别人发出的消息 -->
						<view class="other" v-if="row.msg.userinfo.uid != myuid">
							<!-- 左-头像 -->
							<view class="left"><image :src="row.msg.userinfo.face"></image></view>
							<!-- 右-用户名称-时间-消息 -->
							<view class="right">
								<view class="username">
									<view class="name">{{ row.msg.userinfo.username }}</view>
									<view class="time">{{ row.msg.time }}</view>
								</view>
								<!-- 文字消息 -->
								<view v-if="row.msg.type == 'text'" class="bubble"><rich-text :nodes="row.msg.content.text"></rich-text></view>
								<!-- 图片消息 -->
								<view v-if="row.msg.type == 'img'" class="bubble img" @tap="showPic(row.msg)">
									<image :src="row.msg.content.url" :style="{ width: row.msg.content.w + 'px', height: row.msg.content.h + 'px' }"></image>
								</view>
							</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<!-- 抽屉栏 -->
		<view class="popup-layer" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<!-- 表情 -->
			<swiper class="emoji-swiper" :class="{ hidden: hideEmoji }" indicator-dots="true" duration="150">
				<swiper-item v-for="(page, pid) in emojiList" :key="pid">
					<view v-for="(em, eid) in page" :key="eid" @tap="addEmoji(em)"><image mode="widthFix" :src="'/static/img/emoji/' + em.url"></image></view>
				</swiper-item>
			</swiper>
			<!-- 更多功能 相册-拍照 -->
			<view class="more-layer" :class="{ hidden: hideMore }">
				<view class="list">
					<view class="box" @tap="chooseImage"><view class="icon tupian2"></view></view>
					<view class="box" @tap="camera"><view class="icon paizhao"></view></view>
				</view>
			</view>
		</view>
		<!-- 底部输入栏 -->
		<view class="input-box" :class="popupLayerClass" @touchmove.stop.prevent="discard">
			<view class="more" @tap="showMore"><view class="icon add"></view></view>
			<view class="textbox">
				<view class="text-mode">
					<view class="box"><textarea auto-height="true" v-model="textMsg" @focus="textareaFocus" /></view>
					<view class="em" @tap="chooseEmoji"><view class="icon biaoqing"></view></view>
				</view>
			</view>
			<view class="send" @tap="sendText"><view class="btn">发送</view></view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			//文字消息
			textMsg: '',
			//消息列表
			isHistoryLoading: false,
			scrollAnimation: false,
			scrollTop: 0,
			scrollToView: '',
			msgList: [],
			msgImgList: [],
			myuid: 0,

			// 抽屉参数
			popupLayerClass: '',
			// more参数
			hideMore: true,
			//表情定义
			hideEmoji: true,
			emojiList: [
				[
					{ url: '100.gif', alt: '[微笑]' },
					{ url: '101.gif', alt: '[伤心]' },
					{ url: '102.gif', alt: '[美女]' },
					{ url: '103.gif', alt: '[发呆]' },
					{ url: '104.gif', alt: '[墨镜]' },
					{ url: '105.gif', alt: '[哭]' },
					{ url: '106.gif', alt: '[羞]' },
					{ url: '107.gif', alt: '[哑]' },
					{ url: '108.gif', alt: '[睡]' },
					{ url: '109.gif', alt: '[哭]' },
					{ url: '110.gif', alt: '[囧]' },
					{ url: '111.gif', alt: '[怒]' },
					{ url: '112.gif', alt: '[调皮]' },
					{ url: '113.gif', alt: '[笑]' },
					{ url: '114.gif', alt: '[惊讶]' },
					{ url: '115.gif', alt: '[难过]' },
					{ url: '116.gif', alt: '[酷]' },
					{ url: '117.gif', alt: '[汗]' },
					{ url: '118.gif', alt: '[抓狂]' },
					{ url: '119.gif', alt: '[吐]' },
					{ url: '120.gif', alt: '[笑]' },
					{ url: '121.gif', alt: '[快乐]' },
					{ url: '122.gif', alt: '[奇]' },
					{ url: '123.gif', alt: '[傲]' }
				],
				[
					{ url: '124.gif', alt: '[饿]' },
					{ url: '125.gif', alt: '[累]' },
					{ url: '126.gif', alt: '[吓]' },
					{ url: '127.gif', alt: '[汗]' },
					{ url: '128.gif', alt: '[高兴]' },
					{ url: '129.gif', alt: '[闲]' },
					{ url: '130.gif', alt: '[努力]' },
					{ url: '131.gif', alt: '[骂]' },
					{ url: '132.gif', alt: '[疑问]' },
					{ url: '133.gif', alt: '[秘密]' },
					{ url: '134.gif', alt: '[乱]' },
					{ url: '135.gif', alt: '[疯]' },
					{ url: '136.gif', alt: '[哀]' },
					{ url: '137.gif', alt: '[鬼]' },
					{ url: '138.gif', alt: '[打击]' },
					{ url: '139.gif', alt: '[bye]' },
					{ url: '140.gif', alt: '[汗]' },
					{ url: '141.gif', alt: '[抠]' },
					{ url: '142.gif', alt: '[鼓掌]' },
					{ url: '143.gif', alt: '[糟糕]' },
					{ url: '144.gif', alt: '[恶搞]' },
					{ url: '145.gif', alt: '[什么]' },
					{ url: '146.gif', alt: '[什么]' },
					{ url: '147.gif', alt: '[累]' }
				],
				[
					{ url: '148.gif', alt: '[看]' },
					{ url: '149.gif', alt: '[难过]' },
					{ url: '150.gif', alt: '[难过]' },
					{ url: '151.gif', alt: '[坏]' },
					{ url: '152.gif', alt: '[亲]' },
					{ url: '153.gif', alt: '[吓]' },
					{ url: '154.gif', alt: '[可怜]' },
					{ url: '155.gif', alt: '[刀]' },
					{ url: '156.gif', alt: '[水果]' },
					{ url: '157.gif', alt: '[酒]' },
					{ url: '158.gif', alt: '[篮球]' },
					{ url: '159.gif', alt: '[乒乓]' },
					{ url: '160.gif', alt: '[咖啡]' },
					{ url: '161.gif', alt: '[美食]' },
					{ url: '162.gif', alt: '[动物]' },
					{ url: '163.gif', alt: '[鲜花]' },
					{ url: '164.gif', alt: '[枯]' },
					{ url: '165.gif', alt: '[唇]' },
					{ url: '166.gif', alt: '[爱]' },
					{ url: '167.gif', alt: '[分手]' },
					{ url: '168.gif', alt: '[生日]' },
					{ url: '169.gif', alt: '[电]' },
					{ url: '170.gif', alt: '[炸弹]' },
					{ url: '171.gif', alt: '[刀子]' }
				],
				[
					{ url: '172.gif', alt: '[足球]' },
					{ url: '173.gif', alt: '[瓢虫]' },
					{ url: '174.gif', alt: '[翔]' },
					{ url: '175.gif', alt: '[月亮]' },
					{ url: '176.gif', alt: '[太阳]' },
					{ url: '177.gif', alt: '[礼物]' },
					{ url: '178.gif', alt: '[抱抱]' },
					{ url: '179.gif', alt: '[拇指]' },
					{ url: '180.gif', alt: '[贬低]' },
					{ url: '181.gif', alt: '[握手]' },
					{ url: '182.gif', alt: '[剪刀手]' },
					{ url: '183.gif', alt: '[抱拳]' },
					{ url: '184.gif', alt: '[勾引]' },
					{ url: '185.gif', alt: '[拳头]' },
					{ url: '186.gif', alt: '[小拇指]' },
					{ url: '187.gif', alt: '[拇指八]' },
					{ url: '188.gif', alt: '[食指]' },
					{ url: '189.gif', alt: '[ok]' },
					{ url: '190.gif', alt: '[情侣]' },
					{ url: '191.gif', alt: '[爱心]' },
					{ url: '192.gif', alt: '[蹦哒]' },
					{ url: '193.gif', alt: '[颤抖]' },
					{ url: '194.gif', alt: '[怄气]' },
					{ url: '195.gif', alt: '[跳舞]' }
				],
				[
					{ url: '196.gif', alt: '[发呆]' },
					{ url: '197.gif', alt: '[背着]' },
					{ url: '198.gif', alt: '[伸手]' },
					{ url: '199.gif', alt: '[耍帅]' },
					{ url: '200.png', alt: '[微笑]' },
					{ url: '201.png', alt: '[生病]' },
					{ url: '202.png', alt: '[哭泣]' },
					{ url: '203.png', alt: '[吐舌]' },
					{ url: '204.png', alt: '[迷糊]' },
					{ url: '205.png', alt: '[瞪眼]' },
					{ url: '206.png', alt: '[恐怖]' },
					{ url: '207.png', alt: '[忧愁]' },
					{ url: '208.png', alt: '[眨眉]' },
					{ url: '209.png', alt: '[闭眼]' },
					{ url: '210.png', alt: '[鄙视]' },
					{ url: '211.png', alt: '[阴暗]' },
					{ url: '212.png', alt: '[小鬼]' },
					{ url: '213.png', alt: '[礼物]' },
					{ url: '214.png', alt: '[拜佛]' },
					{ url: '215.png', alt: '[力量]' },
					{ url: '216.png', alt: '[金钱]' },
					{ url: '217.png', alt: '[蛋糕]' },
					{ url: '218.png', alt: '[彩带]' },
					{ url: '219.png', alt: '[礼物]' }
				]
			],
		};
	},
	onLoad(option) {
		this.getMsgList();
	},
	onShow() {
		this.scrollTop = 9999999;
	},
	methods: {
		// 接受消息(筛选处理)
		screenMsg(msg) {
			//从长连接处转发给这个方法，进行筛选处理
			if (msg.type == 'system') {
				// 系统消息
				switch (msg.msg.type) {
					case 'text':
						this.addSystemTextMsg(msg);
						break;
				}
			} else if (msg.type == 'user') {
				// 用户消息
				switch (msg.msg.type) {
					case 'text':
						this.addTextMsg(msg);
						break;
					case 'img':
						this.addImgMsg(msg);
						break;
				}
				console.log('用户消息');
				//非自己的消息震动
				if (msg.msg.userinfo.uid != this.myuid) {
					console.log('振动');
					uni.vibrateLong();
				}
			}
			this.$nextTick(function() {
				// 滚动到底
				this.scrollToView = 'msg' + msg.msg.id;
			});
		},

		//触发滑动到顶部(加载历史信息记录)
		loadHistory(e) {
			if (this.isHistoryLoading) {
				return;
			}
			this.isHistoryLoading = true; //参数作为进入请求标识，防止重复请求
			this.scrollAnimation = false; //关闭滑动动画
			let Viewid = this.msgList[0].msg.id; //记住第一个信息ID
			//本地模拟请求历史记录效果
			setTimeout(() => {
				// 消息列表
				let list = [
					{
						type: 'user',
						msg: {
							id: 2,
							type: 'text',
							time: '12:57',
							userinfo: { uid: 1, username: '缘来小助手', face: '/static/img/im/face/face_2.jpg' },
							content: {
								text:
									'很多人可能觉得这个问题显得有些奇怪。但无论男女都有特别偏好甜食的人，而一般的刻板印象中会觉得女生都会很喜爱甜食，总觉得在各种节日送盒巧克力是一张绝对的安全牌，殊不知对方因不喜欢甜食而在收到那瞬间笑的有些僵硬。所以在初次的相亲约会时，这个问题不仅能够开启可聊的话题，同时也还能更加了解对方喜欢什么不喜欢什么。'
							}
						}
					},
					{
						type: 'user',
						msg: {
							id: 1,
							type: 'text',
							time: '12:56',
							userinfo: { uid: 0, username: '大帅哥gg', face: '/static/img/face.jpg' },
							content: { text: '你喜欢吃甜食吗？' }
						}
					}
				];
				// 获取消息中的图片,并处理显示尺寸
				for (let i = 0; i < list.length; i++) {
					if (list[i].type == 'user' && list[i].msg.type == 'img') {
						list[i].msg.content = this.setPicSize(list[i].msg.content);
						this.msgImgList.unshift(list[i].msg.content.url);
					}
					list[i].msg.id = Math.floor(Math.random() * 1000 + 1);
					this.msgList.unshift(list[i]);
				}

				//这段代码很重要，不然每次加载历史数据都会跳到顶部
				this.$nextTick(function() {
					this.scrollToView = 'msg' + Viewid; //跳转上次的第一行信息位置
					this.$nextTick(function() {
						this.scrollAnimation = true; //恢复滚动动画
					});
				});
				this.isHistoryLoading = false;
			}, 1000);
		},
		// 加载初始页面消息
		getMsgList() {
			// 消息列表
			let list = [
				{ type: 'system', msg: { id: 0, type: 'text', content: { text: '欢迎进入~缘来是你聊天室~' } } },
				{
					type: 'user',
					msg: {
						id: 1,
						type: 'text',
						time: '12:56',
						userinfo: { uid: 0, username: '大黑哥', face: '/static/img/face.jpg' },
						content: { text: '你今天过得怎么样啊？最近都在忙些什么呢？' }
					}
				},
				{
					type: 'user',
					msg: {
						id: 2,
						type: 'text',
						time: '12:57',
						userinfo: { uid: 1, username: '缘来小助手', face: '/static/img/im/face/face_2.jpg' },
						content: { text: '今天挺好的，建了一堆对象~~ 最近忙着找对象呢！' }
					}
				},
				{
					type: 'user',
					msg: {
						id: 5,
						type: 'img',
						time: '13:05',
						userinfo: { uid: 0, username: '大黑哥', face: '/static/img/face.jpg' },
						content: { url: '/static/img/p10.jpg', w: 200, h: 200 }
					}
				},
				{
					type: 'user',
					msg: {
						id: 6,
						type: 'img',
						time: '12:59',
						userinfo: { uid: 1, username: '缘来小助手', face: '/static/img/im/face/face_2.jpg' },
						content: { url: '/static/img/q.jpg', w: 1920, h: 1080 }
					}
				},
				{ type: 'system', msg: { id: 7, type: 'text', content: { text: '欢迎进入~缘来是你聊天室~' } } }
			];
			// 获取消息中的图片,并处理显示尺寸
			for (let i = 0; i < list.length; i++) {
				if (list[i].type == 'user' && list[i].msg.type == 'img') {
					list[i].msg.content = this.setPicSize(list[i].msg.content);
					this.msgImgList.push(list[i].msg.content.url);
				}
			}
			this.msgList = list;
			// 滚动到底部
			this.$nextTick(function() {
				//进入页面滚动到底部
				this.scrollTop = 9999;
				this.$nextTick(function() {
					this.scrollAnimation = true;
				});
			});
		},
		//处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
		setPicSize(content) {
			// 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
			let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
			let maxH = uni.upx2px(350); //350是定义消息图片最大高度
			if (content.w > maxW || content.h > maxH) {
				let scale = content.w / content.h;
				content.w = scale > 1 ? maxW : maxH * scale;
				content.h = scale > 1 ? maxW / scale : maxH;
			}
			return content;
		},

		//更多功能(点击+弹出)
		showMore() {
			this.hideEmoji = true;
			if (this.hideMore) {
				this.hideMore = false;
				this.openDrawer();
			} else {
				this.hideDrawer();
			}
		},
		// 打开抽屉
		openDrawer() {
			this.popupLayerClass = 'showLayer';
		},
		// 隐藏抽屉
		hideDrawer() {
			this.popupLayerClass = '';
			setTimeout(() => {
				this.hideMore = true;
				this.hideEmoji = true;
			}, 150);
		},
		// 选择图片发送
		chooseImage() {
			this.getImage('album');
		},
		//拍照发送
		camera() {
			this.getImage('camera');
		},

		//选照片 or 拍照
		getImage(type) {
			this.hideDrawer();
			uni.chooseImage({
				sourceType: [type],
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				success: res => {
					for (let i = 0; i < res.tempFilePaths.length; i++) {
						uni.getImageInfo({
							src: res.tempFilePaths[i],
							success: image => {
								console.log(image.width);
								console.log(image.height);
								let msg = { url: res.tempFilePaths[i], w: image.width, h: image.height };
								this.sendMsg(msg, 'img');
							}
						});
					}
				}
			});
		},
		// 选择表情
		chooseEmoji() {
			this.hideMore = true;
			if (this.hideEmoji) {
				this.hideEmoji = false;
				this.openDrawer();
			} else {
				this.hideDrawer();
			}
		},
		//添加表情
		addEmoji(em) {
			this.textMsg += em.alt;
		},

		//获取焦点，如果不是选表情ing,则关闭抽屉
		textareaFocus() {
			if (this.popupLayerClass == 'showLayer' && this.hideMore == false) {
				this.hideDrawer();
			}
		},
		// 发送文字消息
		sendText() {
			this.hideDrawer(); //隐藏抽屉
			if (!this.textMsg) {
				return;
			}
			let content = this.replaceEmoji(this.textMsg);
			let msg = { text: content };
			this.sendMsg(msg, 'text');
			this.textMsg = ''; //清空输入框
		},
		//替换表情符号为图片
		replaceEmoji(str) {
			let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
				console.log('item: ' + item);
				let curPath = '/static/img/emoji/';
				for (let i = 0; i < this.emojiList.length; i++) {
					let row = this.emojiList[i];
					let rowItem = row.find(rItem => rItem.alt == item);
					if(rowItem) {
						let imgstr = '<img src="' + curPath + rowItem.url + '">';
						console.log(imgstr);
						return imgstr;
					}
				}
			});
			return '<div style="display: flex;align-items: center;word-wrap:break-word;">' + replacedStr + '</div>';
		},

		// 发送消息
		sendMsg(content, type) {
			//实际应用中，此处应该提交长连接，模板仅做本地处理。
			var nowDate = new Date();
			let lastid = this.msgList[this.msgList.length - 1].msg.id;
			lastid++;
			let msg = {
				type: 'user',
				msg: {
					id: lastid,
					time: nowDate.getHours() + ':' + nowDate.getMinutes(),
					type: type,
					userinfo: { uid: 0, username: '大黑哥', face: '/static/img/face.jpg' },
					content: content
				}
			};
			// 发送消息
			this.screenMsg(msg);
			// 定时器模拟对方回复,三秒
			setTimeout(() => {
				lastid = this.msgList[this.msgList.length - 1].msg.id;
				lastid++;
				msg = {
					type: 'user',
					msg: {
						id: lastid,
						time: nowDate.getHours() + ':' + nowDate.getMinutes(),
						type: type,
						userinfo: { uid: 1, username: '售后客服008', face: '/static/img/im/face/face_2.jpg' },
						content: content
					}
				};
				// 本地模拟发送消息
				this.screenMsg(msg);
			}, 3000);
		},

		// 添加文字消息到列表
		addTextMsg(msg) {
			this.msgList.push(msg);
		},

		// 添加图片消息到列表
		addImgMsg(msg) {
			msg.msg.content = this.setPicSize(msg.msg.content);
			this.msgImgList.push(msg.msg.content.url);
			this.msgList.push(msg);
		},
		// 添加系统文字消息到列表
		addSystemTextMsg(msg) {
			this.msgList.push(msg);
		},

		sendSystemMsg(content, type) {
			let lastid = this.msgList[this.msgList.length - 1].msg.id;
			lastid++;
			let row = { type: 'system', msg: { id: lastid, type: type, content: content } };
			this.screenMsg(row);
		},

		// 预览图片
		showPic(msg) {
			uni.previewImage({
				indicator: 'none',
				current: msg.content.url,
				urls: this.msgImgList
			});
		},

		discard() {
			return;
		}
	}
};
</script>
<style lang="scss">
@import '@/static/HM-chat/css/style.scss';
</style>

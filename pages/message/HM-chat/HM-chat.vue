<template>
	<view>
		<c-custom-mid><block slot="center">
			{{nickName}}
		</block></c-custom-mid>
		<view class="content" @touchstart="hideDrawer">
			<scroll-view
				class="msg-list"
				scroll-y="true"
				:scroll-with-animation="scrollAnimation"
				:scroll-top="scrollTop"
				:scroll-into-view="scrollToView"
				@scrolltoupper="loadHistory"
				@scroll="scrollChang"
				upper-threshold="50"
			>
				<!-- 加载历史数据waitingUI -->
				<view class="loading" v-if="!isLoad">
					<view class="spinner">
						<view class="rect1"></view>
						<view class="rect2"></view>
						<view class="rect3"></view>
						<view class="rect4"></view>
						<view class="rect5"></view>
					</view>
				</view>
				
				
				<view class="row" v-for="(row, index) in msgList" :key="index" :id="'msg' + row.id">
					<!-- 系统消息 -->
					<block v-if="row.type == 'system'">
						<view class="system">
							<!-- 文字消息 -->
							<view v-if="row.msgType == 'text'" class="text">
									{{ row.content }}
							</view>
							<view v-else-if="row.msgType == 'time'" class="time">
									{{ $utils.dateUtils.trans(row.time) }}
							</view>
						</view>
					</block>
					<!-- 用户消息 -->
					<block v-if="row.type == 'user'">
						<!-- 自己发出的消息 -->
						<view class="my" v-if="row.user.id == userDB.id">
							<!-- 左-消息 -->
							<view class="left">
								<!-- 文字消息 -->
								<view style="height: 100%;" class="flex align-end">
									<view class="text-gray padding-xs text-sm">
										{{getMessage(row.time)}}
									</view>
								</view>
								<view v-if="row.msgType == 'text'" class="bubble"><rich-text :nodes="row.content"></rich-text></view>
								<!-- 图片消息 -->
								<view v-if="row.msgType == 'img'" class="bubble img" @tap="showPic(row.image)">
									<image :src="row.image" 
									:style="{ width: row.width + 'px', height: row.height + 'px' }"/>
								</view>
							</view>
							<!-- 右-头像 -->
							<view class="right"><image :src="row.user.avatar"></image></view>
						</view>
						<!-- 别人发出的消息 -->
						<view class="other" v-else>
							<!-- 左-头像 -->
							<view class="left" @click.stop="navToOtherUser(row.user.id)"><image :src="row.user.avatar"></image></view>
							<!-- 右-用户名称-时间-消息 -->
							<view class="right">
								<!-- <view class="username">
									<view class="name">{{ row.user.nickName }}</view>
								</view> -->
								<!-- 文字消息 -->
								<view v-if="row.msgType == 'text'" class="bubble"><rich-text :nodes="row.content"></rich-text></view>
								<!-- 图片消息 -->
								<view v-if="row.msgType == 'img'" class="bubble img" @tap="showPic(row.image)">
									<image :src="row.image" 
									:style="{ width: row.width + 'px', height: row.height + 'px' }"/>
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
import { mapState} from 'vuex';
export default {
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	data() {
		return {
			// 聊天姓名
			nickName: '',
			//文字消息
			textMsg: '',
			//消息列表
			scrollAnimation: false,
			scrollTop: 0,
			scrollToView: '',
			msgList: [],
			msgImgList: [],

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
			id: 0,
			task: {},
			// 请求帖子参数
			page: 1, //当前页
			pageSize: 20, // 每页数量
			totalPage: 0 ,// 总页数
			// 加载更多
			isLoad: false,
			loadCnt: 0,
			
			maxBottom: 0, // 页面底部最大距离
			curScrollTop: 0, // 页面当前底部距离
			disBottom: 100, // 距离页面底部 > 100 滚动底部
			sendNum: 0,
			lastTime: '', // 上次的时间
		};
	},
	onLoad({id, nickName}) {
		if(id == null || nickName == null) {
			this.$u.toast('地址有误~');
			return 
		}
		this.nickName = nickName
		this.id = id
		this.init()
		
		// //每 5 秒一次请求
		this.task = setInterval(()=>{
			this.refreshMsgList()
		}, 5000)
	},
	onUnload() {
		//离开页面 终止请求
		clearInterval(this.task);
	},
	methods: {
		init(id) {
			this.msgList = []
			this.msgImgList = []
			this.getMsgList();
		},
		//  监听页面滚动
		scrollChang(res) {
			this.maxBottom = Math.max(this.maxBottom, res.detail.scrollTop)
			this.curScrollTop = res.detail.scrollTop;
		},
		scrolltolower() {
			this.isBottom = true;
			setTimeout(()=>{
				this.isBottom = false
			},100)
		},
		//触发滑动到顶部(加载历史信息记录)
		loadHistory() {
			// 防止抖动
			if (this.loadCnt > 0) return;
			if (this.isLoad) return;
			this.scrollAnimation = false; //关闭滑动动画
			this.loadCnt++;
			this.page++;
			if (this.page <= this.totalPage) this.getMsgList();
			else this.isLoad = true;
			this.loadCnt--;
		},
		// 刷新数据
		refreshMsgList() {
			this.isRefresh = true;
			let data = {id: this.id, page: 1, pageSize:this.pageSize }
			this.$http.get('/message/getChat', data).then(res => {
				res = res.data;
				this.lastTime = res.friend.lastTime
				this.totalPage = res.pageInfo.pages;
				this.setList(res.pageInfo.list);
			})
		},
		// 获取信息是否 已读
		getMessage(time) {
			let startTime= Date.parse(this.lastTime);
			let endTime= Date.parse(time);
			return (startTime > endTime) ? "已读" : "未读"
		},
		// 加载初始页面消息
		getMsgList() {
			let Viewid = 0;
			if(this.page != 1) {
				Viewid = this.msgList[0].id; //记住第一个信息ID
			}
			let data = {id: this.id, page: this.page, pageSize:this.pageSize }
			this.$http.get('/message/getChat', data).then(res => {
				if(res.status == this.$http.ERROR) {
					this.$u.roast(res.msg);
					return ;
				}
				res = res.data;
				this.lastTime = res.friend.lastTime
				this.totalPage = res.pageInfo.pages;
				this.setList(res.pageInfo.list);
				if(this.page >= this.totalPage) this.isLoad = true;
				if(this.page == 1) { // 直接滑倒底部
					this.$nextTick(function() {
						//进入页面滚动到底部
						this.scrollTop = 9999;
						this.$nextTick(function() {//恢复滚动动画
							this.scrollAnimation = true;
						});
					});
				} else { 
					//这段代码很重要，不然每次加载历史数据都会跳到顶部
					this.$nextTick(function() {
						this.scrollToView = 'msg' + Viewid; //跳转上次的第一行信息位置
						this.$nextTick(function() {
							this.scrollAnimation = true; //恢复滚动动画
						});
					});
				}
			})
			
		},
		// 跳转用户资料
		navToOtherUser(id) {
			//当前统一跳转 其它用户
			this.$u.route('/pages/user/otherUser', {id})
		},
		// 获取消息中的图片,并处理显示尺寸
		setList(list) {
			let maxId = -1, minId = 9999999;
			if(this.msgList.length > 0) {
				maxId = this.msgList[this.msgList.length - 1].id;
				minId = this.msgList[0].id;
			}
			
			let tmpList = [], imgList = []
			list.forEach(obj => {
				// 刷新数据，放到后面
				if(this.isRefresh) {
					if(obj.id > maxId) {
						if(obj.msgType == 'img') {
							tmpList.unshift(this.setPicSize(obj))
							imgList.unshift(obj.image)
						} else {
							tmpList.unshift(obj)
						}
					} 
				} else { // 否则到
					if(this.page != 1) {
						if(obj.id < minId) this.pushMsg(obj)
					} else { // 2. 刷新加载更多
						if(obj.id > maxId) this.pushMsg(obj)
					}
				}
			})
			if(this.isRefresh) {
				this.msgList.push(...tmpList);
				this.msgImgList.push(...imgList);
				if(this.maxBottom - this.disBottom < this.curScrollTop )
					this.scrollBottom();
			}
			this.isRefresh = false;
		},
		
		pushMsg(obj) {
			if(obj.msgType == 'img') {
				this.msgList.unshift(this.setPicSize(obj))
				this.msgImgList.unshift(obj.image)
			} else {
				this.msgList.unshift(obj)
			}
		},
		
		scrollBottom() {
			// 滚动到底部
			this.scrollTop = 0;
			this.$nextTick(function() {
				//进入页面滚动到底部
				this.scrollTop = 9999;
			});
		},
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
		sendImage(data){
			this.$http.post('/message/sendImage', data).then(res => {
				// 1. 如果时间不为空，先插入时间
				if(res.data.system != null) {
					this.msgList.push(res.data.system)
				}
				
				// 2. 在插入发送的内容
				let message = res.data.chat;
				message.user = this.userDB;
				message = this.setPicSize(message);
				this.msgList.push(message)
				// 图片数组 +1
				this.msgImgList.push(message.image)
				this.scrollBottom()
			})
		},
		//选照片 or 拍照
		getImage(type) {
			this.hideDrawer();
			this.$http.urlImgUpload('/fileUpload', {sourceType: [type]}).then(res => {
				res.forEach(url => {
					uni.getImageInfo({
						src: url,
						success: image => {
							this.sendImage({id: this.id, image: url,
							 width: image.width, height: image.height})
						}
					})
				})
			})
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
		//处理图片尺寸，如果不处理宽高，新进入页面加载图片时候会闪
		setPicSize(message) {
			let w = message.width, h = message.height
			// 让图片最长边等于设置的最大长度，短边等比例缩小，图片控件真实改变，区别于aspectFit方式。
			let maxW = uni.upx2px(350); //350是定义消息图片最大宽度
			let maxH = uni.upx2px(350); //350是定义消息图片最大高度
			if (w > maxW || h > maxH) {
				let scale = w / h;
				message.width = scale > 1 ? maxW : maxH * scale;
				message.height = scale > 1 ? maxW / scale : maxH;
			}
			return message;
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
			if(this.sendNum != 0) return ;
			this.sendNum++;
			this.hideDrawer(); //隐藏抽屉
			if (!this.textMsg) {
				return;
			}
			let content = this.replaceEmoji(this.textMsg);
			
			this.$http.post('/message/sendText',{id: this.id, content}).then(res => {
				// 1. 如果时间不为空，先插入时间
				if(res.data.system != null) {
					this.msgList.push(res.data.system)
				}
				
				// 2 在插入发送的内容
				let msg = res.data.chat;
				msg.user = this.userDB;
				this.msgList.push(msg)
				
				this.textMsg = ''; //清空输入框
				this.sendNum--;
				this.scrollBottom()
			})
			
		},
		//替换表情符号为图片
		replaceEmoji(str) {
			let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
				let curPath = '/static/img/emoji/';
				for (let i = 0; i < this.emojiList.length; i++) {
					let row = this.emojiList[i];
					let rowItem = row.find(rItem => rItem.alt == item);
					if(rowItem) {
						let imgstr = '<img src="' + curPath + rowItem.url + '">';
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

		sendSystemMsg(content, type) {
			let lastid = this.msgList[this.msgList.length - 1].msg.id;
			lastid++;
			let row = { type: 'system', msg: { id: lastid, type: type, content: content } };
			this.screenMsg(row);
		},

		// 预览图片
		showPic(url) {
			uni.previewImage({
				indicator: 'none',
				current: url,
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

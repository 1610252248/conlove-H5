(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-message-HM-chat-HM-chat"],{"1f49":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{BackPage:function(){1!=getCurrentPages().length?uni.navigateBack({delta:1}):history.back()},send:function(){this.$emit("send")}}};e.default=a},2976:function(t,e,i){"use strict";i.r(e);var a=i("4890"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"324d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-7cf5aae9]{background-color:#e7e7e7}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.icon[data-v-7cf5aae9]{font-family:HMfont-home!important;font-size:%?56?%;font-style:normal;color:#333}.icon.biaoqing[data-v-7cf5aae9]:before{content:"\\e797"}.icon.jianpan[data-v-7cf5aae9]:before{content:"\\e7b2"}.icon.yuyin[data-v-7cf5aae9]:before{content:"\\e805"}.icon.tupian[data-v-7cf5aae9]:before{content:"\\e639"}.icon.chehui[data-v-7cf5aae9]:before{content:"\\e904"}.icon.luyin[data-v-7cf5aae9]:before{content:"\\e905"}.icon.luyin2[data-v-7cf5aae9]:before{content:"\\e677"}.icon.other-voice[data-v-7cf5aae9]:before{content:"\\e667"}.icon.my-voice[data-v-7cf5aae9]:before{content:"\\e906"}.icon.hongbao[data-v-7cf5aae9]:before{content:"\\e626"}.icon.tupian2[data-v-7cf5aae9]:before{content:"\\e674"}.icon.paizhao[data-v-7cf5aae9]:before{content:"\\e63e"}.icon.add[data-v-7cf5aae9]:before{content:"\\e655"}.icon.close[data-v-7cf5aae9]:before{content:"\\e607"}.icon.to[data-v-7cf5aae9]:before{content:"\\e675"}.hidden[data-v-7cf5aae9]{display:none!important}.popup-layer[data-v-7cf5aae9]{-webkit-transition:all .15s linear;transition:all .15s linear;width:96%;height:42vw;padding:%?20?% 2%;background-color:#f3f3f3;border-top:solid %?1?% #ddd;position:fixed;z-index:20;top:100%}.popup-layer.showLayer[data-v-7cf5aae9]{-webkit-transform:translate3d(0,-42vw,0);transform:translate3d(0,-42vw,0)}.popup-layer .emoji-swiper[data-v-7cf5aae9]{height:40vw}.popup-layer .emoji-swiper uni-swiper-item[data-v-7cf5aae9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-align-content:flex-start;align-content:flex-start;-webkit-flex-wrap:wrap;flex-wrap:wrap}.popup-layer .emoji-swiper uni-swiper-item uni-view[data-v-7cf5aae9]{width:12vw;height:12vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.popup-layer .emoji-swiper uni-swiper-item uni-view uni-image[data-v-7cf5aae9]{width:8.4vw;height:8.4vw}.popup-layer .more-layer[data-v-7cf5aae9]{width:100%;height:42vw}.popup-layer .more-layer .list[data-v-7cf5aae9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.popup-layer .more-layer .list .box[data-v-7cf5aae9]{width:18vw;height:18vw;border-radius:%?20?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 3vw 2vw 3vw}.popup-layer .more-layer .list .box .icon[data-v-7cf5aae9]{font-size:%?70?%}.input-box[data-v-7cf5aae9]{width:98%;min-height:%?100?%;padding:0 1%;background-color:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;z-index:20;bottom:%?-2?%;-webkit-transition:all .15s linear;transition:all .15s linear;border-bottom:solid %?1?% #ddd}.input-box.showLayer[data-v-7cf5aae9]{-webkit-transform:translate3d(0,-42vw,0);transform:translate3d(0,-42vw,0)}.input-box .voice[data-v-7cf5aae9], .input-box .more[data-v-7cf5aae9]{-webkit-flex-shrink:0;flex-shrink:0;width:%?90?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send[data-v-7cf5aae9]{\r\nmargin-left:%?20?%;\r\n-webkit-flex-shrink:0;flex-shrink:0;width:%?100?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send .btn[data-v-7cf5aae9]{width:%?90?%;height:%?56?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(left,#f09b37,#eb632c);background:linear-gradient(90deg,#f09b37,#eb632c);color:#fff;border-radius:%?6?%;font-size:%?24?%}.input-box .textbox[data-v-7cf5aae9]{width:100%;min-height:%?70?%;margin-top:%?15?%}.input-box .textbox .voice-mode[data-v-7cf5aae9]{width:calc(100% - %?2?%);height:%?68?%;border-radius:%?70?%;border:solid %?1?% #cdcdcd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;background-color:#fff;color:#555}.input-box .textbox .voice-mode.recording[data-v-7cf5aae9]{background-color:#e5e5e5}.input-box .textbox .text-mode[data-v-7cf5aae9]{width:100%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;border-radius:%?40?%}.input-box .textbox .text-mode .box[data-v-7cf5aae9]{width:100%;padding-left:%?30?%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .textbox .text-mode .box uni-textarea[data-v-7cf5aae9]{width:100%}.input-box .textbox .text-mode .em[data-v-7cf5aae9]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;padding-left:%?10?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record[data-v-7cf5aae9]{width:40vw;height:40vw;position:fixed;top:55%;left:30%;background-color:rgba(0,0,0,.6);border-radius:%?20?%}.record .ing[data-v-7cf5aae9]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes volatility-data-v-7cf5aae9{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}@keyframes volatility-data-v-7cf5aae9{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}.record .ing .icon[data-v-7cf5aae9]{background-image:-webkit-linear-gradient(top,#f09b37,#fff 50%);background-image:linear-gradient(180deg,#f09b37,#fff 50%);background-size:100% 200%;-webkit-animation:volatility-data-v-7cf5aae9 1.5s ease-in-out -1.5s infinite alternate;animation:volatility-data-v-7cf5aae9 1.5s ease-in-out -1.5s infinite alternate;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:%?150?%;color:#f09b37}.record .cancel[data-v-7cf5aae9]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record .cancel .icon[data-v-7cf5aae9]{color:#fff;font-size:%?150?%}.record .tis[data-v-7cf5aae9]{width:100%;height:10vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#fff}.record .tis.change[data-v-7cf5aae9]{color:#f09b37}.content[data-v-7cf5aae9]{width:100%}.content .msg-list[data-v-7cf5aae9]{width:95%;margin:0 %?10?% 0 %?20?%;height:calc(100vh - 96px)}.content .msg-list .loading[data-v-7cf5aae9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}@-webkit-keyframes stretchdelay-data-v-7cf5aae9{0%, 40%, 100%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes stretchdelay-data-v-7cf5aae9{0%, 40%, 100%{-webkit-transform:scaleY(.6);transform:scaleY(.6)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.content .msg-list .loading .spinner[data-v-7cf5aae9]{margin:%?20?% 0;width:%?60?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content .msg-list .loading .spinner uni-view[data-v-7cf5aae9]{background-color:#f06c7a;height:%?50?%;width:%?6?%;border-radius:%?6?%;-webkit-animation:stretchdelay-data-v-7cf5aae9 1.2s infinite ease-in-out;animation:stretchdelay-data-v-7cf5aae9 1.2s infinite ease-in-out}.content .msg-list .loading .spinner .rect2[data-v-7cf5aae9]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.content .msg-list .loading .spinner .rect3[data-v-7cf5aae9]{-webkit-animation-delay:-1s;animation-delay:-1s}.content .msg-list .loading .spinner .rect4[data-v-7cf5aae9]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.content .msg-list .loading .spinner .rect5[data-v-7cf5aae9]{-webkit-animation-delay:-.8s;animation-delay:-.8s}.content .msg-list .row[data-v-7cf5aae9]{padding:%?20?% 0}.content .msg-list .row .system[data-v-7cf5aae9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.content .msg-list .row .system .time[data-v-7cf5aae9]{background-color:initial;color:#333}.content .msg-list .row .system uni-view[data-v-7cf5aae9]{padding:0 %?30?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#c9c9c9;color:#fff;font-size:%?24?%;border-radius:%?40?%}.content .msg-list .row .system .red-envelope uni-image[data-v-7cf5aae9]{margin-right:%?5?%;width:%?30?%;height:%?30?%}.content .msg-list .row[data-v-7cf5aae9]:first-child{margin-top:%?20?%}.content .msg-list .row .my .left[data-v-7cf5aae9], .content .msg-list .row .other .right[data-v-7cf5aae9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .my .left .bubble[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble[data-v-7cf5aae9]{max-width:70%;min-height:%?50?%;border-radius:%?10?%;padding:%?15?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;word-break:break-word}.content .msg-list .row .my .left .bubble.img[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.img[data-v-7cf5aae9]{background-color:initial;padding:0;overflow:hidden}.content .msg-list .row .my .left .bubble.img uni-image[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.img uni-image[data-v-7cf5aae9]{max-width:%?350?%;max-height:%?350?%}.content .msg-list .row .my .left .bubble.red-envelope[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.red-envelope[data-v-7cf5aae9]{background-color:initial;padding:0;overflow:hidden;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.content .msg-list .row .my .left .bubble.red-envelope uni-image[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.red-envelope uni-image[data-v-7cf5aae9]{width:%?250?%;height:%?313?%}.content .msg-list .row .my .left .bubble.red-envelope .tis[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.red-envelope .tis[data-v-7cf5aae9]{position:absolute;top:6%;font-size:%?26?%;color:#9c1712}.content .msg-list .row .my .left .bubble.red-envelope .blessing[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.red-envelope .blessing[data-v-7cf5aae9]{position:absolute;bottom:14%;color:#e9b874;width:80%;text-align:center;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .msg-list .row .my .left .bubble.voice .icon[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.voice .icon[data-v-7cf5aae9]{font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .msg-list .row .my .left .bubble.voice .icon[data-v-7cf5aae9]:after, .content .msg-list .row .other .right .bubble.voice .icon[data-v-7cf5aae9]:after{content:" ";width:%?53?%;height:%?53?%;border-radius:100%;position:absolute;box-sizing:border-box}.content .msg-list .row .my .left .bubble.voice .length[data-v-7cf5aae9], .content .msg-list .row .other .right .bubble.voice .length[data-v-7cf5aae9]{font-size:%?28?%}.content .msg-list .row .my .right[data-v-7cf5aae9], .content .msg-list .row .other .left[data-v-7cf5aae9]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%}.content .msg-list .row .my .right uni-image[data-v-7cf5aae9], .content .msg-list .row .other .left uni-image[data-v-7cf5aae9]{width:%?80?%;height:%?80?%;border-radius:%?10?%}.content .msg-list .row .my[data-v-7cf5aae9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left[data-v-7cf5aae9]{min-height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left .bubble[data-v-7cf5aae9]{background-color:#f06c7a;color:#fff}.content .msg-list .row .my .left .bubble.voice .icon[data-v-7cf5aae9]{color:#fff}.content .msg-list .row .my .left .bubble.voice .length[data-v-7cf5aae9]{margin-right:%?20?%}@-webkit-keyframes my-play-data-v-7cf5aae9{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes my-play-data-v-7cf5aae9{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .my .left .bubble.play .icon[data-v-7cf5aae9]:after{border-left:solid %?10?% rgba(240,108,122,.5);-webkit-animation:my-play-data-v-7cf5aae9 1s linear infinite;animation:my-play-data-v-7cf5aae9 1s linear infinite}.content .msg-list .row .my .right[data-v-7cf5aae9]{margin-left:%?15?%}.content .msg-list .row .other[data-v-7cf5aae9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .left[data-v-7cf5aae9]{margin-right:%?15?%}.content .msg-list .row .other .right[data-v-7cf5aae9]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .msg-list .row .other .right .username[data-v-7cf5aae9]{width:100%;height:%?45?%;font-size:%?24?%;color:#999;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .right .username .name[data-v-7cf5aae9]{margin-right:%?50?%;max-width:50%}.content .msg-list .row .other .right .bubble[data-v-7cf5aae9]{background-color:#fff;color:#333}.content .msg-list .row .other .right .bubble.voice .icon[data-v-7cf5aae9]{color:#333}.content .msg-list .row .other .right .bubble.voice .length[data-v-7cf5aae9]{margin-left:%?20?%}@-webkit-keyframes other-play-data-v-7cf5aae9{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes other-play-data-v-7cf5aae9{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .other .right .bubble.play .icon[data-v-7cf5aae9]:after{border-right:solid %?10?% hsla(0,0%,100%,.8);-webkit-animation:other-play-data-v-7cf5aae9 1s linear infinite;animation:other-play-data-v-7cf5aae9 1s linear infinite}.windows .mask[data-v-7cf5aae9]{position:fixed;top:100%;width:100%;height:100%;z-index:1000;background-color:rgba(0,0,0,.6);opacity:0;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out}.windows .layer[data-v-7cf5aae9]{position:fixed;width:80%;height:70%;left:10%;z-index:1001;border-radius:%?20?%;overflow:hidden;top:100%;-webkit-transform:scale3d(.5,.5,1);transform:scale3d(.5,.5,1);-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.windows.show[data-v-7cf5aae9]{display:block}.windows.show .mask[data-v-7cf5aae9]{top:0;opacity:1}.windows.show .layer[data-v-7cf5aae9]{-webkit-transform:translate3d(0,-85vh,0) scaleX(1);transform:translate3d(0,-85vh,0) scaleX(1)}.windows.hide[data-v-7cf5aae9]{display:block}.windows.hide .mask[data-v-7cf5aae9]{top:0;opacity:0}.open-redenvelope[data-v-7cf5aae9]{width:100%;height:70vh;background-color:#cf3c35;position:relative}.open-redenvelope .top[data-v-7cf5aae9]{width:100%;background-color:#fe5454;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;border-radius:0 0 100% 100%;box-shadow:inset 0 %?-20?% 0 #9c1712;margin-bottom:%?65?%}.open-redenvelope .top .close-btn[data-v-7cf5aae9]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;margin-bottom:%?30?%}.open-redenvelope .top .close-btn .icon[data-v-7cf5aae9]{color:#9c1712;margin-top:%?10?%;margin-right:%?10?%}.open-redenvelope .top uni-image[data-v-7cf5aae9]{width:%?130?%;height:%?130?%;border:solid %?12?% #cf3c35;border-radius:100%;margin-bottom:%?-65?%}.open-redenvelope .from[data-v-7cf5aae9], .open-redenvelope .blessing[data-v-7cf5aae9], .open-redenvelope .money[data-v-7cf5aae9], .open-redenvelope .showDetails[data-v-7cf5aae9]{width:90%;padding:%?5?% 5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?32?%;color:#fff}.open-redenvelope .money[data-v-7cf5aae9]{font-size:%?100?%;color:#f8d757;display:-webkit-box;display:-webkit-flex;display:flex;padding-top:%?20?%}.open-redenvelope .showDetails[data-v-7cf5aae9]{position:absolute;bottom:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#f8d757}.open-redenvelope .showDetails .icon[data-v-7cf5aae9]{font-size:%?26?%;color:#f8d757}body.?%PAGE?%[data-v-7cf5aae9]{background-color:#e7e7e7}',""]),t.exports=e},4890:function(t,e,i){"use strict";(function(t){var a=i("ee27");i("7db0"),i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),s=i("2f62"),o={computed:(0,n.default)({},(0,s.mapState)(["userDB"])),data:function(){return{nickName:"",textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],popupLayerClass:"",hideMore:!0,hideEmoji:!0,emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],id:0,task:{},page:1,pageSize:20,totalPage:0,isLoad:!1,loadCnt:0,maxBottom:0,curScrollTop:0,disBottom:100}},onLoad:function(t){var e=this,i=t.id,a=t.nickName;null!=i&&null!=a?(this.nickName=a,this.id=i,this.init(),this.task=setInterval((function(){e.refreshMsgList()}),1e4)):this.$u.toast("地址有误~")},onUnload:function(){clearInterval(this.task)},methods:{init:function(t){this.msgList=[],this.msgImgList=[],this.getMsgList()},scrollChang:function(t){this.maxBottom=Math.max(this.maxBottom,t.detail.scrollTop),this.curScrollTop=t.detail.scrollTop},scrolltolower:function(){var t=this;this.isBottom=!0,setTimeout((function(){t.isBottom=!1}),100)},loadHistory:function(){this.loadCnt>0||this.isLoad||(this.scrollAnimation=!1,this.loadCnt++,this.page++,this.page<=this.totalPage?this.getMsgList():this.isLoad=!0,this.loadCnt--)},refreshMsgList:function(){var t=this;this.isRefresh=!0;var e={id:this.id,page:1,pageSize:this.pageSize};this.$http.get("/message/getChat",e).then((function(e){e=e.data,t.totalPage=e.pages,t.setList(e.list)}))},getMsgList:function(){var t=this,e=0;1!=this.page&&(e=this.msgList[0].id);var i={id:this.id,page:this.page,pageSize:this.pageSize};this.$http.get("/message/getChat",i).then((function(i){i.status!=t.$http.ERROR?(i=i.data,t.totalPage=i.pages,t.page>=t.totalPage&&(t.isLoad=!0),t.setList(i.list),1==t.page?t.$nextTick((function(){this.scrollTop=9999,this.$nextTick((function(){this.scrollAnimation=!0}))})):t.$nextTick((function(){this.scrollToView="msg"+e,this.$nextTick((function(){this.scrollAnimation=!0}))}))):t.$u.roast(i.msg)}))},setList:function(t){var e=this,i=-1,a=9999999;this.msgList.length>0&&(i=this.msgList[this.msgList.length-1].id,a=this.msgList[0].id);var n,s,o=[],r=[];(t.forEach((function(t){e.isRefresh?t.id>i&&("img"==t.msgType?(o.unshift(e.setPicSize(t)),r.unshift(t.image)):o.unshift(t)):1!=e.page?t.id<a&&e.pushMsg(t):t.id>i&&e.pushMsg(t)})),this.isRefresh)&&((n=this.msgList).push.apply(n,o),(s=this.msgImgList).push.apply(s,r),this.maxBottom-this.disBottom<this.curScrollTop&&this.scrollBottom());this.isRefresh=!1},pushMsg:function(t){"img"==t.msgType?(this.msgList.unshift(this.setPicSize(t)),this.msgImgList.unshift(t.image)):this.msgList.unshift(t)},scrollBottom:function(){this.scrollTop=0,this.$nextTick((function(){this.scrollTop=9999}))},showMore:function(){this.hideEmoji=!0,this.hideMore?(this.hideMore=!1,this.openDrawer()):this.hideDrawer()},openDrawer:function(){this.popupLayerClass="showLayer"},hideDrawer:function(){var t=this;this.popupLayerClass="",setTimeout((function(){t.hideMore=!0,t.hideEmoji=!0}),150)},chooseImage:function(){this.getImage("album")},camera:function(){this.getImage("camera")},sendImage:function(t){var e=this;this.$http.post("/message/sendImage",t).then((function(t){null!=t.data.system&&e.msgList.push(t.data.system);var i=t.data.chat;i.user=e.userDB,i=e.setPicSize(i),e.msgList.push(i),e.msgImgList.push(i.image),e.scrollBottom()}))},getImage:function(t){var e=this;this.hideDrawer(),this.$http.urlImgUpload("/fileUpload",{sourceType:[t]}).then((function(t){t.forEach((function(t){uni.getImageInfo({src:t,success:function(i){e.sendImage({id:e.id,image:t,width:i.width,height:i.height})}})}))}))},chooseEmoji:function(){this.hideMore=!0,this.hideEmoji?(this.hideEmoji=!1,this.openDrawer()):this.hideDrawer()},setPicSize:function(t){var e=t.width,i=t.height,a=uni.upx2px(350),n=uni.upx2px(350);if(e>a||i>n){var s=e/i;t.width=s>1?a:n*s,t.height=s>1?a/s:n}return t},addEmoji:function(t){this.textMsg+=t.alt},textareaFocus:function(){"showLayer"==this.popupLayerClass&&0==this.hideMore&&this.hideDrawer()},sendText:function(){var t=this;if(this.hideDrawer(),this.textMsg){var e=this.replaceEmoji(this.textMsg);this.$http.post("/message/sendText",{id:this.id,content:e}).then((function(e){null!=e.data.system&&t.msgList.push(e.data.system);var i=e.data.chat;i.user=t.userDB,t.msgList.push(i),t.textMsg="",t.scrollBottom()}))}},replaceEmoji:function(e){var i=this,a=e.replace(/\[([^(\]|\[)]*)\]/g,(function(e,a){t.log("item: "+e);for(var n="/static/img/emoji/",s=0;s<i.emojiList.length;s++){var o=i.emojiList[s],r=o.find((function(t){return t.alt==e}));if(r){var l='<img src="'+n+r.url+'">';return t.log(l),l}}}));return'<div style="display: flex;align-items: center;word-wrap:break-word;">'+a+"</div>"},sendMsg:function(t,e){var i=this,a=new Date,n=this.msgList[this.msgList.length-1].msg.id;n++;var s={type:"user",msg:{id:n,time:a.getHours()+":"+a.getMinutes(),type:e,userinfo:{uid:0,username:"大黑哥",face:"/static/img/face.jpg"},content:t}};this.screenMsg(s),setTimeout((function(){n=i.msgList[i.msgList.length-1].msg.id,n++,s={type:"user",msg:{id:n,time:a.getHours()+":"+a.getMinutes(),type:e,userinfo:{uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg"},content:t}},i.screenMsg(s)}),3e3)},addTextMsg:function(t){this.msgList.push(t)},addImgMsg:function(t){t.msg.content=this.setPicSize(t.msg.content),this.msgImgList.push(t.msg.content.url),this.msgList.push(t)},sendSystemMsg:function(t,e){var i=this.msgList[this.msgList.length-1].msg.id;i++;var a={type:"system",msg:{id:i,type:e,content:t}};this.screenMsg(a)},showPic:function(t){uni.previewImage({indicator:"none",current:t,urls:this.msgImgList})},discard:function(){}}};e.default=o}).call(this,i("5a52")["default"])},"6df4":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"navBar cu-bar"},[i("v-uni-view",{staticClass:"action margin-left ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"text-icon"},[i("v-uni-text",{staticClass:"cuIcon-back"})],1)],1),i("v-uni-view",{staticClass:"content text-bold"},[t._t("center")],2)],1),i("v-uni-view",{staticStyle:{height:"90rpx"}})],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},7169:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".navBar[data-v-26c92310]{position:fixed;top:0;width:100%;height:%?90?%;line-height:%?90?%;z-index:111;background-color:#fff}.cuIcon-back[data-v-26c92310]{font-size:%?42?%}.cu-btn.sm[data-v-26c92310]{padding:0 %?22?%;font-size:%?26?%;height:%?48?%}",""]),t.exports=e},"8a14":function(t,e,i){var a=i("7169");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("b29d4d84",a,!0,{sourceMap:!1,shadowMode:!1})},"8eb4":function(t,e,i){"use strict";var a=i("dcf0"),n=i.n(a);n.a},"8f87":function(t,e,i){"use strict";var a={cCustomMid:i("fc98").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("c-custom-mid",[i("template",{attrs:{slot:"center"},slot:"center"},[t._v(t._s(t.nickName))])],2),i("v-uni-view",{staticClass:"content",on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.hideDrawer.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"msg-list",attrs:{"scroll-y":"true","scroll-with-animation":t.scrollAnimation,"scroll-top":t.scrollTop,"scroll-into-view":t.scrollToView,"upper-threshold":"50"},on:{scrolltoupper:function(e){arguments[0]=e=t.$handleEvent(e),t.loadHistory.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scrollChang.apply(void 0,arguments)}}},[t.isLoad?t._e():i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"spinner"},[i("v-uni-view",{staticClass:"rect1"}),i("v-uni-view",{staticClass:"rect2"}),i("v-uni-view",{staticClass:"rect3"}),i("v-uni-view",{staticClass:"rect4"}),i("v-uni-view",{staticClass:"rect5"})],1)],1),t._l(t.msgList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"row",attrs:{id:"msg"+e.id}},["system"==e.type?[i("v-uni-view",{staticClass:"system"},["text"==e.msgType?i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.content))]):"time"==e.msgType?i("v-uni-view",{staticClass:"time"},[t._v(t._s(t.$utils.dateUtils.trans(e.time)))]):t._e()],1)]:t._e(),"user"==e.type?[e.user.id==t.userDB.id?i("v-uni-view",{staticClass:"my"},[i("v-uni-view",{staticClass:"left"},["text"==e.msgType?i("v-uni-view",{staticClass:"bubble"},[i("v-uni-rich-text",{attrs:{nodes:e.content}})],1):t._e(),"img"==e.msgType?i("v-uni-view",{staticClass:"bubble img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showPic(e.image)}}},[i("v-uni-image",{style:{width:e.width+"px",height:e.height+"px"},attrs:{src:e.image}})],1):t._e()],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:e.user.avatar}})],1)],1):i("v-uni-view",{staticClass:"other"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:e.user.avatar}})],1),i("v-uni-view",{staticClass:"right"},["text"==e.msgType?i("v-uni-view",{staticClass:"bubble"},[i("v-uni-rich-text",{attrs:{nodes:e.content}})],1):t._e(),"img"==e.msgType?i("v-uni-view",{staticClass:"bubble img",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showPic(e.image)}}},[i("v-uni-image",{style:{width:e.width+"px",height:e.height+"px"},attrs:{src:e.image}})],1):t._e()],1)],1)]:t._e()],2)}))],2)],1),i("v-uni-view",{staticClass:"popup-layer",class:t.popupLayerClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-swiper",{staticClass:"emoji-swiper",class:{hidden:t.hideEmoji},attrs:{"indicator-dots":"true",duration:"150"}},t._l(t.emojiList,(function(e,a){return i("v-uni-swiper-item",{key:a},t._l(e,(function(e,a){return i("v-uni-view",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.addEmoji(e)}}},[i("v-uni-image",{attrs:{mode:"widthFix",src:"/static/img/emoji/"+e.url}})],1)})),1)})),1),i("v-uni-view",{staticClass:"more-layer",class:{hidden:t.hideMore}},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon tupian2"})],1),i("v-uni-view",{staticClass:"box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.camera.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon paizhao"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"input-box",class:t.popupLayerClass,on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.discard.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showMore.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon add"})],1),i("v-uni-view",{staticClass:"textbox"},[i("v-uni-view",{staticClass:"text-mode"},[i("v-uni-view",{staticClass:"box"},[i("v-uni-textarea",{attrs:{"auto-height":"true"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.textareaFocus.apply(void 0,arguments)}},model:{value:t.textMsg,callback:function(e){t.textMsg=e},expression:"textMsg"}})],1),i("v-uni-view",{staticClass:"em",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseEmoji.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon biaoqing"})],1)],1)],1),i("v-uni-view",{staticClass:"send",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendText.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"btn"},[t._v("发送")])],1)],1)],1)},s=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}))},b4cb:function(t,e,i){"use strict";i.r(e);var a=i("8f87"),n=i("2976");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("8eb4");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"7cf5aae9",null,!1,a["a"],o);e["default"]=l.exports},dbd4:function(t,e,i){"use strict";var a=i("8a14"),n=i.n(a);n.a},dcf0:function(t,e,i){var a=i("324d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6643551f",a,!0,{sourceMap:!1,shadowMode:!1})},e819:function(t,e,i){"use strict";i.r(e);var a=i("1f49"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},fc98:function(t,e,i){"use strict";i.r(e);var a=i("6df4"),n=i("e819");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("dbd4");var o,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"26c92310",null,!1,a["a"],o);e["default"]=l.exports}}]);
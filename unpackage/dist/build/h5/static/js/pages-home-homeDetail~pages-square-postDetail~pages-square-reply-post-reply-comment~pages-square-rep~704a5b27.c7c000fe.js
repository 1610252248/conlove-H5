(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-homeDetail~pages-square-postDetail~pages-square-reply-post-reply-comment~pages-square-rep~704a5b27"],{"081e":function(t,e,n){var a=n("c8c5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("46987a0c",a,!0,{sourceMap:!1,shadowMode:!1})},"0cbf":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={cCommentInfo:n("1ce9").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top padding-tb-sm"},t._l(t.comments,(function(e,a){return n("c-comment-info",{key:e.id,attrs:{anonymous:t.anonymous,treeHoleId:t.treeHoleId,showInfo:t.showInfo,replyInfo:t.replyInfo,comment:e},on:{"nav-to-reply":function(e){arguments[0]=e=t.$handleEvent(e),t.navToReply.apply(void 0,arguments)},"change-like":function(e){arguments[0]=e=t.$handleEvent(e),t.changeLike.apply(void 0,arguments)},reply:function(n){arguments[0]=n=t.$handleEvent(n),t.reply(a,e.id,e.user)}}})})),1)},o=[]},"0e98":function(t,e,n){"use strict";n.r(e);var a=n("e97d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},1292:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".scroll-view[data-v-8ea785f0]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-8ea785f0]{height:100vh!important}.mid-height[data-v-8ea785f0]{height:calc(100vh - 49px)!important}.min-height[data-v-8ea785f0]{height:calc(100vh - 94px)!important}.mini-height[data-v-8ea785f0]{height:calc(100vh - 94px - 46px)!important}.max-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 75px)!important}.mid-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 49px - 75px)!important}.min-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 94px - 75px)!important}.mini-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 94px - 75px - 46px)!important}.goToTop[data-v-8ea785f0]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-8ea785f0]{width:%?44?%;height:%?68?%}",""]),t.exports=e},"1ce9":function(t,e,n){"use strict";n.r(e);var a=n("47c6"),i=n("a310");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("914b");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"10a277c8",null,!1,a["a"],r);e["default"]=u.exports},2034:function(t,e,n){"use strict";var a=n("75fd"),i=n.n(a);i.a},"2bbef":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".on-right[data-v-556dd1ee]{margin-left:auto;margin-right:0}.dot[data-v-556dd1ee]{width:%?30?%;height:%?30?%;top:%?6?%;margin-left:%?10?%;margin-right:%?10?%}.reply[data-v-556dd1ee]{display:-webkit-box;display:-webkit-flex;display:flex}.reply-box[data-v-556dd1ee]{width:100%;background-color:#f1f1f1;padding:%?10?% 0 %?0?%}.text-blue[data-v-556dd1ee]{color:#2f62b5}",""]),t.exports=e},"2f62f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return null!=t.comments&&t.comments.length>0||t.cLength>0?n("v-uni-view",{staticClass:"reply-box"},[t._l(t.comments,(function(e,a){return n("v-uni-view",{key:a,staticClass:"reply"},[n("v-uni-view",{staticClass:"margin-left-xs text-sm ",staticStyle:{"max-width":"100%"}},[n("v-uni-text",{staticClass:"text-blue "},[t._v(t._s(t.getUserName(e.user)+": "))]),n("v-uni-text",{staticClass:"text-black"},[t._v(t._s(e.content))])],1)],1)})),t._t("default")],2):t._e()},o=[]},3218:function(t,e,n){"use strict";var a=n("4076"),i=n.n(a);i.a},"3e76":function(t,e,n){"use strict";var a=n("081e"),i=n.n(a);i.a},4076:function(t,e,n){var a=n("a900");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4343e07f",a,!0,{sourceMap:!1,shadowMode:!1})},4702:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=n("2f62"),r={computed:(0,i.default)({},(0,o.mapGetters)(["isLogin"])),props:{placeholder:{type:String,default:"评论"}},data:function(){return{content:"",isFocus:!1}},methods:{sendComment:function(){0!=this.content.length?(this.$emit("send-comment",this.content),this.content=""):this.$u.toast("内容不能为空哦~")},inputBlur:function(){this.isFocus=!1},clearContent:function(){this.content=""},focusInput:function(){this.isFocus=!0}}};e.default=r},"47c6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={cReply:n("5018").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.comment).length?a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-image",{staticClass:"cu-avatar  round",attrs:{src:t.getAvatar()},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToOtherUser(t.comment.user.id)}}}),a("v-uni-view",{staticClass:"content",staticStyle:{"max-width":"100%"}},[a("v-uni-view",{staticStyle:{height:"34rpx"}},[a("v-uni-view",{staticClass:"text-grey text-sm",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToOtherUser(t.comment.user.id)}}},[t._v(t._s(t.getUserName()))]),t._l(t.hotNums,(function(e,n){return t.appreciate>=e?a("v-uni-text",{key:n,staticClass:"cuIcon-hotfill text-red"}):t._e()})),a("v-uni-view",{staticClass:"on-right text-df",class:t.isLike?"text-red":"text-grey",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLike.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-appreciate"}),a("v-uni-text",{staticStyle:{"margin-left":"4rpx"}},[t._v(t._s(t.appreciate))])],1)],2),a("v-uni-view",[null!=t.comment.replyName?a("v-uni-text",[t._v("回复")]):t._e(),null!=t.comment.replyName?a("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(" "+t.getReplyName()+": "))]):t._e(),a("v-uni-text",[t._v(t._s(t.comment.content))])],1),t.showInfo?a("v-uni-view",[a("v-uni-view",{staticClass:"text-sm text-gray"},[a("v-uni-text",[t._v(t._s(t.$utils.dateUtils.format(t.comment.date)))]),a("v-uni-image",{staticClass:"dot",attrs:{src:n("f821")}}),a("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reply.apply(void 0,arguments)}}},[t._v("回复")])],1),t.replyInfo?a("c-reply",{attrs:{treeHoleId:t.treeHoleId,anonymous:t.anonymous,comments:t.comment.newComments,"c-length":t.comment.childComments.length},nativeOn:{click:function(e){return t.navToReply(t.comment.id)}}},[t.comment.childComments.length>0?a("v-uni-view",{staticClass:"margin-left-xs text-blue text-sm"},[t._v(t._s("共"+t.comment.childComments.length+"条回复 >"))]):t._e()],1):t._e()],1):t._e()],1)],1):t._e()},o=[]},"4c7e":function(t,e,n){"use strict";var a=n("e5bd"),i=n.n(a);i.a},5018:function(t,e,n){"use strict";n.r(e);var a=n("2f62f"),i=n("c15f");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("4c7e");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"556dd1ee",null,!1,a["a"],r);e["default"]=u.exports},"6b05":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=["达摩","典韦","曹操","钟无艳","墨子","赵云","吕布","孙悟空","关羽","杨戬","哪吒露娜","兰陵王","李白","花木兰","程咬金","白起","刘禅","庄周","项羽","廉颇","牛魔","张飞","钟馗","刘邦","雅典娜","亚瑟","夏侯惇","韩信","老夫子","宫本武藏","荆轲","张良","安琪拉","貂蝉","不知火舞","子牙","周瑜","武则天","王昭君","甄姬","诸葛亮","芈月","扁鹊","高渐离","嬴政","妲己","小乔","东皇太一","干将莫邪","艾琳","马可波罗","狄仁杰","鲁班七号","孙尚香","后羿","刘备","李元芳","虞姬","成吉思汗","孙膑","蔡文姬","大乔","庄周","明世隐","凯","百里守约","莱文狄","黄忠"],i=a;e.default=i},"6e7d":function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("6b05")),o={props:{comments:{type:Array,default:function(){}},cLength:{type:Number,default:0},anonymous:{type:Boolean,default:!0},treeHoleId:{type:Number,default:0}},data:function(){return{hotNums:[5,10]}},methods:{getUserName:function(t){var e=(this.treeHoleId+t.id)%i.default.length;return this.anonymous?i.default[e]:t.nickName},reply:function(t){this.$emit("reply",t)}}};e.default=o},"75fd":function(t,e,n){var a=n("1292");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7abfdfa4",a,!0,{sourceMap:!1,shadowMode:!1})},"7e3c":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":"",t.mini?"mini-height":"",t.$utils.isSafari()?"isSafari":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop()}}},[a("v-uni-image",{staticClass:"top-image",attrs:{src:n("8e68")}})],1)],1)},o=[]},"8e68":function(t,e,n){t.exports=n.p+"static/img/top.f3ad3d5d.png"},"914b":function(t,e,n){"use strict";var a=n("c22c"),i=n.n(a);i.a},"987b":function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),o=a(n("6b05")),r={props:{showInfo:{type:Boolean,default:!0},replyInfo:{type:Boolean,default:!0},comment:{type:Object,default:function(){}},anonymous:{type:Boolean,default:!1},treeHoleId:{type:Number,default:0}},data:function(){return{hotNums:[5,10],isLike:!1,appreciate:0}},mounted:function(){var t=(0,i.default)({},this._props);this.init(t)},methods:{getReplyName:function(){var t=(this.treeHoleId+parseInt(this.comment.replyName))%o.default.length;return this.anonymous?o.default[t]:comment.replyName},getId:function(){var t=this.comment;return this.treeHoleId+t.userId},getUserName:function(){var t=this.getId()%o.default.length;return this.anonymous?o.default[t]:this.comment.user.nickName},getAvatar:function(){var t=this.getId()%6,e="/static/avatar-pool/avatar-"+t+".jpg";return this.anonymous?e:this.comment.user.avatar},init:function(t){this.isLike=t.comment.isAppreciate,this.appreciate=t.comment.appreciate},navToReply:function(t){this.$emit("nav-to-reply",t)},changeLike:function(){this.$emit("change-like",this.comment.id,this.isLike),this.isLike=!this.isLike,this.appreciate+=this.isLike?1:-1},reply:function(){this.$emit("reply")},navToOtherUser:function(t){this.anonymous||this.$u.route("/pages/user/otherUser",{id:t})}}};e.default=r},"9fae":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"cu-bar input input-fixed"},[n("v-uni-input",{staticClass:"padding-left-sm solid",attrs:{placeholder:t.placeholder,focus:t.isFocus,maxlength:"40"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputBlur.apply(void 0,arguments)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("v-uni-button",{staticClass:"cu-btn round bg-blue shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendComment.apply(void 0,arguments)}}},[t._v("发送")])],1)},o=[]},a310:function(t,e,n){"use strict";n.r(e);var a=n("987b"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a4e8:function(t,e,n){"use strict";n.r(e);var a=n("4702"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a900:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".input-fixed[data-v-4b31c32a]{width:100%;position:fixed;min-height:42px;bottom:0;left:0;right:0;background-color:#fff;z-index:9999;padding:0 %?20?% %?6?%;box-shadow:1px 2px 8px 4px #dadada}",""]),t.exports=e},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=i(n("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,a.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,r=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(u)throw r}}}}},c15f:function(t,e,n){"use strict";n.r(e);var a=n("6e7d"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c22c:function(t,e,n){var a=n("f053");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("604cb509",a,!0,{sourceMap:!1,shadowMode:!1})},c35f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0},isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};e.default=a},c70c:function(t,e,n){"use strict";n.r(e);var a=n("7e3c"),i=n("c849");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2034");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"8ea785f0",null,!1,a["a"],r);e["default"]=u.exports},c849:function(t,e,n){"use strict";n.r(e);var a=n("c35f"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},c8c5:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".on-right[data-v-cab57ae2]{margin-left:auto;margin-right:0}.dot[data-v-cab57ae2]{width:%?30?%;height:%?30?%;top:%?6?%;margin-left:%?10?%;margin-right:%?10?%}.cu-item[data-v-cab57ae2]{padding:%?20?% %?20?% %?20?% %?110?%!important}.text-grey[data-v-cab57ae2]{color:#545454}",""]),t.exports=e},e5bd:function(t,e,n){var a=n("2bbef");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("949fa2a2",a,!0,{sourceMap:!1,shadowMode:!1})},e97d:function(t,e,n){"use strict";(function(t){n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{showInfo:{type:Boolean,default:!0},replyInfo:{type:Boolean,default:!0},comments:{type:Array,default:function(){}},anonymous:{type:Boolean,default:!1},treeHoleId:{type:Number,default:0}},data:function(){return{hotNums:[5,10]}},methods:{navToReply:function(t){this.$emit("nav-to-reply",t)},changeLike:function(t,e){this.$emit("change-like",t,e)},reply:function(e,n,a){var i=a.nickName;this.anonymous&&(i=a.id),t.log(a,i),this.$emit("reply",e,n,i)}}};e.default=a}).call(this,n("5a52")["default"])},ec22:function(t,e,n){"use strict";n.r(e);var a=n("0cbf"),i=n("0e98");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3e76");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"cab57ae2",null,!1,a["a"],r);e["default"]=u.exports},ef38:function(t,e,n){"use strict";n.r(e);var a=n("9fae"),i=n("a4e8");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3218");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"4b31c32a",null,!1,a["a"],r);e["default"]=u.exports},f053:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".on-right[data-v-10a277c8]{margin-left:auto;margin-right:0}.dot[data-v-10a277c8]{width:%?30?%;height:%?30?%;top:%?6?%;margin-left:%?10?%;margin-right:%?10?%}.cu-item[data-v-10a277c8]{padding:%?20?% %?20?% %?20?% %?110?%!important}.text-grey[data-v-10a277c8]{color:#545454}.text-blue[data-v-10a277c8]{color:#2f62b5}",""]),t.exports=e},f821:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAABr1JREFUeNrt3U+IFNQDB/D3dlfoUkSwkaeUPYniss4MDmQpadBYQQQdFiVPESGIWouLxPZnVeyPqISU4MVTmpeidfYisYGQqLNrsoKX0k65mijbRRh33+/wa350WMT8rftm1s/nPsx33uXLe2/eeyEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EHMHgLl09vjZ42ePP/NMe097T3tPpRLWhrVh7Zo14bvwXfhu6dLQGTpD57PPhlPhVDj1xBP/++C6sC6sm5wMJ8KJcOLq1Xg5Xo6XL11Kt9KtdGtkpN5R76h3DA+Xj5WPlY9NTOT+nTAXFAjz2uj20e2j2194IQ2kgTTQ1xc7Y2fsfPnldCadSWc6Ombre2I5lmP57t20IW1IG6rVtDltTps//7xYKpaKpdOnc48DPAwKhHnl/Pnz58+f7+qKB+KBeODLL8O2sC1sq1Ry5Ymb4+a4+eTJqaemnpp6asuWUrVULVV/+y33OMFsaMsdAGZD7VrtWu3axo3xaDwaj164kLs4GtKhdCgdeuWV9qn2qfapCxfGFo4tHFvY25s7F8wGMxBa2uiu0V2ju3bsSJVUSZW9e3PnuW+bwqaw6dNPC+OF8cJ4f3/uOPAgFAgtqZZqqZY++iiMhtEw+uGHufM8qJRSSmlgoFgsFovFwcHceeDfsIRFS2ksVbV6cTTEGGOMn3xiaYtWpEBoCY3N8bA77A67v/oqd57Zlpan5Wn54cO/vPfLe7+8t3hx7jxwPyxh0RJqG2sbaxur1WbZHH9oukJX6BoaKjxZeLLw5Guv5Y4D96JAaGpjq8ZWja1avXr64PTB6YMjI7nzzJU0nabT9PPPO0dCM7OERVObHpoemh56//3cOeZaPBQPxUN9fblzwL0oEJpS48qRxsnx3Hnm3PawPWyvVP67J/L007njwEwUCE2pY6hjqGNo/frZvnKkZdRDPdQXLKj31nvrvfN4z4eWpkBoSmkkjaSR1atz58gt3ol34h3jQHNSIDSnxu24j7i4P+6P+40DzUmB0Jwa16o/4tLitDgtXrQodw6YiQKhOe0Ne8Pexx/PHSO3eC6ei+f+8S4JNBEFAsADUSA0p/7QH/r/+it3jNxSKZVSaXIydw6YiQKhOd0IN8KN33/PHSO3eCVeiVeuXs2dA2aiQGhK8ev4dfx6fDx3jtzStrQtbbt0KXcOmIkCoSmlvtSX+n76KXeO3GIplmLp0bkDjNaiQGhK9YH6QH2gWo3lWI7lu3dz55lzC8KCsKBej2vj2rh2eDh3HJiJAqEplY+Vj5WPTUykDWlD2lCt5s4z1+LWuDVuPXmy53TP6Z7TN27kzgMzUSA0tbgyrowrW+it81kydWLqxNSJL77InQPuxXsgtITa7drt2u0ffgi/hl/Dr6++mjvPQ1MJlVD5/vvC9cL1wvXXX88dB+7FDISW0DHYMdgxuGVL3Bl3xp3z73xIfCm+FF+anGybaJtom9i6NXceuB8KhJbQva97X/e+K1fixXgxXnznndx5Zk0t1EItpfRGeiO98fbbPbEn9kTnPmgNCoSW0vNHzx89f3zzTUoppTQwkDvP/+2x8Fh47IMPCkcKRwpHvv02dxz4NxQILalYLBaLxcHBOByH43B/f+489+3vGUdYEVaEFR9/XHir8FbhrT17cseCB2ETnXlhbOHYwrGFvb1peVqelh8+nPakPWlP89zm29jjaCxVmXEwH5iBMC80lrbal7Uva1/W3R26QlfoGhrKnavxr6p4M96MN7u7FQfziRkI89q5m+dunrv53HNtS9qWtC3p6wunwqlwav36xpvjs/ZFjZPjfx8ADG+GN8Obn3224t0V76549+efc48DPAwKhEfK2KqxVWOrOjunDkwdmDqwfn1bpa3SVlmzJpVTOZWXLg2bwqawadGi8GP4Mfz4j4ecXgwvhhcnJ8PRcDQcvXo17Ag7wo7x8cZdVdMXpy9OX6xWi6ViqVj688/cvxMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA59x8WBwlVwOInQQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0wNlQyMDozOToyMSswODowMBMar7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMDZUMjA6Mzk6MjErMDg6MDBiRxcIAAAAR3RFWHRzdmc6YmFzZS11cmkAZmlsZTovLy9ob21lL2FkbWluL2ljb24tZm9udC90bXAvaWNvbl9mcXpodDltaGlhdy9kb3QxLnN2Z/uNzuUAAAAASUVORK5CYII="}}]);
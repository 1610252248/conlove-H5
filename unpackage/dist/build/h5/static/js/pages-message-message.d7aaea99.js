(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-message-message"],{"105b":function(t,i,a){"use strict";var e=a("3825"),n=a.n(e);n.a},1292:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".scroll-view[data-v-8ea785f0]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-8ea785f0]{height:100vh!important}.mid-height[data-v-8ea785f0]{height:calc(100vh - 49px)!important}.min-height[data-v-8ea785f0]{height:calc(100vh - 94px)!important}.mini-height[data-v-8ea785f0]{height:calc(100vh - 94px - 46px)!important}.max-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 75px)!important}.mid-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 49px - 75px)!important}.min-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 94px - 75px)!important}.mini-height.isSafari[data-v-8ea785f0]{height:calc(100vh - 94px - 75px - 46px)!important}.goToTop[data-v-8ea785f0]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-8ea785f0]{width:%?44?%;height:%?68?%}",""]),t.exports=i},2034:function(t,i,a){"use strict";var e=a("75fd"),n=a.n(e);n.a},3825:function(t,i,a){var e=a("a5dc");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("020139e4",e,!0,{sourceMap:!1,shadowMode:!1})},"5ce8":function(t,i,a){"use strict";a.r(i);var e=a("f1f6"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},"75fd":function(t,i,a){var e=a("1292");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("7abfdfa4",e,!0,{sourceMap:!1,shadowMode:!1})},"7e3c":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":"",t.mini?"mini-height":"",t.$utils.isSafari()?"isSafari":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrolltolower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop()}}},[e("v-uni-image",{staticClass:"top-image",attrs:{src:a("8e68")}})],1)],1)},o=[]},"8e68":function(t,i,a){t.exports=a.p+"static/img/top.f3ad3d5d.png"},a5dc:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".badge[data-v-02547429]{width:%?34?%;padding-right:%?8?%;height:%?34?%;font-size:%?26?%}.cu-avatar[data-v-02547429]{background-color:#fff}",""]),t.exports=i},c35f:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0},isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};i.default=e},c70c:function(t,i,a){"use strict";a.r(i);var e=a("7e3c"),n=a("c849");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("2034");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"8ea785f0",null,!1,e["a"],s);i["default"]=r.exports},c849:function(t,i,a){"use strict";a.r(i);var e=a("c35f"),n=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=n.a},f109:function(t,i,a){"use strict";a.r(i);var e=a("fe61"),n=a("5ce8");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(o);a("105b");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"02547429",null,!1,e["a"],s);i["default"]=r.exports},f1f6:function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("5530")),o=a("2f62"),s={computed:(0,n.default)((0,n.default)({},(0,o.mapState)(["userDB"])),(0,o.mapGetters)(["isLogin"])),data:function(){return{lists:[{name:"收到的秋波",tag:0,image:"/static/image/xin-qiubo.png"},{name:"收到的评论",tag:0,image:"/static/image/comment.png"},{name:"收到的赞",tag:0,image:"/static/image/appreciate.png"}],index:1,friends:[]}},onShow:function(){this.isLogin||this.$http.get("/verifyLogin").catch((function(t){})),this.getMessage(),this.getFriend()},methods:{getMessage:function(){var t=this;this.$http.get("/getMessage").then((function(i){i=i.data,t.lists[0].tag=i.conlove,t.lists[1].tag=i.comment,t.lists[2].tag=i.appreciate}))},getFriend:function(){var t=this;this.$http.get("/message/getFriend").then((function(i){t.friends=i.data}))},navToItem:function(t){uni.navigateTo({url:"/pages/message/rec-"+(0==t?"conlove":1==t?"comment":"appreciate")})},navToChat:function(t,i){this.$u.route("/pages/message/HM-chat/HM-chat",{id:t,nickName:i})}}};i.default=s},fe61:function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var e={cScroll:a("c70c").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("c-scroll",{attrs:{midHeight:!0}},[a("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.lists,(function(i,e){return a("v-uni-view",{key:e,staticClass:"cu-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToItem(e)}}},[a("v-uni-view",{staticClass:"cu-avatar  lg",style:{"background-image":"url("+i.image+")"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-black margin-left-sm"},[t._v(t._s(i.name))])],1),a("v-uni-view",{staticClass:"action"},[i.tag?a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v(t._s(i.tag))]):a("v-uni-view",{staticClass:"cuIcon-right text-gray"})],1)],1)})),t._l(t.friends,(function(i,e){return a("v-uni-view",{key:i.id,staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navToChat(i.id,i.friend.nickName)}}},[a("v-uni-view",{staticClass:"cu-avatar round lg",style:{"background-image":"url("+i.friend.avatar+")"}},[a("v-uni-view",{staticClass:"cu-tag badge",class:e%2==0?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})],1),a("v-uni-view",{staticClass:"content margin-left-sm"},[a("v-uni-view",{staticClass:"text-black"},[t._v(t._s(i.friend.nickName))]),a("v-uni-view",{staticClass:"text-gray text-sm text-cut"},[a("v-uni-rich-text",{attrs:{nodes:i.lastContent}})],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(t.$utils.dateUtils.format(i.time)))]),i.newMsg?a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v(t._s(i.newMsg))]):t._e()],1)],1)}))],2)],1)},o=[]}}]);
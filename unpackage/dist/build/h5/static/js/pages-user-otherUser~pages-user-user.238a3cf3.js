(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-otherUser~pages-user-user"],{"0065":function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f3f3")),s=i("2f62"),o={computed:(0,a.default)({},(0,s.mapState)(["userDB"])),props:{user:{type:Object,default:function(){}},selectTagList:{type:Array,default:function(){}},stickers:{type:Array,default:function(){}},posts:{type:Array,default:function(){}},isIdentity:{type:Boolean,default:!0}},methods:{viewImage:function(t){var e=[t];uni.previewImage({urls:e,current:t})},getTagColor:function(t){t%=3;var e="";switch(t){case 0:e="bg-red";break;case 1:e="bg-yellow";break;case 2:e="bg-blue";break}return e},getAge:function(){return null==this.user.birthDate?null:this.$utils.dateUtils.GetAge(this.user.birthDate)+"岁"},getConstellation:function(){return null==this.user.birthDate?null:this.$utils.dateUtils.getconstellation(this.user.birthDate)},getCurSchool:function(){var t=this.user.graduation;return null==t?null:1==t?"已毕业":this.user.level+"在读"},navToEditUser:function(){this.$u.route("/pages/user/userEdit")},navToUserPost:function(){this.$u.route("/pages/square/sub/userPost",{id:this.user.id})},navToUserHome:function(){this.$u.route("/pages/home/sub/userHome",{id:this.user.id})},navToSetting:function(){this.$u.route("/pages/user/setting")},navToLogin:function(){this.$u.route("/pages/enter/login")},navToSchool:function(){this.user.id==this.userDB.id&&this.$u.route("/pages/user/school",{id:this.user.id})},navToFavorite:function(){this.user.id==this.userDB.id&&this.$u.route("/pages/user/favorite")}}};e.default=o},"3fbb":function(t,e,i){"use strict";i.r(e);var n=i("6d2f"),a=i("a195");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("70f4");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"7aed5f72",null,!1,n["a"],o);e["default"]=l.exports},"50f2":function(t,e,i){"use strict";var n=i("ca72"),a=i.n(n);a.a},"586a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.content[data-v-7aed5f72]{max-width:%?400?%}.cu-btn[data-v-7aed5f72]{background-color:initial;border:%?1?% solid #007aff;border-radius:%?10?%;height:%?40?%;font-size:%?26?%;line-height:%?40?%;padding:%?6?% %?15?%;margin-left:%?18?%}.bg-red[data-v-7aed5f72]{border:1px solid #ff4a2d}.bg-blue[data-v-7aed5f72]{border:1px solid #3f91e3}.bg-yellow[data-v-7aed5f72]{border:1px solid #ffb434}.text-sm[data-v-7aed5f72]{font-size:%?26?%}.info-tag[data-v-7aed5f72]{padding:%?5?% %?12?%;margin:0 0 %?16?% %?20?%;border-radius:%?10?%}.justify-between[data-v-7aed5f72]{width:96%;margin:%?5?% auto}.justify-between[data-v-7aed5f72]::after{width:%?180?%;content:""}.dt-item[data-v-7aed5f72]{width:%?180?%}.dt-image[data-v-7aed5f72]{width:%?180?%;height:%?180?%;border-radius:%?20?%}.dt-text[data-v-7aed5f72]{padding:%?10?%;background-color:#f0f0f0;overflow:hidden}.text-gray[data-v-7aed5f72]{color:#8b8b8b}.userSetting[data-v-7aed5f72]{position:absolute;top:%?44?%;right:%?30?%}uni-text[data-v-7aed5f72]{height:%?40?%;line-height:%?40?%}.sticker-image[data-v-7aed5f72]{border-radius:%?20?%;width:%?220?%;height:%?220?%}',""]),t.exports=e},"6d2f":function(t,e,i){"use strict";var n={cSchool:i("0772").default,cCard:i("3f1b").default,uSection:i("eccd").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return Object.keys(t.user).length&&t.user.avatar?i("v-uni-view",[i("v-uni-view",[i("v-uni-view",{staticClass:"bg-gray "},[i("v-uni-view",{staticClass:"user-content padding-left"},[t.user.id==t.userDB.id?i("v-uni-view",{staticClass:"flex userSetting text-lg",staticStyle:{color:"#000000"}},[i("v-uni-view",{staticClass:"padding-xs cuIcon-write",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToEditUser.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"padding-xs cuIcon-settings",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToSetting.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"flex justify-start align-center padding-top"},[i("v-uni-view",{staticClass:"cu-avatar round xl margin-left",style:{backgroundImage:"url("+t.user.avatar+")"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$utils.viewImage(t.user.avatar)}}},[i("v-uni-view",{staticClass:"cu-tag lg badge",class:"女"==t.user.sex?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})],1),i("v-uni-view",{staticClass:"content margin-left text-black margin-top-sm"},[i("v-uni-view",{staticClass:"text-bold"},[i("v-uni-text",[t._v(t._s(t.user.nickName))])],1),i("v-uni-view",{staticClass:"text-cut padding-top-xs text-sm"},[t._v(t._s(null==t.user.sign?"暂时没有介绍":t.user.sign))])],1)],1),i("v-uni-view",{staticClass:"padding flex flex-wrap"},[null!=t.user.birthDate?i("v-uni-view",{staticClass:"cu-btn border-color-red"},[t._v(t._s(t.getAge()))]):t._e(),null!=t.user.birthDate?i("v-uni-view",{staticClass:"cu-btn border-color-yellow"},[t._v(t._s(t.getConstellation()))]):t._e(),null!=t.user.city?i("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.user.city))]):t._e(),null!=t.user.grade?i("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.getCurSchool()))]):t._e()],1)],1)],1),i("c-school",{attrs:{user:t.user},on:{"nav-to-school":function(e){arguments[0]=e=t.$handleEvent(e),t.navToSchool.apply(void 0,arguments)}}}),i("c-card",[i("v-uni-view",{attrs:{slot:"top"},slot:"top"},[t._v("个性展示")]),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"text-nowrap"},[i("v-uni-text",[t._v("关键词")])],1),i("v-uni-view",{staticClass:"flex flex-wrap margin-left-xs"},t._l(t.selectTagList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"info-tag",class:t.getTagColor(n)},[t._v(t._s(e.name))])})),1)],1),i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"text-nowrap"},[t._v("关于我")]),i("v-uni-view",{staticClass:"text-gray margin-left"},[t._v(t._s(t.user.introduce))])],1)],1)],1),i("c-card",[i("v-uni-view",{attrs:{slot:"top"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToFavorite.apply(void 0,arguments)}},slot:"top"},[i("v-uni-text",[t._v("心动信号")]),t.user.id==t.userDB.id?i("v-uni-text",{staticClass:"fr cuIcon-right text-gray"}):t._e()],1),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-view",{staticClass:"margin-bottom-xs"},[i("v-uni-view",{staticClass:"margin-bottom-xs"},[t._v("心仪的TA")]),i("v-uni-view",{staticClass:"padding-left-xs text-gray"},[i("v-uni-text",[t._v(t._s(t.user.favorite))])],1)],1),i("v-uni-view",{staticClass:"margin-bottom-xs"},[i("v-uni-view",{staticClass:"margin-bottom-xs"},[t._v("感情观")]),i("v-uni-view",{staticClass:"padding-left-xs text-gray"},[i("v-uni-text",[t._v(t._s(t.user.emotion))])],1)],1)],1)],1),i("c-card",{on:{"child-click":function(e){arguments[0]=e=t.$handleEvent(e),t.navToUserHome.apply(void 0,arguments)}}},[i("u-section",{attrs:{slot:"top",bold:!1,"show-line":!1,color:"#000000",title:"缘来","sub-title":"更多"},slot:"top"}),t.stickers.length?i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"fl"},[i("v-uni-image",{staticClass:"sticker-image",attrs:{src:t.stickers[0].images[0].image},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.viewImage(t.stickers[0].images[0].image)}}})],1),i("v-uni-view",{staticClass:"margin-left fl",staticStyle:{width:"60%"}},[i("v-uni-view",{staticClass:"cuIcon-notification"},[i("v-uni-text",{staticClass:"margin-left-xs"},[t._v(t._s(t.stickers[0].title))])],1),i("v-uni-view",{staticClass:"text-wrap text-gray"},[i("v-uni-text",[t._v(t._s(t.stickers[0].introduce))])],1),i("v-uni-view",{staticClass:"text-gray"},[i("v-uni-text",[t._v(t._s(t.$utils.dateUtils.format(t.stickers[0].createTime)))])],1)],1)],1)],1):t._e()],1),i("c-card",{on:{"child-click":function(e){arguments[0]=e=t.$handleEvent(e),t.navToUserPost.apply(void 0,arguments)}}},[i("u-section",{attrs:{slot:"top",bold:!1,"show-line":!1,color:"#000000",title:"动态","sub-title":"更多"},slot:"top"}),t.stickers.length?i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[i("v-uni-view",{staticClass:"flex justify-between flex-wrap text-sm"},t._l(t.posts,(function(e){return i("v-uni-view",{key:e.id,staticClass:"dt-item"},[e.images.length>0?i("v-uni-view",[i("v-uni-image",{staticClass:"dt-image",attrs:{src:e.images[0].image},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.viewImage(e.images[0].image)}}})],1):i("v-uni-view",{staticClass:"dt-image dt-text"},[t._v(t._s(e.content))])],1)})),1)],1):t._e()],1)],1)],1):t._e()},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"70f4":function(t,e,i){"use strict";var n=i("e59b"),a=i.n(n);a.a},7244:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.scrolltolower.apply(void 0,arguments)},scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goTop()}}},[n("v-uni-image",{staticClass:"top-image",attrs:{src:i("8e68")}})],1)],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},"8b96":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".scroll-view[data-v-49f7a6d6]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-49f7a6d6]{height:100vh!important}.mid-height[data-v-49f7a6d6]{height:calc(100vh - 49px)!important}.min-height[data-v-49f7a6d6]{height:calc(100vh - 84px)!important}.goToTop[data-v-49f7a6d6]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-49f7a6d6]{width:%?44?%;height:%?68?%}",""]),t.exports=e},"8e68":function(t,e,i){t.exports=i.p+"static/img/top.f3ad3d5d.png"},"915f":function(t,e,i){"use strict";var n=i("bcac"),a=i.n(n);a.a},a195:function(t,e,i){"use strict";i.r(e);var n=i("0065"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},ae4d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-section[data-v-33b627d1]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%}.u-section__title[data-v-33b627d1]{position:relative;font-size:%?28?%;padding-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-section__title__icon-wrap[data-v-33b627d1]{position:absolute}.u-section__title__text[data-v-33b627d1]{line-height:1}.u-section__right-info[data-v-33b627d1]{color:#909399;font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-section__right-info__icon-arrow[data-v-33b627d1]{margin-left:%?6?%}',""]),t.exports=e},bcac:function(t,e,i){var n=i("8b96");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4c868861",n,!0,{sourceMap:!1,shadowMode:!1})},c35f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0}}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};e.default=n},c70c:function(t,e,i){"use strict";i.r(e);var n=i("7244"),a=i("c849");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("915f");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"49f7a6d6",null,!1,n["a"],o);e["default"]=l.exports},c849:function(t,e,i){"use strict";i.r(e);var n=i("c35f"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},ca72:function(t,e,i){var n=i("ae4d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5038210c",n,!0,{sourceMap:!1,shadowMode:!1})},e59b:function(t,e,i){var n=i("586a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7eb9cece",n,!0,{sourceMap:!1,shadowMode:!1})},e9dc:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-section",props:{title:{type:String,default:""},subTitle:{type:String,default:"更多"},right:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},bold:{type:Boolean,default:!0},color:{type:String,default:"#303133"},subColor:{type:String,default:"#909399"},showLine:{type:Boolean,default:!0},lineColor:{type:String,default:""},arrow:{type:Boolean,default:!0}},computed:{lineStyle:function(){return{left:-.9*Number(this.fontSize)+"rpx",top:-Number(this.fontSize)*("ios"==this.$u.os()?.14:.15)+"rpx"}}},methods:{rightClick:function(){this.$emit("click")}}};e.default=n},eccd:function(t,e,i){"use strict";i.r(e);var n=i("f5d5"),a=i("f6e3");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("50f2");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"33b627d1",null,!1,n["a"],o);e["default"]=l.exports},f5d5:function(t,e,i){"use strict";var n={uIcon:i("9c0b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-section"},[i("v-uni-view",{staticClass:"u-section__title",class:{"u-section--line":t.showLine},style:{fontWeight:t.bold?"bold":"normal",color:t.color,fontSize:t.fontSize+"rpx",paddingLeft:t.showLine?.7*t.fontSize+"rpx":0}},[t.showLine?i("v-uni-view",{staticClass:"u-section__title__icon-wrap u-flex",style:[t.lineStyle]},[i("u-icon",{attrs:{top:"0",name:"column-line",size:1.25*t.fontSize,bold:!0,color:t.lineColor?t.lineColor:t.color}})],1):t._e(),i("v-uni-text",{staticClass:"u-flex u-section__title__text"},[t._v(t._s(t.title))])],1),t.right||t.$slots.right?i("v-uni-view",{staticClass:"u-section__right-info",style:{color:t.subColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t.$slots.right?t._t("right"):[t._v(t._s(t.subTitle)),t.arrow?i("v-uni-view",{staticClass:"u-section__right-info__icon-arrow u-flex"},[i("u-icon",{attrs:{name:"arrow-right",size:"24",color:t.subColor}})],1):t._e()]],2):t._e()],1)},s=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}))},f6e3:function(t,e,i){"use strict";i.r(e);var n=i("e9dc"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setting"],{"027e":function(t,i,e){"use strict";e("c975"),e("a9e3"),e("b64b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var i=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){i.isShow=!1,clearTimeout(i.timer),i.timer=null,"function"===typeof i.config.callback&&i.config.callback(),i.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}else this.config.back&&this.$u.route({type:"back"})}}};i.default=n},"03d5":function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e("f3f3")),a=e("2f62"),r={data:function(){return{isSwitch:!0}},methods:(0,o.default)({},(0,a.mapActions)(["del"]),{Switch:function(t){this.isSwitch=t.detail.value},logout:function(){this.del(),this.$refs.uToast.show({title:"退出登录成功",type:"primary",url:"/pages/user/user",isTab:!0})}})};i.default=r},"0f31":function(t,i,e){"use strict";var n={cScroll:e("c70c").default,uToast:e("6858").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("c-scroll",{attrs:{midHeight:!0}},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("在个人主页展示缘来贴")]),e("v-uni-switch",{staticClass:"red scale",class:t.isSwitch?"checked":"",attrs:{checked:!!t.isSwitch},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.Switch.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("黑名单")]),e("v-uni-text",{staticClass:"cuIcon-right text-black"})],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.logout.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title"},[t._v("退出登录")]),e("v-uni-text",{staticClass:"cuIcon-right text-black"})],1),e("u-toast",{ref:"uToast"})],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},"2b4e":function(t,i,e){var n=e("43dc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("1e746cc6",n,!0,{sourceMap:!1,shadowMode:!1})},"436a":function(t,i,e){"use strict";e.r(i);var n=e("027e"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"43dc":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".cu-form-group[data-v-676352e2]{min-height:%?80?%!important}.cu-form-group .title[data-v-676352e2]{min-width:calc(4em + 15px)}.scale[data-v-676352e2]{-webkit-transform:scale(.7);transform:scale(.7)}",""]),t.exports=i},6858:function(t,i,e){"use strict";e.r(i);var n=e("f98b"),o=e("436a");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("b38f");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"0a1ec724",null,!1,n["a"],r);i["default"]=s.exports},7636:function(t,i,e){"use strict";var n=e("2b4e"),o=e.n(n);o.a},"7faf":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".scroll-view[data-v-54a231b0]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-54a231b0]{height:100vh!important}.mid-height[data-v-54a231b0]{height:calc(100vh - 44px)!important}.min-height[data-v-54a231b0]{height:calc(100vh - 84px)!important}.goToTop[data-v-54a231b0]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-54a231b0]{width:%?44?%;height:%?68?%}",""]),t.exports=i},"81dc":function(t,i,e){"use strict";e.r(i);var n=e("0f31"),o=e("92b4");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("7636");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"676352e2",null,!1,n["a"],r);i["default"]=s.exports},"821e":function(t,i,e){var n=e("7faf");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("0890dd40",n,!0,{sourceMap:!1,shadowMode:!1})},8849:function(t,i,e){"use strict";var n=e("821e"),o=e.n(n);o.a},"8e68":function(t,i,e){t.exports=e.p+"static/img/top.f3ad3d5d.png"},"92b4":function(t,i,e){"use strict";e.r(i);var n=e("03d5"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},9686:function(t,i,e){"use strict";var n,o=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.scrolltolower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop()}}},[n("v-uni-image",{staticClass:"top-image",attrs:{src:e("8e68")}})],1)],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))},b38f:function(t,i,e){"use strict";var n=e("eee3"),o=e.n(n);o.a},c35f:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0}}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};i.default=n},c70c:function(t,i,e){"use strict";e.r(i);var n=e("9686"),o=e("c849");for(var a in o)"default"!==a&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("8849");var r,c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"54a231b0",null,!1,n["a"],r);i["default"]=s.exports},c849:function(t,i,e){"use strict";e.r(i);var n=e("c35f"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},d1bd:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-toast[data-v-0a1ec724]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-0a1ec724]{opacity:1}.u-text[data-v-0a1ec724]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-0a1ec724]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-0a1ec724]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-0a1ec724]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-0a1ec724]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-0a1ec724]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-0a1ec724]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-0a1ec724]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-0a1ec724]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-0a1ec724]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-0a1ec724]{color:#fff;background-color:#585858}',""]),t.exports=i},eee3:function(t,i,e){var n=e("d1bd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("5048626b",n,!0,{sourceMap:!1,shadowMode:!1})},f98b:function(t,i,e){"use strict";var n={uIcon:e("9c0b").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[e("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?e("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.config.type}}):t._e()],1),e("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},a=[];e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return n}))}}]);
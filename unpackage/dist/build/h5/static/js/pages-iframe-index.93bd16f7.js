(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-iframe-index"],{"0fe2":function(e,t,i){"use strict";i.r(t);var r=i("e60f"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t["default"]=n.a},2179:function(e,t,i){var r=i("b942");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("e9fb1d2e",r,!0,{sourceMap:!1,shadowMode:!1})},"31b2":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return r}));var r={uIcon:i("9c0b").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-image",style:[e.wrapStyle,e.backgroundStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.isError?e._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)},attrs:{src:e.src,mode:e.mode,"lazy-load":e.lazyLoad},on:{error:function(t){arguments[0]=t=e.$handleEvent(t),e.onErrorHandler.apply(void 0,arguments)},load:function(t){arguments[0]=t=e.$handleEvent(t),e.onLoadHandler.apply(void 0,arguments)}}}),e.showLoading&&e.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius),backgroundColor:this.bgColor}},[e.$slots.loading?e._t("loading"):i("u-icon",{attrs:{name:e.loadingIcon,width:e.width,height:e.height}})],2):e._e(),e.showError&&e.isError&&!e.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.borderRadius)}},[e.$slots.error?e._t("error"):i("u-icon",{attrs:{name:e.errorIcon,width:e.width,height:e.height}})],2):e._e()],1)},o=[]},3574:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return r}));var r={uImage:i("59bb").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"container bg-white",attrs:{id:"jumpid"}},[e.showCode?i("v-uni-view",{staticClass:"imageSrc"},[i("v-uni-view",[i("u-image",{staticStyle:{margin:"0 auto"},attrs:{width:"260px",height:"260px",src:"/static/conlove.online.png"}})],1),i("v-uni-view",{staticStyle:{"font-size":"20px","text-align":"center"}},[e._v("请使用手机浏览器，扫描上方二维码预览 (:")])],1):e._e(),i("div",{attrs:{id:"showMobilePreview"}},[i("v-uni-view",[i("v-uni-view",{staticClass:"mobile_preview_frame"},[e.ismobile?e._e():i("iframe",{style:"width:"+e.width,attrs:{src:e.url,id:"YuFrameMobilePreview",name:"YuFrameMobilePreview",frameborder:"0"}})])],1)],1)],1)},o=[]},4321:function(e,t,i){"use strict";i.r(t);var r=i("3574"),n=i("c916");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("a5e5");var a,d=i("f0c5"),s=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"456904b3",null,!1,r["a"],a);t["default"]=s.exports},"52e8":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-8cb37952]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-8cb37952]{width:100%;height:100%}.u-image__loading[data-v-8cb37952], .u-image__error[data-v-8cb37952]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),e.exports=t},"59bb":function(e,t,i){"use strict";i.r(t);var r=i("31b2"),n=i("0fe2");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("88e0");var a,d=i("f0c5"),s=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"8cb37952",null,!1,r["a"],a);t["default"]=s.exports},"88e0":function(e,t,i){"use strict";var r=i("f3ec"),n=i.n(r);n.a},a5e5:function(e,t,i){"use strict";var r=i("2179"),n=i.n(r);n.a},b942:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-456904b3]{height:100%}.container iframe[data-v-456904b3]{display:block;width:375px;height:100%;opacity:0;-webkit-animation:fadeShow-data-v-456904b3 .3s ease-in forwards .3s;animation:fadeShow-data-v-456904b3 .3s ease-in forwards .3s}@-webkit-keyframes fadeShow-data-v-456904b3{0%{opacity:0}100%{opacity:1}}@keyframes fadeShow-data-v-456904b3{0%{opacity:0}100%{opacity:1}}.imageSrc[data-v-456904b3]{z-index:9999;position:absolute;left:20%;top:25%}#showMobilePreview[data-v-456904b3]{z-index:9999;width:374px;height:98vh;position:absolute;right:%?20?%;border:6px solid #eeeff2;text-align:center}.mobile_preview_header[data-v-456904b3]{display:block;position:absolute;top:0;left:0;height:40px;width:387px;background:#eeeff2;text-align:center;line-height:40px;border-top-right-radius:50px;border-top-left-radius:50px}.mobile_preview_header_icon[data-v-456904b3]{display:inline-block;width:65px;height:10px;background:#c8c9cc;border-radius:9px;vertical-align:middle;margin-top:18px}.mobile_preview_frame[data-v-456904b3]{min-height:294px;height:98vh;display:block}#YuFrameMobilePreview[data-v-456904b3]{border:none;width:375px;height:100%}.mobile_preview_footer[data-v-456904b3]{display:block;position:absolute;bottom:0;left:0;height:52px;width:387px;background:#eeeff2;text-align:center;line-height:45px;border-bottom-right-radius:50px;border-bottom-left-radius:50px}.mobile_preview_footer_icon[data-v-456904b3]{display:inline-block;width:43px;height:43px;background:#c8c9cc;border-radius:50%;vertical-align:middle}',""]),e.exports=t},bd26:function(e,t,i){"use strict";(function(e){i("99af"),i("ac1f"),i("466d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{url:"",width:"",ismobile:!0,showCode:!1,width_:0}},onLoad:function(t){this.ismobile=this.isMobile();var i="pages/home/index";e.log(this.ismobile),this.ismobile?uni.redirectTo({url:"/".concat(i)}):this.url="".concat(location.href).concat(i)},onShow:function(){},mounted:function(){this.$nextTick((function(){this.init()}))},methods:{init:function(){var e=this;uni.getSystemInfo({success:function(t){t.windowWidth>400&&(e.showCode=!0),e.width_=t.windowWidth}})},isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return!!e}}};t.default=r}).call(this,i("5a52")["default"])},c916:function(e,t,i){"use strict";i.r(t);var r=i("bd26"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t["default"]=n.a},e60f:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(e){e?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),e.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(e.opacity=this.opacity,e.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),e}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var e=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){e.durationTime=e.duration,e.opacity=1,setTimeout((function(){e.removeBgColor()}),e.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};t.default=r},f3ec:function(e,t,i){var r=i("52e8");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("9c6be8f2",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
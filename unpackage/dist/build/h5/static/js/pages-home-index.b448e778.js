(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"16b4":function(t,o,a){"use strict";var i=a("7add"),e=a.n(i);e.a},"1d74":function(t,o,a){"use strict";a.r(o);var i=a("6e63"),e=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(o,t,(function(){return i[t]}))}(n);o["default"]=e.a},"33f2":function(t,o,a){"use strict";var i={cScroll:a("c70c").default},e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("c-scroll",{attrs:{maxHeight:!0}},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/image/yuanlai.jpg",mode:"scaleToFill"}})],1)},n=[];a.d(o,"b",(function(){return e})),a.d(o,"c",(function(){return n})),a.d(o,"a",(function(){return i}))},5603:function(t,o,a){"use strict";a.r(o);var i=a("33f2"),e=a("1d74");for(var n in e)"default"!==n&&function(t){a.d(o,t,(function(){return e[t]}))}(n);var c,l=a("f0c5"),r=Object(l["a"])(e["default"],i["b"],i["c"],!1,null,"217102e1",null,!1,i["a"],c);o["default"]=r.exports},"6e63":function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={onLoad:function(){setTimeout((function(){uni.switchTab({url:"/pages/home/home"})}),2500)}};o.default=i},"7add":function(t,o,a){var i=a("aafe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("630f02db",i,!0,{sourceMap:!1,shadowMode:!1})},"8e68":function(t,o,a){t.exports=a.p+"static/img/top.f3ad3d5d.png"},"9e8c":function(t,o,a){"use strict";var i,e=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":"",t.$utils.isSafari()?"isSafari":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(o){arguments[0]=o=t.$handleEvent(o),t.scrolltolower.apply(void 0,arguments)},scroll:function(o){arguments[0]=o=t.$handleEvent(o),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.goTop()}}},[i("v-uni-image",{staticClass:"top-image",attrs:{src:a("8e68")}})],1)],1)},n=[];a.d(o,"b",(function(){return e})),a.d(o,"c",(function(){return n})),a.d(o,"a",(function(){return i}))},aafe:function(t,o,a){var i=a("24fb");o=i(!1),o.push([t.i,".scroll-view[data-v-33a53ea2]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-33a53ea2]{height:100vh!important}.mid-height[data-v-33a53ea2]{height:calc(100vh - 49px)!important}.min-height[data-v-33a53ea2]{height:calc(100vh - 94px)!important}.max-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 75px)!important}.mid-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 49px - 75px)!important}.min-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 94px - 75px)!important}.goToTop[data-v-33a53ea2]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-33a53ea2]{width:%?44?%;height:%?68?%}",""]),t.exports=o},c35f:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0},isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};o.default=i},c70c:function(t,o,a){"use strict";a.r(o);var i=a("9e8c"),e=a("c849");for(var n in e)"default"!==n&&function(t){a.d(o,t,(function(){return e[t]}))}(n);a("16b4");var c,l=a("f0c5"),r=Object(l["a"])(e["default"],i["b"],i["c"],!1,null,"33a53ea2",null,!1,i["a"],c);o["default"]=r.exports},c849:function(t,o,a){"use strict";a.r(o);var i=a("c35f"),e=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(o,t,(function(){return i[t]}))}(n);o["default"]=e.a}}]);
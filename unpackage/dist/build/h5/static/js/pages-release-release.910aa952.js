(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-release-release"],{1295:function(t,e,a){"use strict";a.r(e);var i=a("3ff0"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"136c":function(t,e,a){"use strict";a.r(e);var i=a("cc75"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},2422:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-form",{staticClass:"form"},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("标题：")]),a("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"发帖的标题(最多14个字)",maxlength:"14"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("性别：")]),a("v-uni-picker",{attrs:{range:t.sexPicker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sexChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.sex))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("学校：")]),a("v-uni-input",{staticClass:"text-right",attrs:{placeholder:"西安电子科技大学"},model:{value:t.data.school,callback:function(e){t.$set(t.data,"school",e)},expression:"data.school"}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("年级:")]),a("v-uni-picker",{attrs:{range:t.gradePicker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.gradeChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.data.grade))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("生日：")]),a("v-uni-picker",{attrs:{mode:"date",value:t.data.age,start:"1970-09-01",end:"2100-09-01"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ageChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.data.age))])],1)],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("身高：")]),a("v-uni-input",{staticStyle:{"text-align":"right"},attrs:{placeholder:"165",maxlength:"14",name:"height"},model:{value:t.data.height,callback:function(e){t.$set(t.data,"height",e)},expression:"data.height"}})],1),a("v-uni-view",{staticClass:"cu-form-group solid-bottom"},[a("v-uni-view",{staticClass:"title"},[t._v("关于你：")]),a("v-uni-textarea",{attrs:{maxlength:"60","auto-height":!0,placeholder:"介绍下你自己, 收到的秋波的可能性更高哦~ (最少10个字)"},model:{value:t.data.introduce,callback:function(e){t.$set(t.data,"introduce",e)},expression:"data.introduce"}})],1),a("v-uni-view",{staticClass:"flex  padding-top-xl margin-top justify-center"},[a("v-uni-button",{staticClass:"cu-btn bg-red round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next()}}},[t._v("下一步")])],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},"2f71":function(t,e,a){"use strict";var i=a("ee27");a("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("d0ff")),s=a("2f62"),c={computed:(0,s.mapState)(["homeData"]),data:function(){return{images:[],isLoading:!1}},mounted:function(){this.images=this.homeData.images},methods:{ChooseImage:function(){var t=this;uni.chooseImage({success:function(e){var a;(a=t.images).push.apply(a,(0,n.default)(e.tempFilePaths))}})},ViewImage:function(t){uni.previewImage({urls:this.images,current:t.currentTarget.dataset.url})},DelImg:function(t){var e=this;uni.showModal({content:"确定要删除照片吗？",cancelText:"取消",confirmText:"确定",success:function(a){a.confirm&&e.images.splice(t.currentTarget.dataset.index,1)}})},nextSec:function(){var t=this;this.images&&0!=this.images.length?(uni.showLoading({title:"发布中"}),setTimeout((function(){uni.hideLoading(),t.$emit("next-sec",t.images)}),500)):uni.showToast({title:"请至少选择一张照片",icon:"none"})},back:function(){var t=this;uni.showModal({title:"哎呀",content:"还没有完成，确定返回上一步吗？",cancelText:"手滑手滑",confirmText:"确定",success:function(e){e.confirm&&t.$emit("back")}})}}};e.default=c},3134:function(t,e,a){"use strict";var i=a("d279"),n=a.n(i);n.a},"31e8":function(t,e,a){"use strict";var i=a("da5f"),n=a.n(i);n.a},"3e53":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"box-display"},[a("v-uni-view",{staticClass:"bg-white text-gray margin-left margin-bottom text-sm"},[a("v-uni-view",{staticClass:"text-height"},[t._v("上传帖子的图片："+t._s(t.images.length)+"/6")]),a("v-uni-view",[t._v("(第一张将作为封面展示，真实图片将优先获得曝光率~)")])],1),a("v-uni-view",{staticStyle:{height:"700rpx"}},[a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"grid col-3 grid-square flex-sub"},[t._l(t.images,(function(e,i){return a("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.images[i]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ViewImage.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.images[i],mode:"aspectFill"}}),a("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.DelImg.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.images.length<6?a("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-red round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("上一步")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-red round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.nextSec.apply(void 0,arguments)}}},[t._v("发布"),a("v-uni-text",{staticClass:"cuIcon-right"})],1)],1)],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},"3ff0":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("f3f3")),s=a("2f62"),c=i(a("a1f0")),o=i(a("ff10")),u={components:{releaseFirst:c.default,releaseSecond:o.default},data:function(){return{basicsList:[{cuIcon:"usefullfill",name:"填写信息"},{cuIcon:"radioboxfill",name:"上传图片"}],basics:0,data:{userDto:{avatarUrl:"/static/img/face.jpg",nickname:"祢豆子"}}}},methods:(0,n.default)({},(0,s.mapMutations)({addNewHome:"addNewHome"}),{next:function(t){this.basics++,this.data=Object.assign(this.data,t)},nextSec:function(t){this.data.images=t,this.data.id=1e3*Math.random()+1e3,this.addNewHome(this.data),console.log(this.data),uni.switchTab({url:"/pages/home/home"})},back:function(){this.basics--}})};e.default=u},"71d2":function(t,e,a){"use strict";a.r(e);var i=a("2f71"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},9851:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".cu-form-group[data-v-3694baf6]{width:90%;margin:0 auto}uni-textarea[data-v-3694baf6]{min-height:%?100?%;max-height:%?200?%;line-height:%?50?%}.cu-btn[data-v-3694baf6]{padding:0 %?100?%;height:%?80?%}",""]),t.exports=e},a1f0:function(t,e,a){"use strict";a.r(e);var i=a("2422"),n=a("136c");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("31e8");var c,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"3694baf6",null,!1,i["a"],c);e["default"]=u.exports},cc75:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("2f62"),n={computed:(0,i.mapState)(["homeData"]),data:function(){return{data:{title:"",sex:0,school:"",grade:"请选择",age:"请选择",height:null,introduce:""},sex:"请选择",isLogin:!1,isLoading:!1,loadProgress:0,ownInfoPost:!1,phone:"",sexPicker:["男","女"],gradeIndex:0,gradePicker:["已工作","博士","研三","研二","研一","大四","大三","大二","大一"]}},mounted:function(){this.data=this.homeData,this.sex=this.sexPicker[this.data.sex]},methods:{gradeChange:function(t){this.data.grade=this.gradePicker[t.detail.value]},ageChange:function(t){this.data.age=t.detail.value},sexChange:function(t){this.data.sex=t.detail.value,this.sex=this.sexPicker[t.detail.value]},next:function(){var t=this.data;""===t.title?this.toast("请填写帖子标题!"):"请选择"===this.sex?this.toast("请选取性别!"):""===t.school?this.toast("请填写学校!"):"请选择"===t.grade?this.toast("请选取年级!"):"请选择"===t.age?this.toast("请选取生日!"):null===t.height?this.toast("请输入身高!"):!/^[0-9]+$/.test(t.height)||t.height<150||t.height>210?this.toast("请输入正确身高"):t.introduce.length<10?this.toast("请认真填写个人简介，最少10个字!无效帖子将有可能被管理员处理!"):this.$emit("next",this.data)},toast:function(t){uni.showToast({title:t,icon:"none"})}}};e.default=n},d0ff:function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function n(t){if(Array.isArray(t))return i(t)}a.r(e);a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("fb6a"),a("25f0");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return n(t)||s(t)||c(t)||o()}a.d(e,"default",(function(){return u}))},d279:function(t,e,a){var i=a("e943");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0b3f2f30",i,!0,{sourceMap:!1,shadowMode:!1})},d2fe:function(t,e,a){"use strict";a.r(e);var i=a("f586"),n=a("1295");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var c,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"2e434d60",null,!1,i["a"],c);e["default"]=u.exports},da5f:function(t,e,a){var i=a("9851");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("37eea078",i,!0,{sourceMap:!1,shadowMode:!1})},e943:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".box-display[data-v-16ff81a4]{width:90%;margin:0 auto}.text-height[data-v-16ff81a4]{height:%?50?%;line-height:%?50?%}.cu-bar[data-v-16ff81a4]{width:90%;margin:0 auto}.cu-btn[data-v-16ff81a4]{padding:0 %?65?%;height:%?80?%}.text-sm[data-v-16ff81a4]{font-size:%?26?%}",""]),t.exports=e},f586:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-scroll",{attrs:{"max-height":!0}},[a("v-uni-view",{staticClass:"bg-white padding"},[a("v-uni-view",{staticClass:"cu-steps"},t._l(t.basicsList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"cu-item",class:i>t.basics?"":"text-red"},[a("v-uni-text",{class:"cuIcon-"+e.cuIcon}),t._v(t._s(e.name))],1)})),1)],1),a("release-first",{directives:[{name:"show",rawName:"v-show",value:0==t.basics,expression:"basics == 0"}],on:{next:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}}),a("release-second",{directives:[{name:"show",rawName:"v-show",value:1==t.basics,expression:"basics == 1"}],on:{back:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)},"next-sec":function(e){arguments[0]=e=t.$handleEvent(e),t.nextSec.apply(void 0,arguments)}}})],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},ff10:function(t,e,a){"use strict";a.r(e);var i=a("3e53"),n=a("71d2");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("3134");var c,o=a("f0c5"),u=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"16ff81a4",null,!1,i["a"],c);e["default"]=u.exports}}]);
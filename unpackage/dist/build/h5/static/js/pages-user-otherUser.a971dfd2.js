(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-otherUser"],{"15a0":function(t,i,e){"use strict";var a=e("4999"),s=e.n(a);s.a},4999:function(t,i,e){var a=e("beb7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("e0149f38",a,!0,{sourceMap:!1,shadowMode:!1})},6649:function(t,i,e){t.exports=e.p+"static/img/view-2.3133fb31.jpg"},8575:function(t,i,e){t.exports=e.p+"static/img/view-3.0a67edae.jpg"},"8ae0":function(t,i,e){"use strict";e.r(i);var a=e("d045"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=s.a},beb7:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'.content[data-v-639d12d2]{max-width:%?400?%}.cu-btn[data-v-639d12d2]{background-color:initial;border:%?1?% solid #007aff;border-radius:%?10?%;height:%?40?%;font-size:%?26?%;line-height:%?40?%;padding:%?6?% %?15?%;margin-left:%?18?%}.card[data-v-639d12d2]{box-shadow:0 2px 5px #ededed;width:86%;margin:%?40?% auto;border:1px solid #cecece;border-radius:%?15?%;color:#000;padding:%?30?% %?20?%}.card uni-text[data-v-639d12d2]{height:%?46?%;line-height:%?46?%}.bg-red[data-v-639d12d2]{border:1px solid #ff4a2d}.bg-blue[data-v-639d12d2]{border:1px solid #3f91e3}.bg-yellow[data-v-639d12d2]{border:1px solid #ffb434}.text-sm[data-v-639d12d2]{font-size:%?26?%}.info-tag[data-v-639d12d2]{padding:%?5?% %?12?%;margin:0 0 %?16?% %?20?%;border-radius:%?10?%}.justify-between[data-v-639d12d2]{width:96%;margin:%?5?% auto}.justify-between[data-v-639d12d2]::after{width:%?180?%;content:""}.dt-item[data-v-639d12d2]{width:%?180?%}.dt-image[data-v-639d12d2]{width:%?180?%;height:%?180?%;border-radius:%?20?%}.text-gray[data-v-639d12d2]{color:#8b8b8b}.userSetting[data-v-639d12d2]{position:absolute;top:%?44?%;right:%?30?%}.like-box[data-v-639d12d2]{background-color:hsla(0,0%,87.1%,.4);height:%?80?%;border-radius:50%;z-index:99}.like-box .like[data-v-639d12d2]{margin:%?6?% %?6?%;width:%?70?%;height:%?70?%;z-index:999}',""]),t.exports=i},cffc:function(t,i,e){t.exports=e.p+"static/img/view-1.a6aafe35.jpg"},d045:function(t,i,e){"use strict";e("ac1f"),e("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("2f62"),s={computed:(0,a.mapState)(["isLogin"]),data:function(){return{user:{name:"AoA",avatar:"/static/img/im/face/face_2.jpg",sex:0,date:"1998-10-28",city:"西安",sign:"我有我的奥妙",school:"西安电子科技大学",major:"计算机专业",grade:"研一",introduce:"约桌游吗~"},selectTagList:["吃鸡","腿特长","王者荣耀","工学类"],gradeList:{"一":1,"二":2,"三":3,"四":4},cardState:0,isLike:!1}},methods:{navToEditUser:function(){uni.navigateTo({url:"/pages/user/userEdit"})},getGrade:function(){var t=this.user.grade;if("已工作"===t)return t;var i=this.$utils.dateUtils.currentDate().split("-")[0]-this.gradeList[t[1]],e=i+"级"+("研"===t[0]?"硕士":"本科");return e},getTagColor:function(t){t%=3;var i="";switch(t){case 0:i="bg-red";break;case 1:i="bg-yellow";break;case 2:i="bg-blue";break}return i},getAge:function(){return this.$utils.dateUtils.GetAge(this.user.date)+"岁"},getConstellation:function(){return this.$utils.dateUtils.getconstellation(this.user.date)},getCurSchool:function(){var t=this.user.grade;if("已工作"===t)return t;var i=("研"===t[0]?"硕士":"本科")+"在读";return i},navToUserPost:function(){uni.navigateTo({url:"/pages/square/sub/userPost"})},navToUserHome:function(){uni.navigateTo({url:"/pages/home/sub/userHome"})},navToSetting:function(){uni.navigateTo({url:"/pages/user/setting"})},navToLogin:function(){uni.navigateTo({url:"/pages/enter/login"})},likeClick:function(){this.isLike=!this.isLike,uni.showToast({title:this.isLike?"暗送秋波~":"取消秋波",icon:"none"})}}};i.default=s},d841:function(t,i,e){"use strict";var a,s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("c-scroll",{attrs:{midHeight:!0}},[a("v-uni-view",{staticClass:"bg-gray"},[a("v-uni-view",{staticClass:"user-content padding-left"},[a("v-uni-view",{staticClass:"flex justify-start align-center padding-top"},[a("v-uni-view",{staticClass:"cu-avatar round xl margin-left",style:{backgroundImage:"url("+t.user.avatar+")"}},[a("v-uni-view",{staticClass:"cu-tag lg badge",class:t.user.sex?"cuIcon-male bg-blue":"cuIcon-female bg-pink"})],1),a("v-uni-view",{staticClass:"content margin-left text-black margin-top-sm"},[a("v-uni-view",{staticClass:"text-bold"},[a("v-uni-text",[t._v(t._s(t.user.name))])],1),a("v-uni-view",{staticClass:"text-cut padding-top-xs text-sm"},[t._v(t._s(t.user.sign))])],1)],1),a("v-uni-view",{staticClass:"padding flex flex-wrap"},[a("v-uni-view",{staticClass:"cu-btn border-color-red"},[t._v(t._s(t.getAge()))]),a("v-uni-view",{staticClass:"cu-btn border-color-yellow"},[t._v(t._s(t.getConstellation()))]),a("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.user.city))]),a("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.getCurSchool()))])],1)],1)],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"margin-bottom-xs"},[t._v("学校信息")]),a("v-uni-view",{staticClass:"padding-left text-sm"},[a("v-uni-view",[a("v-uni-text",[t._v("学校")]),a("v-uni-text",{staticClass:"text-gray margin-left"},[t._v(t._s(t.user.school))])],1),a("v-uni-view",[a("v-uni-text",[t._v("专业")]),a("v-uni-text",{staticClass:"text-gray margin-left"},[t._v(t._s(t.user.major))])],1),a("v-uni-view",[a("v-uni-text",[t._v("年级")]),a("v-uni-text",{staticClass:"text-gray margin-left"},[t._v(t._s(t.getGrade()))])],1)],1)],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"margin-bottom-xs"},[t._v("个性展示")]),a("v-uni-view",{staticClass:"padding-left text-sm"},[a("v-uni-view",{staticClass:"flex justify-start"},[a("v-uni-view",{staticClass:"text-nowrap"},[a("v-uni-text",[t._v("关键词")])],1),a("v-uni-view",{staticClass:"flex flex-wrap margin-left-xs"},t._l(t.selectTagList,(function(i,e){return a("v-uni-view",{key:e,staticClass:"info-tag",class:t.getTagColor(e)},[t._v(t._s(i))])})),1)],1),a("v-uni-view",{staticClass:"flex justify-start"},[a("v-uni-view",{staticClass:"text-nowrap"},[t._v("关于我")]),a("v-uni-view",{staticClass:"text-gray margin-left"},[t._v(t._s(t.user.introduce))])],1)],1)],1),a("v-uni-view",{staticClass:"card",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToUserHome.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"margin-bottom-xs",staticStyle:{height:"46rpx"}},[a("v-uni-view",{staticClass:"fl"},[t._v("缘来")])],1),a("v-uni-view",{staticClass:"padding-left text-sm"},[a("v-uni-view",{staticClass:"flex justify-start"},[a("v-uni-view",{staticClass:"fl"},[a("v-uni-image",{staticStyle:{width:"220rpx"},attrs:{mode:"widthFix",src:e("df03")}})],1),a("v-uni-view",{staticClass:"margin-left fl",staticStyle:{width:"60%"}},[a("v-uni-view",{staticClass:"cuIcon-notification"},[a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("等一个人 等二个人 等三个人 等四个人开黑")])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"text-gray margin-right"},[t._v("2020-6-15 14:27:26")]),a("v-uni-text",{staticClass:"cuIcon-likefill text-red"},[t._v("20")])],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"card",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToUserPost.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"margin-bottom-xs"},[a("v-uni-text",[t._v("动态")])],1),a("v-uni-view",{staticClass:"flex justify-between flex-wrap text-sm"},[a("v-uni-view",{staticClass:"dt-item"},[a("v-uni-image",{staticClass:"dt-image",attrs:{src:e("cffc")}}),a("v-uni-view",{staticClass:"text-cut"},[t._v("谁的青春这么累谁的青春这么累")])],1),a("v-uni-view",{staticClass:"dt-item"},[a("v-uni-image",{staticClass:"dt-image",attrs:{src:e("6649")}}),a("v-uni-view",{staticClass:"text-cut"},[t._v("谁的青春这么累谁的青春这么累")])],1),a("v-uni-view",{staticClass:"dt-item"},[a("v-uni-image",{staticClass:"dt-image",attrs:{src:e("8575")}}),a("v-uni-view",{staticClass:"text-cut"},[t._v("谁的青春这么累谁的青春这么累")])],1)],1)],1),a("v-uni-view",{staticClass:"bg-gray margin-bottom flex align-center justify-center padding-xs"},[a("v-uni-view",{staticClass:"like-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.likeClick.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"like",attrs:{src:t.isLike?"/static/image/pic-like-active.png":"/static/image/pic-like-normal.png"}})],1)],1)],1)},n=[];e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}))},df03:function(t,i,e){t.exports=e.p+"static/img/wyb.03e0fb39.jpg"},f694:function(t,i,e){"use strict";e.r(i);var a=e("d841"),s=e("8ae0");for(var n in s)"default"!==n&&function(t){e.d(i,t,(function(){return s[t]}))}(n);e("15a0");var r,u=e("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"639d12d2",null,!1,a["a"],r);i["default"]=c.exports}}]);
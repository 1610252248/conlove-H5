(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-otherUser"],{"163c":function(t,e,i){"use strict";var a={cCustomMid:i("fc98").default,cScroll:i("c70c").default,cSchool:i("0772").default,uSection:i("eccd").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("c-custom-mid",[i("template",{attrs:{slot:"center"},slot:"center"},[t._v(t._s(t.user.nickName+"的缘来"))])],2),i("c-scroll",[t.user.avatar?i("v-uni-view",{staticClass:"bg-gray "},[i("v-uni-view",{staticClass:"user-content padding-left"},[i("v-uni-view",{staticClass:"flex justify-start align-center padding-top"},[i("v-uni-view",{staticClass:"cu-avatar round xl margin-left",style:{backgroundImage:"url("+t.user.avatar+")"}},[i("v-uni-view",{staticClass:"cu-tag lg badge",class:t.user.sex?"cuIcon-male bg-blue":"cuIcon-female bg-pink"})],1),i("v-uni-view",{staticClass:"content margin-left text-black margin-top-sm"},[i("v-uni-view",{staticClass:"text-bold"},[i("v-uni-text",[t._v(t._s(t.user.nickName))])],1),i("v-uni-view",{staticClass:"text-cut padding-top-xs text-sm"},[t._v(t._s(null==t.user.sign?"暂时没有介绍":t.user.sign))])],1)],1),i("v-uni-view",{staticClass:"padding flex flex-wrap"},[null!=t.user.birthDate?i("v-uni-view",{staticClass:"cu-btn border-color-red"},[t._v(t._s(t.getAge()))]):t._e(),null!=t.user.birthDate?i("v-uni-view",{staticClass:"cu-btn border-color-yellow"},[t._v(t._s(t.getConstellation()))]):t._e(),null!=t.user.city?i("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.user.city))]):t._e(),null!=t.user.grade?i("v-uni-view",{staticClass:"cu-btn border-color-blue"},[t._v(t._s(t.getCurSchool()))]):t._e()],1)],1)],1):t._e(),i("c-school",{attrs:{user:t.user}}),i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"margin-bottom-xs"},[t._v("个性展示")]),i("v-uni-view",{staticClass:"padding-left text-sm"},[i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"text-nowrap"},[i("v-uni-text",[t._v("关键词")])],1),i("v-uni-view",{staticClass:"flex flex-wrap margin-left-xs"},t._l(t.selectTagList,(function(e,a){return i("v-uni-view",{key:a,staticClass:"info-tag",class:t.getTagColor(a)},[t._v(t._s(e.name))])})),1)],1),i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"text-nowrap"},[t._v("关于我")]),i("v-uni-view",{staticClass:"text-gray margin-left"},[t._v(t._s(t.user.introduce))])],1)],1)],1),i("v-uni-view",{staticClass:"card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToUserHome.apply(void 0,arguments)}}},[i("u-section",{staticClass:"margin-bottom-sm",attrs:{bold:!1,"show-line":!1,color:"#000000",title:"缘来","sub-title":"更多"}}),t._l(t.stickers,(function(e){return i("v-uni-view",{key:e.id,staticClass:"padding-left text-sm"},[i("v-uni-view",{staticClass:"flex justify-start"},[i("v-uni-view",{staticClass:"fl"},[i("v-uni-image",{staticClass:"sticker-image",attrs:{src:e.images[0].image},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.viewImage(e.images[0].image)}}})],1),i("v-uni-view",{staticClass:"margin-left fl",staticStyle:{width:"60%"}},[i("v-uni-view",{staticClass:"cuIcon-notification"},[i("v-uni-text",{staticClass:"margin-left-xs"},[t._v(t._s(e.title))])],1),i("v-uni-view",{staticClass:"text-wrap text-gray"},[i("v-uni-text",[t._v(t._s(e.introduce))])],1),i("v-uni-view",{staticClass:"text-gray"},[i("v-uni-text",[t._v(t._s(t.$utils.dateUtils.format(e.createTime)))])],1)],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToUserPost.apply(void 0,arguments)}}},[i("u-section",{staticClass:"margin-bottom-sm",attrs:{bold:!1,"show-line":!1,color:"#000000",title:"动态","sub-title":"更多"}}),i("v-uni-view",{staticClass:"flex justify-between flex-wrap text-sm"},t._l(t.posts,(function(e){return i("v-uni-view",{key:e.id,staticClass:"dt-item"},[e.images.length>0?i("v-uni-view",[i("v-uni-image",{staticClass:"dt-image",attrs:{src:e.images[0].image},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.viewImage(e.images[0].image)}}})],1):i("v-uni-view",{staticClass:"dt-image dt-text"},[t._v(t._s(e.content))])],1)})),1)],1)],1),i("v-uni-view",{staticClass:"bg-gray margin-bottom flex align-center justify-center padding-xs"},[i("v-uni-view",{staticClass:"like-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.likeClick.apply(void 0,arguments)}}},[t.userDB.id!=t.user.id?i("v-uni-image",{staticClass:"like",attrs:{src:t.isLike?"/static/image/pic-like-active.png":"/static/image/pic-like-normal.png"}}):t._e()],1)],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"1f49":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={methods:{BackPage:function(){1!=getCurrentPages().length?uni.navigateBack({delta:1}):history.back()},send:function(){this.$emit("send")}}};e.default=a},"6df4":function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"navBar cu-bar"},[i("v-uni-view",{staticClass:"action margin-left ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"text-icon"},[i("v-uni-text",{staticClass:"cuIcon-back"})],1)],1),i("v-uni-view",{staticClass:"content text-bold"},[t._t("center")],2)],1),i("v-uni-view",{staticStyle:{height:"90rpx"}})],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},7169:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".navBar[data-v-26c92310]{position:fixed;top:0;width:100%;height:%?90?%;line-height:%?90?%;z-index:111;background-color:#fff}.cuIcon-back[data-v-26c92310]{font-size:%?42?%}.cu-btn.sm[data-v-26c92310]{padding:0 %?22?%;font-size:%?26?%;height:%?48?%}",""]),t.exports=e},"872c":function(t,e,i){var a=i("9f6e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("50782a6d",a,!0,{sourceMap:!1,shadowMode:!1})},"8a14":function(t,e,i){var a=i("7169");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("b29d4d84",a,!0,{sourceMap:!1,shadowMode:!1})},"8ae0":function(t,e,i){"use strict";i.r(e);var a=i("d045"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},"9f6e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.content[data-v-0c5ff440]{max-width:%?400?%}.cu-btn[data-v-0c5ff440]{background-color:initial;border:%?1?% solid #007aff;border-radius:%?10?%;height:%?40?%;font-size:%?26?%;line-height:%?40?%;padding:%?6?% %?15?%;margin-left:%?18?%}.card[data-v-0c5ff440]{box-shadow:0 2px 5px #ededed;width:86%;margin:%?40?% auto;border:1px solid #cecece;border-radius:%?15?%;color:#000;padding:%?20?%}.card uni-text[data-v-0c5ff440]{height:%?46?%;line-height:%?46?%}.bg-red[data-v-0c5ff440]{border:1px solid #ff4a2d}.bg-blue[data-v-0c5ff440]{border:1px solid #3f91e3}.bg-yellow[data-v-0c5ff440]{border:1px solid #ffb434}.text-sm[data-v-0c5ff440]{font-size:%?26?%}.info-tag[data-v-0c5ff440]{padding:%?5?% %?12?%;margin:0 0 %?16?% %?20?%;border-radius:%?10?%}.justify-between[data-v-0c5ff440]{width:96%;margin:%?5?% auto}.justify-between[data-v-0c5ff440]::after{width:%?180?%;content:""}.dt-item[data-v-0c5ff440]{width:%?180?%}.dt-image[data-v-0c5ff440]{width:%?180?%;height:%?180?%;border-radius:%?20?%}.dt-text[data-v-0c5ff440]{padding:%?10?%;background-color:#f0f0f0;overflow:hidden}.text-gray[data-v-0c5ff440]{color:#8b8b8b}.userSetting[data-v-0c5ff440]{position:absolute;top:%?44?%;right:%?30?%}.identify[data-v-0c5ff440]{width:%?30?%;height:%?30?%;position:relative;top:%?5?%;margin:0 %?6?% 0 %?20?%}.sticker-image[data-v-0c5ff440]{border-radius:%?20?%;width:%?220?%;height:%?220?%}.like-box[data-v-0c5ff440]{background-color:hsla(0,0%,81.2%,.4);height:%?80?%;border-radius:50%;z-index:999}.like-box .like[data-v-0c5ff440]{margin:%?6?% %?6?%;width:%?70?%;height:%?70?%;z-index:999}',""]),t.exports=e},caae:function(t,e,i){"use strict";var a=i("872c"),s=i.n(a);s.a},d045:function(t,e,i){"use strict";var a=i("ee27");i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a(i("f3f3")),n=i("2f62"),r={computed:(0,s.default)({},(0,n.mapState)(["userDB"])),data:function(){return{user:{id:-1,nickName:""},selectTagList:[],gradeList:{"一":1,"二":2,"三":3,"四":4},isIdentity:!0,stickers:[],posts:[],isLike:!1}},onLoad:function(t){var e=t.id;null!=e?this.init(e):this.$u.toast("地址错误!!")},methods:{init:function(t){this.getUser(t),this.getData(t),this.getUserLabel(t)},getUser:function(t){var e=this;this.$http.get("/getUser",{id:t}).then((function(t){e.user=t.data.user;var i=t.data.friend;null!=i&&1!=i.state&&(e.isLike=!0)}))},viewImage:function(t){var e=[t];uni.previewImage({urls:e,current:t})},getUserLabel:function(t){var e=this;this.$http.get("/userLabel",{id:t}).then((function(t){e.selectTagList=t.data}))},getData:function(t){var e=this,i={id:t,page:1,pageSize:3};this.$http.get("/user/getUserPost",i).then((function(t){e.posts=t.data.list})),i.pageSize=1,this.$http.get("/user/getUserSticker",i).then((function(t){e.stickers=t.data.list}))},getGrade:function(){if(null==this.user.grade)return null;var t=this.user.grade;if("已工作"===t)return t;var e=this.$utils.dateUtils.currentDate().split("-")[0]-this.gradeList[t[1]],i=e+"级"+("研"===t[0]?"硕士":"本科");return i},getTagColor:function(t){t%=3;var e="";switch(t){case 0:e="bg-red";break;case 1:e="bg-yellow";break;case 2:e="bg-blue";break}return e},getAge:function(){return null==this.user.birthDate?null:this.$utils.dateUtils.GetAge(this.user.birthDate)+"岁"},getConstellation:function(){return null==this.user.birthDate?null:this.$utils.dateUtils.getconstellation(this.user.birthDate)},getCurSchool:function(){var t=this.user.grade;if(null==t)return null;if("已工作"===t)return t;var e=("研"===t[0]?"硕士":"本科")+"在读";return e},navToUserPost:function(){this.$u.route("/pages/square/sub/userPost",{id:this.user.id})},navToUserHome:function(){this.$u.route("/pages/home/sub/userHome",{id:this.user.id})},likeClick:function(){var t=this;this.$http.post("/changFriend",{userId:this.userDB.id,friendId:this.user.id}).then((function(e){t.isLike=!t.isLike}))}}};e.default=r},dbd4:function(t,e,i){"use strict";var a=i("8a14"),s=i.n(a);s.a},e819:function(t,e,i){"use strict";i.r(e);var a=i("1f49"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},f694:function(t,e,i){"use strict";i.r(e);var a=i("163c"),s=i("8ae0");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("caae");var r,u=i("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"0c5ff440",null,!1,a["a"],r);e["default"]=c.exports},fc98:function(t,e,i){"use strict";i.r(e);var a=i("6df4"),s=i("e819");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("dbd4");var r,u=i("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,"26c92310",null,!1,a["a"],r);e["default"]=c.exports}}]);
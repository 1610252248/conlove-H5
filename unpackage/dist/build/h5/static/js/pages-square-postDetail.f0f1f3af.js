(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-square-postDetail"],{"0258":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".on-right[data-v-054b5924]{margin-left:auto;margin-right:0}.input-fixed[data-v-054b5924]{width:100%;position:fixed;min-height:42px;bottom:0;left:0;right:0;background-color:#fff;z-index:9999;padding:0 %?20?% %?6?%;box-shadow:1px 2px 8px 4px #dadada}.dot[data-v-054b5924]{width:%?30?%;height:%?30?%;top:%?6?%;margin-left:%?10?%;margin-right:%?10?%}.cu-item[data-v-054b5924]{padding:%?20?% %?20?% %?20?% %?120?%!important}",""]),t.exports=e},"0d66":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".post-info[data-v-ae2cd59a]{width:100%}.box-userName[data-v-ae2cd59a]{font-size:$uni-font-size-base;color:#333;max-width:%?300?%}.box-content[data-v-ae2cd59a]{width:90%;margin:0 auto}.image-sm[data-v-ae2cd59a]{width:%?40?%;height:%?40?%}.post-like[data-v-ae2cd59a]{height:%?40?%;line-height:%?40?%}.post-comment[data-v-ae2cd59a]{width:92%;margin-left:auto;margin-right:auto}.dots[data-v-ae2cd59a]{margin-left:auto;margin-right:0;padding-left:%?30?%;padding-right:%?10?%}",""]),t.exports=e},"0e98":function(t,e,a){"use strict";a.r(e);var n=a("e97d"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"22d2":function(t,e,a){"use strict";var n=a("71bf"),i=a.n(n);i.a},"2bd1":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("c-scroll",{ref:"scroll",attrs:{isAnimation:!1,minHeight:!0}},[a("post-info",{staticStyle:{"padding-top":"30rpx"},attrs:{data:t.addNewPost}}),a("c-info-bar",{on:{"click-message":function(e){arguments[0]=e=t.$handleEvent(e),t.clickMessage.apply(void 0,arguments)}}}),a("c-comment",{ref:"comment",staticClass:"margin-top-sm",on:{"scroll-to-bottom":function(e){arguments[0]=e=t.$handleEvent(e),t.scrollToBottom.apply(void 0,arguments)}}})],1)],1)},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))},"2c78":function(t,e,a){"use strict";var n=a("85e4"),i=a.n(n);i.a},"31bf":function(t,e,a){"use strict";var n=a("9927"),i=a.n(n);i.a},"59bf":function(t,e,a){t.exports=a.p+"static/img/chat-dot-round.7856744c.png"},"5af3":function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c925")),s=n(a("ec22")),o=n(a("c6aa")),A={components:{postInfo:i.default,cComment:s.default,cInfoBar:o.default},methods:{scrollToBottom:function(){this.$refs.scroll.toBottom()},clickMessage:function(){this.focusComment()},focusComment:function(){this.$refs.comment.isFocus=!0}},data:function(){return{isFocus:!1,addNewPost:{user:{avatar:"/static/image/default.jpeg",userName:"Bobbobbb",isFemale:!1},content:"更新内容了，hhhhhhhhhhhhhhhh",createTime:"2020-5-20 13:14:20",imageList:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg"],comments:[{userName:"Abraxas",content:"赞赞~asdddddddddddddddddad~~！！"},{userName:"小冰 ",content:"wls bbbbbbbbbb！！"},{userName:"The shy",content:"wls bbbbbbbbbbbasdddddddddddddbb！！"}]}}},onReady:function(){"true"==this.$route.query.isFocus&&this.focusComment()}};e.default=A},"71bf":function(t,e,a){var n=a("8af3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("44b89ef3",n,!0,{sourceMap:!1,shadowMode:!1})},8472:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top padding-tb-sm"},t._l(t.comments,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item"},[n("v-uni-image",{staticClass:"cu-avatar round",attrs:{src:e.userDto.avatarUrl}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.userDto.nickname))]),t._l(t.hotNums,(function(a,i){return e.likeNums>=a?n("v-uni-text",{key:i,staticClass:"cuIcon-hotfill text-red"}):t._e()})),n("v-uni-view",{staticClass:"on-right text-df",class:e.likeState?"text-red":"text-grey",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.changeLike(e)}}},[n("v-uni-text",{staticClass:"cuIcon-appreciate"}),n("v-uni-text",{staticStyle:{"margin-left":"4rpx"}},[t._v(t._s(e.likeNums))])],1)],2),n("v-uni-view",{staticClass:"text-black text-content text-df"},[t._v(t._s(e.content))]),t.showInfo?n("v-uni-view",[n("v-uni-view",{staticClass:"text-sm text-gray"},[n("v-uni-text",[t._v(t._s(t.$utils.dateUtils.format(e.createTime)))]),n("v-uni-image",{staticClass:"dot",attrs:{src:a("f821")}}),n("v-uni-text",[t._v("回复")])],1),e.reply?n("v-uni-view",{staticClass:"reply",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToReply.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"sm cu-btn bg-grey light round"},[t._v(t._s(e.reply+"个回复 >"))])],1):t._e()],1):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"cu-bar input input-fixed"},[n("v-uni-input",{staticClass:"padding-left-sm solid",attrs:{placeholder:"请输入评论...",focus:t.isFocus,maxlength:"40"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputBlur.apply(void 0,arguments)}},model:{value:t.sendContent,callback:function(e){t.sendContent=e},expression:"sendContent"}}),n("v-uni-button",{staticClass:"cu-btn round bg-blue shadow-blur",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendComment.apply(void 0,arguments)}}},[t._v("发送")])],1)],1)},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))},"85e4":function(t,e,a){var n=a("0d66");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4b92f236",n,!0,{sourceMap:!1,shadowMode:!1})},"8af3":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".image-sm[data-v-52d80295]{width:%?40?%;height:%?40?%}.post-like[data-v-52d80295]{height:%?40?%;line-height:%?40?%}",""]),t.exports=e},9927:function(t,e,a){var n=a("0258");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7863368a",n,!0,{sourceMap:!1,shadowMode:!1})},"9b25":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.data).length?a("v-uni-view",{staticClass:"post-info"},[a("v-uni-view",{staticClass:"box-content"},[a("v-uni-view",{staticClass:"flex justify-start align-center"},[a("v-uni-view",{staticClass:"cu-avatar round",style:[{backgroundImage:"url("+t.data.user.avatar+")"}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navToOtherUser.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-tag badge",class:t.data.user.isFemale?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})],1),a("v-uni-view",{staticClass:"margin-left-sm",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navToOtherUser.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"box-userName text-hidden"},[t._v(t._s(t.data.user.userName))]),a("v-uni-view",{staticClass:"text-xs text-gray"},[t._v(t._s(t.$utils.dateUtils.format(t.data.createTime)))])],1),t.data.hidePost?a("v-uni-view",{staticClass:"margin-left text-gray cuIcon-attentionforbid"}):t._e(),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dotsShow,expression:"dotsShow"}],staticClass:"dots",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.more.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-more"})],1)],1)],1),t.data.imageList?a("v-uni-view",{staticClass:"bg-white padding text-black padding-bottom-xs"},[a("v-uni-text",{staticClass:"text-wrap"},[t._v(t._s(t.data.content))]),a("v-uni-view",{staticClass:"grid grid-square margin-top-xs",class:1==t.data.imageList.length?"col-1":"col-3"},t._l(t.data.imageList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"bg-img ",style:[{backgroundImage:"url("+e+")"}],attrs:{"data-url":e},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.viewImage.apply(void 0,arguments)}}})})),1)],1):t._e()],1):t._e()},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))},b179:function(t,e,a){"use strict";a.r(e);var n=a("f2eb"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},c4f1:function(t,e,a){"use strict";a.r(e);var n=a("2bd1"),i=a("e42f");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);var o,A=a("f0c5"),c=Object(A["a"])(i["default"],n["b"],n["c"],!1,null,"761f180b",null,!1,n["a"],o);e["default"]=c.exports},c6aa:function(t,e,a){"use strict";a.r(e);var n=a("f969"),i=a("d3aa");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("22d2");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],n["b"],n["c"],!1,null,"52d80295",null,!1,n["a"],o);e["default"]=c.exports},c925:function(t,e,a){"use strict";a.r(e);var n=a("9b25"),i=a("b179");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("2c78");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],n["b"],n["c"],!1,null,"ae2cd59a",null,!1,n["a"],o);e["default"]=c.exports},d3aa:function(t,e,a){"use strict";a.r(e);var n=a("f421"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},e42f:function(t,e,a){"use strict";a.r(e);var n=a("5af3"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},e97d:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f3f3")),s={props:{showInfo:{type:Boolean,default:!0}},data:function(){return{comments:[{userDto:{nickname:"XDD",avatarUrl:"https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"},createTime:"2019.12.17 17:28:48",content:"支持支持！！！评论区做得真的不错，厉害厉害~~",likeNums:19,likeState:0,reply:2},{userDto:{nickname:"UZI",avatarUrl:"https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"},createTime:"2020.4.5 10:28:48",content:"支持支持！！！",likeNums:6,likeState:0,reply:0},{userDto:{nickname:"farrell",avatarUrl:"https://qingtai-1257824184.cos.ap-chengdu.myqcloud.com/78dd067ca7af498d8f67fc5ac2529d571576734509715.jpg"},createTime:"2020.4.5 10:28:48",content:"支持支持！！！",likeNums:3,likeState:!1,reply:15}],hotNums:[5,10],sendContent:"",newComment:{userDto:{nickname:"缘来是你",avatarUrl:"/static/image/default.jpeg"},createTime:"2019.12.17 17:28:48",likeNums:0,likeState:0,reply:0},isFocus:!1}},methods:{navToReply:function(){uni.navigateTo({url:"/components/conlove/c-reply-comment"})},changeLike:function(t){console.log(t),t.likeState=!t.likeState,t.likeNums+=t.likeState?1:-1},sendComment:function(){if(0!=this.sendContent.length){var t=(0,i.default)({},this.newComment);t.content=this.sendContent,t.createTime=this.$utils.dateUtils.currentDate(),this.comments.push(t),this.sendContent="",uni.showToast({icon:"success"}),this.$emit("scroll-to-bottom")}else uni.showToast({title:"内容不能为空哦~",icon:"none"})},inputBlur:function(){this.isFocus=!1}}};e.default=s},ec22:function(t,e,a){"use strict";a.r(e);var n=a("8472"),i=a("0e98");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("31bf");var o,A=a("f0c5"),c=Object(A["a"])(i["default"],n["b"],n["c"],!1,null,"054b5924",null,!1,n["a"],o);e["default"]=c.exports},f2eb:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c6aa")),s={components:{cInfoBar:i.default},props:{data:{type:Object,default:function(){return{}}},dotsShow:{type:Boolean,default:!1}},methods:{name:function(){},viewImage:function(t){uni.previewImage({urls:this.data.imageList,current:t.currentTarget.dataset.url})},more:function(){this.$emit("more")},navToOtherUser:function(){uni.navigateTo({url:"/pages/user/otherUser"})}}};e.default=s},f421:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{showMode:{type:Boolean,default:!1}},data:function(){return{isLike:!1}},methods:{changeLike:function(){var t="点赞成功";this.isLike&&(t="取消点赞"),uni.showToast({title:t,icon:"none"}),this.isLike=!this.isLike},clickMessage:function(){this.$emit("click-message")}}};e.default=n},f821:function(t,e){t.exports="data:image/png;base64,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"},f969:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"post-like"},[n("v-uni-view",{staticClass:"fl text-gray margin-left-lg text-sm"},[t.showMode?n("v-uni-view",[t._v("52人 觉得很赞")]):n("v-uni-view",[n("v-uni-text",[t._v("赞 12")]),n("v-uni-text",{staticClass:"margin-left"},[t._v("评论 7")])],1)],1),n("v-uni-view",{staticClass:"fr"},[n("v-uni-image",{staticClass:"image-sm",attrs:{src:"/static/image/"+(t.isLike?"like-active.png":"like.png")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.changeLike.apply(void 0,arguments)}}}),n("v-uni-image",{staticClass:"image-sm margin-left-sm margin-right-lg",attrs:{src:a("59bf")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickMessage.apply(void 0,arguments)}}})],1)],1)},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-square-postDetail"],{"027e":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("b64b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.config.type)>=0&&this.config.icon){var t=this.$u.type2icon(this.config.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.config=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.config.callback&&e.config.callback(),e.timeEnd()}),this.config.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.config.url){if("/"!=this.config.url[0]&&(this.config.url="/"+this.config.url),Object.keys(this.config.params).length){var t="";/.*\/.*\?.*=.*/.test(this.config.url)?(t=this.$u.queryParams(this.config.params,!1),this.config.url=this.config.url+"&"+t):(t=this.$u.queryParams(this.config.params),this.config.url+=t)}this.config.isTab?uni.switchTab({url:this.config.url}):uni.navigateTo({url:this.config.url})}else this.config.back&&this.$u.route({type:"back"})}}};e.default=a},"03aa":function(t,e,n){"use strict";var a={cInfoBar:n("c6aa").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("c-info-bar",{attrs:{data:t.data,isAppreciate:t.isLike,showMode:t.showMode},on:{"chang-appreciate":function(e){arguments[0]=e=t.$handleEvent(e),t.changAppreciate()},"click-message":function(e){arguments[0]=e=t.$handleEvent(e),t.clickMessage()}}})],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"171a":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".image-sm[data-v-42d98330]{width:%?40?%;height:%?40?%}.info-bar[data-v-42d98330]{height:%?36?%;line-height:%?46?%;padding:0 %?30?%}",""]),t.exports=e},"22d4":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.data).length?a("v-uni-view",{staticClass:"info-bar"},[a("v-uni-view",{staticClass:"fl text-gray  text-sm"},[t.showMode?a("v-uni-view",[t._v(t._s(t.data.appreciate)+"人 觉得很赞")]):a("v-uni-view",[a("v-uni-text",[t._v("赞 "+t._s(t.data.appreciate))]),a("v-uni-text",{staticClass:"margin-left"},[t._v("评论 "+t._s(t.data.comments.length))])],1)],1),a("v-uni-view",{staticClass:"fr"},[a("v-uni-image",{staticClass:"image-sm",attrs:{src:"/static/image/"+(t.isAppreciate?"like-active.png":"like.png")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.changeAppreciate.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"image-sm margin-left-sm",attrs:{src:n("59bf")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clickMessage.apply(void 0,arguments)}}})],1)],1):t._e()},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},3074:function(t,e,n){var a=n("171a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5cd9cc8f",a,!0,{sourceMap:!1,shadowMode:!1})},"3f94":function(t,e,n){"use strict";n.r(e);var a=n("03aa"),i=n("8182");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"06816983",null,!1,a["a"],s);e["default"]=c.exports},"436a":function(t,e,n){"use strict";n.r(e);var a=n("027e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"59bf":function(t,e,n){t.exports=n.p+"static/img/chat-dot-round.7856744c.png"},"5af3":function(t,e,n){"use strict";var a=n("ee27");n("c740"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("54f8")),o=a(n("f3f3")),s=n("2f62"),r=a(n("3f94")),c=a(n("e241")),u={components:{postInfo:c.default,postInfoBar:r.default},computed:(0,o.default)({},(0,s.mapState)(["userDB"])),data:function(){return{post:{},comments:[],page:1,pageSize:8,totalPage:0,isAppreciate:!1,isLoad:!1,loadCnt:0,scrollId:"",placeholder:"评论",cIndex:"",parentCommentId:0}},onLoad:function(t){var e=this,n=t.isFocus,a=t.id;"true"==n&&this.$nextTick((function(){e.$refs.cInput.focusInput()})),this.getPost(a),this.getComments(a),this.getPostAppreciate(a)},methods:{getPost:function(t){var e=this;this.$http.get("/getPost",{id:t}).then((function(t){e.post=t.data}))},getComments:function(t){var e=this,n={id:t,page:this.page,pageSize:this.pageSize};this.$http.get("/postComment",n).then((function(t){e.setAppreciate(t.data.list),e.totalPage=t.data.pages,e.page>=e.totalPage&&(e.isLoad=!0)}))},setAppreciate:function(t){var e=this;this.$http.get("/post/commentAppreciate").then((function(n){var a,o=n.data,s=(0,i.default)(t);try{var r=function(){var t=a.value,n=o.findIndex((function(e){return e.commentId==t.id}));t.isAppreciate=-1!=n,e.comments.push(t)};for(s.s();!(a=s.n()).done;)r()}catch(c){s.e(c)}finally{s.f()}}))},getPostAppreciate:function(t){var e=this;this.$http.get("/post/isAppreciate",{id:t}).then((function(t){null!=t.data&&(e.isAppreciate=!0)}))},changAppreciate:function(t){this.post.appreciate+=t},clickMessage:function(){this.placeholder="评论",this.$refs.cInput.focusInput()},sendComment:function(t){var e=this;if("评论"==this.placeholder)this.scrollId="",this.$http.post("/post/sendComment",{content:t,postId:this.post.id}).then((function(t){var n=t.data;n.user=e.userDB,n.childComments=[],n.newComments=[],e.comments.unshift(n),e.scrollId="comment"}));else{var n={content:t,commentId:this.parentCommentId};this.$http.post("/post/replyComment",n).then((function(t){var n=t.data;n.user=e.userDB;var a=e.cIndex;null==e.comments[a].newComments?e.comments[a].newComments=[n]:e.comments[a].newComments.unshift(n)}))}},changLike:function(t,e){e?this.$http.get("/post/delCommentLike",{id:t}):this.$http.post("/post/addCommentLike",{commentId:t})},reply:function(t,e,n){this.cIndex=t,this.parentCommentId=e,this.$refs.cInput.clearContent(),this.placeholder="回复"+n+": ",this.$refs.cInput.focusInput()},navToReply:function(t){this.$u.route("/pages/square/reply/post-reply-comment",{id:t})},lower:function(){this.loadCnt>0||this.isLoad||(this.loadCnt++,this.page++,this.page<=this.totalPage?this.getComments(this.post.id):this.isLoad=!0,this.loadCnt--)}}};e.default=u},"63e7":function(t,e,n){"use strict";var a={cScroll:n("c70c").default,cComment:n("ec22").default,cInput:n("ef38").default,uToast:n("6858").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("c-scroll",{attrs:{minHeight:!0,scrollId:t.scrollId},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.lower.apply(void 0,arguments)}}},[n("post-info",{staticStyle:{"padding-top":"30rpx"},attrs:{data:t.post}}),n("post-info-bar",{attrs:{data:t.post,isAppreciate:t.isAppreciate},on:{"click-message":function(e){arguments[0]=e=t.$handleEvent(e),t.clickMessage.apply(void 0,arguments)},"change-appreciate":function(e){arguments[0]=e=t.$handleEvent(e),t.changAppreciate.apply(void 0,arguments)}}}),n("c-comment",{staticClass:"margin-top-sm",attrs:{id:"comment",comments:t.comments},on:{"nav-to-reply":function(e){arguments[0]=e=t.$handleEvent(e),t.navToReply.apply(void 0,arguments)},"change-like":function(e){arguments[0]=e=t.$handleEvent(e),t.changLike.apply(void 0,arguments)},reply:function(e){arguments[0]=e=t.$handleEvent(e),t.reply.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"cu-load",class:t.isLoad?"over":"loading"})],1),n("c-input",{ref:"cInput",attrs:{placeholder:t.placeholder},on:{"send-comment":function(e){arguments[0]=e=t.$handleEvent(e),t.sendComment.apply(void 0,arguments)}}}),n("u-toast",{ref:"uToast"})],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},6858:function(t,e,n){"use strict";n.r(e);var a=n("f98b"),i=n("436a");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("b38f");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"0a1ec724",null,!1,a["a"],s);e["default"]=c.exports},8182:function(t,e,n){"use strict";n.r(e);var a=n("a5fe"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"8f23":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.keys(t.data).length?n("v-uni-view",[n("v-uni-view",{staticClass:"box-content"},[n("v-uni-view",{staticClass:"flex justify-start align-center"},[n("v-uni-view",{staticClass:"cu-avatar round",style:[{backgroundImage:"url("+t.data.user.avatar+")"}],on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navToOtherUser(t.data.user.id)}}},[n("v-uni-view",{staticClass:"cu-tag badge",class:"女"==t.data.user.sex?"cuIcon-female bg-pink":"cuIcon-male bg-blue"})],1),n("v-uni-view",{staticClass:"margin-left-sm",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.navToOtherUser(t.data.user.id)}}},[n("v-uni-view",{staticClass:"box-userName text-hidden"},[t._v(t._s(t.data.user.nickName))]),n("v-uni-view",{staticClass:"text-xs text-gray"},[t._v(t._s(t.$utils.dateUtils.format(t.data.createTime)))])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.dotsShow,expression:"dotsShow"}],staticClass:"dots",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.more.apply(void 0,arguments)}}},[t.data.isPublic?t._e():n("v-uni-text",{staticClass:"margin-right-sm text-gray cuIcon-attentionforbid"}),n("v-uni-text",{staticClass:"cuIcon-more"})],1)],1)],1),n("v-uni-view",{staticClass:"bg-white padding text-black padding-bottom-xs"},[n("v-uni-text",{staticClass:"text-wrap"},[t._v(t._s(t.data.content))]),n("v-uni-view",{staticClass:"grid grid-square margin-top-xs",class:1==t.data.images.length?"col-1":"col-3"},t._l(t.data.images,(function(e){return n("v-uni-view",{key:e.id,staticClass:"bg-img",style:{backgroundImage:"url("+e.image+")"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.viewImage(e.image)}}})})),1)],1)],1):t._e()},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"916a":function(t,e,n){"use strict";n.r(e);var a=n("b540"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a5fe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Object,default:function(){return{}}},isAppreciate:{type:Boolean,default:!1},showMode:{type:Boolean,default:!1}},data:function(){return{isLike:!1}},watch:{isAppreciate:function(t,e){this.isLike=t}},methods:{clickMessage:function(){this.$emit("click-message")},changAppreciate:function(){var t=this;this.isLike?this.$http.get("/delPostAppreciate",{postId:this.data.id}).then((function(e){t.$emit("change-appreciate",-1)})):this.$http.post("/addPostAppreciate",{postId:this.data.id}).then((function(e){t.$emit("change-appreciate",1)})),this.isLike=!this.isLike}}};e.default=a},b38f:function(t,e,n){"use strict";var a=n("eee3"),i=n.n(a);i.a},b540:function(t,e,n){"use strict";var a=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("54f8")),o={props:{data:{type:Object,default:function(){return{}}},dotsShow:{type:Boolean,default:!1}},methods:{viewImage:function(t){var e,n=[],a=(0,i.default)(this.data.images);try{for(a.s();!(e=a.n()).done;){var o=e.value;n.push(o.image)}}catch(s){a.e(s)}finally{a.f()}uni.previewImage({urls:n,current:t})},more:function(){this.$emit("more")},navToOtherUser:function(t){this.$u.route("/pages/user/otherUser",{id:t})}}};e.default=o},bca7:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".box-userName[data-v-865334ba]{font-size:$uni-font-size-base;color:#333;max-width:%?300?%}.box-content[data-v-865334ba]{width:90%;margin:0 auto}.image-sm[data-v-865334ba]{width:%?40?%;height:%?40?%}.post-like[data-v-865334ba]{height:%?40?%;line-height:%?40?%}.post-comment[data-v-865334ba]{width:92%;margin-left:auto;margin-right:auto}.dots[data-v-865334ba]{margin-left:auto;margin-right:0;padding-left:%?30?%;padding-right:%?10?%}",""]),t.exports=e},c4f1:function(t,e,n){"use strict";n.r(e);var a=n("63e7"),i=n("e42f");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"50b8ab7d",null,!1,a["a"],s);e["default"]=c.exports},c6aa:function(t,e,n){"use strict";n.r(e);var a=n("22d4"),i=n("d3aa");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f057");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"42d98330",null,!1,a["a"],s);e["default"]=c.exports},d1bd:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/*这里是 uview-ui*/\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-toast[data-v-0a1ec724]{position:fixed;z-index:-1;-webkit-transition:opacity .3s;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:0 %?40?%}.u-toast.u-show[data-v-0a1ec724]{opacity:1}.u-text[data-v-0a1ec724]{word-break:keep-all;white-space:nowrap;line-height:normal}.u-icon[data-v-0a1ec724]{margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:normal}.u-position-center[data-v-0a1ec724]{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-top[data-v-0a1ec724]{left:50%;top:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-position-bottom[data-v-0a1ec724]{left:50%;bottom:20%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.u-type-primary[data-v-0a1ec724]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-0a1ec724]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-0a1ec724]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-0a1ec724]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-0a1ec724]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-0a1ec724]{color:#fff;background-color:#585858}',""]),t.exports=e},d3aa:function(t,e,n){"use strict";n.r(e);var a=n("f421"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},d724:function(t,e,n){"use strict";var a=n("ffc9"),i=n.n(a);i.a},e241:function(t,e,n){"use strict";n.r(e);var a=n("8f23"),i=n("916a");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("d724");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"865334ba",null,!1,a["a"],s);e["default"]=c.exports},e42f:function(t,e,n){"use strict";n.r(e);var a=n("5af3"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},eee3:function(t,e,n){var a=n("d1bd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5048626b",a,!0,{sourceMap:!1,shadowMode:!1})},f057:function(t,e,n){"use strict";var a=n("3074"),i=n.n(a);i.a},f421:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{showMode:{type:Boolean,default:!1},isAppreciate:{type:Boolean,default:!1},data:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{changeAppreciate:function(){this.$emit("chang-appreciate")},clickMessage:function(){this.$emit("click-message")}}};e.default=a},f98b:function(t,e,n){"use strict";var a={uIcon:n("9c0b").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.config.type,"u-position-"+t.config.position],style:{zIndex:t.uZIndex}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.config.icon?n("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.config.type}}):t._e()],1),n("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.config.title))])],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},ffc9:function(t,e,n){var a=n("bca7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("445bfc62",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-enter-login"],{"2ffe":function(t,e,a){"use strict";a.r(e);var n=a("b35a"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"503c":function(t,e,a){"use strict";var n=a("d2b5"),i=a.n(n);i.a},5421:function(t,e,a){"use strict";a.r(e);var n=a("a24e"),i=a("2ffe");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("503c");var o,r=a("f0c5"),c=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"198f177c",null,!1,n["a"],o);e["default"]=c.exports},a24e:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"flex align-center justify-center flex-direction"},[a("v-uni-image",{staticClass:"head-image",attrs:{src:"/static/image/pic-login-head.png",mode:"aspectFit"}}),a("v-uni-image",{staticClass:"head-title",attrs:{src:"/static/image/title.png",mode:"aspectFit"}}),a("v-uni-view",{staticClass:"zai-form"},[a("v-uni-input",{staticClass:"zai-input",attrs:{placeholder:"请输入用户名"},model:{value:t.user.userName,callback:function(e){t.$set(t.user,"userName",e)},expression:"user.userName"}}),a("v-uni-input",{staticClass:"zai-input",attrs:{password:!0,placeholder:"请输入密码"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-uni-view",{staticClass:"flex margin-top-lg"},[a("v-uni-button",{staticClass:"btn bg-red round ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToIndex.apply(void 0,arguments)}}},[t._v("随便看看")]),a("v-uni-button",{staticClass:"btn bg-red round",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("立即登录")])],1),a("v-uni-view",{staticClass:"flex justify-center margin-top-xl text-color"},[a("v-uni-view",[t._v("还没有账号？")]),a("v-uni-view",{staticClass:"text-bold",staticStyle:{"text-decoration":"underline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToRegister.apply(void 0,arguments)}}},[t._v("点此注册")])],1)],1)],1)},s=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))},b35a:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("f3f3")),s=a("2f62"),o={computed:(0,s.mapState)(["isLogin"]),data:function(){return{user:{userName:"",password:""}}},onBackPress:function(){return!this.isLogin&&(console.log("back"),this.navToIndex(),!0)},onShow:function(){this.isLogin&&uni.navigateBack()},methods:(0,i.default)({},(0,s.mapActions)(["setIsLogin"]),{navToRegister:function(){uni.navigateTo({url:"/pages/enter/register"})},navToIndex:function(){uni.switchTab({url:"/pages/home/home"})},login:function(){this.setIsLogin(),uni.showToast({title:"登陆成功",icon:"none"}),setTimeout((function(){uni.switchTab({url:"/pages/user/user"})}),1e3)}})};e.default=o},d2b5:function(t,e,a){var n=a("eaac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("05d16fb8",n,!0,{sourceMap:!1,shadowMode:!1})},eaac:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".head-image[data-v-198f177c]{margin-top:%?50?%;width:%?500?%;height:%?400?%;min-height:%?200?%}.head-title[data-v-198f177c]{width:%?532?%;height:%?92?%}.zai-form[data-v-198f177c]{width:70%;margin:%?100?% auto %?150?%}.zai-input[data-v-198f177c]{border:1px solid #a7b6d0;margin:%?30?% 0;border-radius:%?100?%;padding:%?14?% %?40?%;height:%?80?%;font-size:%?30?%;color:#94afce}.btn[data-v-198f177c]{font-size:%?30?%;padding:0 %?38?%}.input-placeholder[data-v-198f177c],\n.text-color[data-v-198f177c]{color:#94afce}",""]),t.exports=e}}]);
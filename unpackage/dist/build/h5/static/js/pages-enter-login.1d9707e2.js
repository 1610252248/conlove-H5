(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-enter-login"],{"2ffe":function(t,e,a){"use strict";a.r(e);var i=a("b35a"),s=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=s.a},5421:function(t,e,a){"use strict";a.r(e);var i=a("be81"),s=a("2ffe");for(var o in s)"default"!==o&&function(t){a.d(e,t,(function(){return s[t]}))}(o);a("d894");var r,n=a("f0c5"),u=Object(n["a"])(s["default"],i["b"],i["c"],!1,null,"5ae94fe1",null,!1,i["a"],r);e["default"]=u.exports},"956b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".head-image[data-v-5ae94fe1]{margin-top:%?50?%;width:%?500?%;height:%?400?%;min-height:%?200?%}.head-title[data-v-5ae94fe1]{width:%?532?%;height:%?92?%}.zai-form[data-v-5ae94fe1]{width:64%;margin:%?80?% auto 0}.zai-input[data-v-5ae94fe1]{border:1px solid #a7b6d0;width:100%;border-radius:%?100?%;padding:0 %?40?%;height:%?80?%;font-size:%?30?%;color:#94afce}.input-placeholder[data-v-5ae94fe1],\n.text-color[data-v-5ae94fe1]{color:#94afce}.btn[data-v-5ae94fe1]{color:#fff!important;background-color:#ff4a2d!important;border-radius:1000px;font-size:%?30?%;padding:0 %?38?%}.navJump[data-v-5ae94fe1]{font-weight:600;color:#94afce;padding:1px;border-bottom:.5px solid #859eb8}",""]),t.exports=e},b35a:function(t,e,a){"use strict";var i=a("ee27");a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("f3f3")),o=a("2f62"),r={computed:(0,s.default)({},(0,o.mapGetters)(["isLogin"])),data:function(){return{form:{userName:"",password:""},rules:{userName:[{required:!0,message:"请输入账号"}],password:[{required:!0,message:"请输入密码"}]}}},onShow:function(){var t=this;this.isLogin&&(this.$u.toast("您已登录"),setTimeout((function(){t.navToIndex()}),1e3))},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:(0,s.default)({},(0,o.mapActions)(["set"]),{navToIndex:function(){uni.switchTab({url:"/pages/home/home"})},login:function(){var t=this;this.$refs.uForm.validate((function(e){e&&t.$http.post("/login",t.form).then((function(e){if(e.status==t.$http.SUCCESS){var a=getCurrentPages(),i=a.length,s=1;while(i>0&&(-1!=a[i-1].route.indexOf("register")||-1!=a[i-1].route.indexOf("login")))s++,i--;0==i?t.$refs.uToast.show({title:e.msg,type:"success",url:"/pages/home/home",isTab:!0,duration:1500}):(t.$refs.uToast.show({title:e.msg,type:"success"}),setTimeout((function(){uni.navigateBack({delta:s})}),1500)),t.set(e.data),t.$eventBus.$emit("login-success")}else t.$u.toast(e.msg)}))}))}})};e.default=r},be81:function(t,e,a){"use strict";var i={cScroll:a("c70c").default,uForm:a("7911").default,uFormItem:a("50e2").default,uButton:a("1564").default,uToast:a("6858").default},s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-scroll",{attrs:{midHeight:!0}},[a("v-uni-view",{staticClass:"flex align-center justify-center flex-direction"},[a("v-uni-image",{staticClass:"head-image",attrs:{src:"/static/image/pic-login-head.png",mode:"aspectFit"}}),a("v-uni-image",{staticClass:"head-title",attrs:{src:"/static/image/title.png",mode:"aspectFit"}}),a("u-form",{ref:"uForm",staticClass:"zai-form",attrs:{model:t.form,errorType:["toast"]}},[a("u-form-item",{attrs:{"label-width":0,prop:"userName","border-bottom":!1}},[a("v-uni-input",{staticClass:"zai-input",attrs:{placeholder:"请输入账号"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),a("u-form-item",{attrs:{"label-width":0,prop:"password","border-bottom":!1}},[a("v-uni-input",{staticClass:"zai-input",attrs:{password:!0,placeholder:"请输入密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("v-uni-view",{staticClass:"flex margin-top"},[a("u-button",{staticClass:"btn",attrs:{ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToIndex.apply(void 0,arguments)}}},[t._v("随便看看")]),a("u-button",{staticClass:"btn",attrs:{ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("立即登录")])],1),a("v-uni-view",{staticClass:"text-center margin-tb-xl",staticStyle:{color:"#94afce"}},[t._v("还没有账号？"),a("span",{staticClass:"navJump",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.route("/pages/enter/register")}}},[t._v("点此注册")])])],1)],1),a("u-toast",{ref:"uToast"})],1)},o=[];a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},cf01:function(t,e,a){var i=a("956b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("4f06").default;s("a64cbfe4",i,!0,{sourceMap:!1,shadowMode:!1})},d894:function(t,e,a){"use strict";var i=a("cf01"),s=a.n(i);s.a}}]);
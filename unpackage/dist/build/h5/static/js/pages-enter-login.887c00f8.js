(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-enter-login"],{"2ffe":function(t,e,a){"use strict";a.r(e);var n=a("b35a"),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},3577:function(t,e,a){var n=a("6577");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("1270586c",n,!0,{sourceMap:!1,shadowMode:!1})},5421:function(t,e,a){"use strict";a.r(e);var n=a("b88d"),o=a("2ffe");for(var s in o)"default"!==s&&function(t){a.d(e,t,(function(){return o[t]}))}(s);a("7282");var i,r=a("f0c5"),u=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"9de2ef36",null,!1,n["a"],i);e["default"]=u.exports},6577:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".content[data-v-9de2ef36]{width:84%;margin:0 auto}.title-text uni-view[data-v-9de2ef36]{padding:%?12?% 0}.form[data-v-9de2ef36]{margin-top:%?90?%}.cu-btn[data-v-9de2ef36],\n.lg[data-v-9de2ef36]{width:%?210?%}.btn-bottom[data-v-9de2ef36]{padding-top:50%}.navJump[data-v-9de2ef36]{color:#a7a7a7;padding-bottom:%?2?%;border-bottom:1px solid #a7a7a7}",""]),t.exports=e},7282:function(t,e,a){"use strict";var n=a("3577"),o=a.n(n);o.a},b35a:function(t,e,a){"use strict";var n=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(a("f3f3")),s=a("2f62"),i={computed:(0,o.default)({},(0,s.mapGetters)(["isLogin"])),data:function(){return{inputCustome:{background:"#ffffff",border:"1px solid #C0C0C0","border-radius":"100upx",padding:"14upx 40upx",height:"76upx",width:"100%","font-size":"30upx"},errorType:["toast"],form:{email:"",password:""},rules:{email:[{required:!0,message:"请输入邮箱"}],password:[{required:!0,message:"请输入密码"}]}}},mounted:function(){this.$refs.uForm.setRules(this.rules)},onShow:function(){var t=this;this.isLogin&&(this.$u.toast("您已登录"),setTimeout((function(){t.$u.route({url:"/pages/user/user",type:"tab"})}),1e3))},methods:(0,o.default)({},(0,s.mapActions)(["set"]),{back:function(){uni.navigateBack()},login:function(){var t=this;this.$refs.uForm.validate((function(e){e&&t._login()}))},_login:function(){var t=this;this.$http.post("/login",this.form).then((function(e){e.status==t.$http.SUCCESS?(t.$refs.uToast.show({title:e.msg,type:"success",url:"/pages/user/user",isTab:!0,duration:1500}),t.set(e.data),t.$eventBus.$emit("login-success")):t.$refs.uToast.show({title:e.msg,type:"warning"})}))}})};e.default=i},b88d:function(t,e,a){"use strict";var n={cScroll:a("c70c").default,cTitle:a("a7d38").default,uForm:a("7911").default,uFormItem:a("50e2").default,uInput:a("4da4").default,uToast:a("6858").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-scroll",{staticClass:"content",attrs:{midHeight:!0}},[a("c-title",{attrs:{imageSrc:"/static/image/avatar-left.jpg"}},[a("template",{attrs:{slot:"content"},slot:"content"},[a("v-uni-view",[t._v("欢迎来到缘来！")]),a("v-uni-view",[t._v("开启你的缘分之旅")])],1)],2),a("u-form",{ref:"uForm",staticClass:"form",attrs:{"label-width":"0",model:t.form,errorType:t.errorType}},[a("u-form-item",{attrs:{prop:"email","border-bottom":!1}},[a("u-input",{attrs:{"custom-style":t.inputCustome,placeholder:"请输入邮箱",clearable:!1,type:"text"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("u-form-item",{attrs:{prop:"password","border-bottom":!1}},[a("u-input",{attrs:{"custom-style":t.inputCustome,placeholder:"请输入密码","password-icon":!1,clearable:!1,type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),a("v-uni-view",{staticClass:"flex justify-between padding-lr-xl margin-top-xs"},[a("v-uni-view",{staticClass:"navJump",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.route("/pages/enter/forget")}}},[t._v("忘记密码？")]),a("v-uni-view",{staticClass:"navJump",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.route("/pages/enter/register")}}},[t._v("立即注册")])],1),a("v-uni-view",{staticClass:"btn-bottom"},[a("v-uni-view",{staticClass:"flex justify-around"},[a("v-uni-button",{staticClass:"cu-btn round lines-red lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("随便逛逛")]),a("v-uni-button",{staticClass:"cu-btn round bg-red lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v("登录")])],1),a("v-uni-view",{staticClass:"margin-tb-xl text-center",staticStyle:{color:"#A7A7A7"}},[t._v("登录即同意"),a("span",{staticClass:"navJump",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.$u.route("/pages/enter/serviceAgreement")}}},[t._v("《缘来服务协议》")])])],1),a("u-toast",{ref:"uToast"})],1)},s=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}))}}]);
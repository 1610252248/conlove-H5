(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-enter-serviceAgreement"],{"16b4":function(t,a,n){"use strict";var p=n("7add"),s=n.n(p);s.a},"4c20":function(t,a,n){"use strict";n.r(a);var p=n("78be"),s=n.n(p);for(var e in p)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return p[t]}))}(e);a["default"]=s.a},6804:function(t,a,n){"use strict";var p=n("abee"),s=n.n(p);s.a},"78be":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p={data:function(){return{}},methods:{}};a.default=p},"7add":function(t,a,n){var p=n("aafe");"string"===typeof p&&(p=[[t.i,p,""]]),p.locals&&(t.exports=p.locals);var s=n("4f06").default;s("630f02db",p,!0,{sourceMap:!1,shadowMode:!1})},8113:function(t,a,n){"use strict";n.r(a);var p=n("e846"),s=n("4c20");for(var e in s)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return s[t]}))}(e);n("6804");var i,o=n("f0c5"),r=Object(o["a"])(s["default"],p["b"],p["c"],!1,null,"6eb74903",null,!1,p["a"],i);a["default"]=r.exports},"8e68":function(t,a,n){t.exports=n.p+"static/img/top.f3ad3d5d.png"},"9e8c":function(t,a,n){"use strict";var p;n.d(a,"b",(function(){return s})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return p}));var s=function(){var t=this,a=t.$createElement,p=t._self._c||a;return p("v-uni-view",[p("v-uni-scroll-view",{staticClass:"scroll-view",class:[t.maxHeight?"max-height":"",t.midHeight?"mid-height":"",t.minHeight?"min-height":"",t.$utils.isSafari()?"isSafari":""],attrs:{"scroll-y":!0,"scroll-with-animation":t.isAnimation,"scroll-top":t.scrollTop,"show-scrollbar":!0,"scroll-into-view":t.scrollId},on:{scrolltolower:function(a){arguments[0]=a=t.$handleEvent(a),t.scrolltolower.apply(void 0,arguments)},scroll:function(a){arguments[0]=a=t.$handleEvent(a),t.scroll.apply(void 0,arguments)}}},[t._t("default")],2),p("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.canGoTop,expression:"canGoTop"}],staticClass:"goToTop",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goTop()}}},[p("v-uni-image",{staticClass:"top-image",attrs:{src:n("8e68")}})],1)],1)},e=[]},a56d:function(t,a,n){var p=n("24fb");a=p(!1),a.push([t.i,"p span[data-v-6eb74903]{padding-left:2em;line-height:1.5em}",""]),t.exports=a},aafe:function(t,a,n){var p=n("24fb");a=p(!1),a.push([t.i,".scroll-view[data-v-33a53ea2]{height:100vh;height:calc(100vh - 94px);overflow:scroll;width:100%}.max-height[data-v-33a53ea2]{height:100vh!important}.mid-height[data-v-33a53ea2]{height:calc(100vh - 49px)!important}.min-height[data-v-33a53ea2]{height:calc(100vh - 94px)!important}.max-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 75px)!important}.mid-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 49px - 75px)!important}.min-height.isSafari[data-v-33a53ea2]{height:calc(100vh - 94px - 75px)!important}.goToTop[data-v-33a53ea2]{position:fixed;bottom:%?55?%;right:%?8?%;z-index:99999;bottom:%?150?%}.top-image[data-v-33a53ea2]{width:%?44?%;height:%?68?%}",""]),t.exports=a},abee:function(t,a,n){var p=n("a56d");"string"===typeof p&&(p=[[t.i,p,""]]),p.locals&&(t.exports=p.locals);var s=n("4f06").default;s("337262d0",p,!0,{sourceMap:!1,shadowMode:!1})},c35f:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var p={props:{maxHeight:{type:Boolean,default:!1},midHeight:{type:Boolean,default:!1},minHeight:{type:Boolean,default:!1},scrollId:{type:String,default:""},isAnimation:{type:Boolean,default:!0}},data:function(){return{canGoTop:!1,canGoTopHeight:2e3,scrollTop:0,old:{scrollTop:0},isSafari:/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)}},methods:{scrolltolower:function(){this.$emit("scrolltolower")},scroll:function(t){this.old.scrollTop=t.detail.scrollTop,this.canGoTop=t.detail.scrollTop>this.canGoTopHeight},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),this.canGoTop=!1},toBottom:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=99999999}))}}};a.default=p},c70c:function(t,a,n){"use strict";n.r(a);var p=n("9e8c"),s=n("c849");for(var e in s)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return s[t]}))}(e);n("16b4");var i,o=n("f0c5"),r=Object(o["a"])(s["default"],p["b"],p["c"],!1,null,"33a53ea2",null,!1,p["a"],i);a["default"]=r.exports},c849:function(t,a,n){"use strict";n.r(a);var p=n("c35f"),s=n.n(p);for(var e in p)["default"].indexOf(e)<0&&function(t){n.d(a,t,(function(){return p[t]}))}(e);a["default"]=s.a},e846:function(t,a,n){"use strict";n.d(a,"b",(function(){return s})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return p}));var p={cScroll:n("c70c").default},s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("c-scroll",{attrs:{midHeight:!0}},[n("h1",{attrs:{align:"center"}},[t._v("缘来是你服务协议")]),n("p",[n("span",[t._v("欢迎使用缘来是你。")])]),n("p",[n("span",[t._v("本服务协议（以下简称“协议”）是您与缘来是你开发团队之间关于您成为本产品用户所订立的协议。")])]),n("p",[n("span",[t._v("请在使用本产品的服务之前认真阅读下述条款，特别是本协议含有免除或者限制我们责任的条款（该等条款通常含有“不负任何责任”、“无义务”等词汇），否则您无权注册、登录或使用本协议所涉相关服务。您的注册、登录、使用等行为将视为对本《协议》的接受，并同意接受本《协议》各项条款的约束。为免歧义，本协议中的“注册”、“登录”或“使用”是指您注册成为本产品用户并使用本产品提供的任何服务，或者您未注册成为本产品用户，但通过阅读、浏览、复制或以其他方式使用本产品上提供的任何信息以及以任何方式使用本产品提供之各类服务。")])]),n("p",[n("span",[t._v("您对本协议的接受即受全部条款的约束，包括接受缘来是你团队对任一服务条款随时所做的任何修改。本《协议》可由缘来是你团队随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可以查阅最新版协议条款。在缘来是你团队修改《协议》条款后，如果用户不接受修改后的条款，请立即停止使用缘来是你提供的服务，用户继续使用缘来是你提供的服务将被视为已接受了修改后的协议。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("1.服务和资格")])]),n("p",[n("span",[t._v("1.1服务内容。缘来是你团队的服务是指缘来是你产品上显示的全部功能及服务。")])]),n("p",[n("span",[t._v("您理解并同意：为改善用户体验、完善服务内容，缘来是你会对付费用户及/或其相关服务、权益、功能、界面等进行更新、修改，包括开发新功能/权益、删除旧功能/权益等。前述的更新、修改，缘来是你会在相应的服务页面进行展示或通知。")])]),n("p",[n("span",[t._v("1.2\n\t\t\t注册资格。您必须年满18周岁并且是具有中国国籍的单身人士才能注册成为缘来是你的用户或使用本产品。注册成为本产品之用户或使用本产品，表示您陈述并保证您已具备独立签定本协议，并遵守本协议所有条款之民事权利能力及民事行为能力。")])]),n("p",[n("span",[t._v("为免歧义，此处“单身人士”系指尚未与他人缔结婚姻关系的任何具有中国国籍的公民。")])]),n("p",[n("span",[t._v("在缘来是你提供服务过程中，如果您的状态发生变更，已经不符合产品注册资格，请联系我们注销您的用户资格，否则由此产生的所有责任均由您自行承担。")])]),n("p",[n("span",[t._v("1.3\n\t\t\t信息。在满足上述资格的情况下，您可以注册成为本产品的用户。要创建并维持用户账户，您必须向我们提供正确有效的信息，承诺以其真实身份注册成为缘来是你的用户，并保证所提供的个人身份资料，信息真实、完整、有效，依据法律规定和本协议约定对所提供的信息承担相应的法律责任。")])]),n("p",[n("span",[t._v("信息授权。任何您传输至本产品或在本产品上公布的资料都将视为非机密和非专有的。您的上述传输行为表明您已同意我们对公布及以其他方式使用该类资料将不承担任何责任。同时，您也授权我们和我们指定的人员有权复制、披露、传播、整合或以其他方式使用该类数据、图像、声音、文本以及上述资料包含的其他内容，以用作商业或非商业目的，并且您同意我们有权以上述方式无偿使用该信息。")])]),n("p",[n("span",[t._v("缘来是你有权对您更新的信息真实性和合法性进行审核。若您所提供的资料与事实不符或所提供的资料业已变更而未更新或有任何误导之嫌导致缘来是你无法为您进一步提供服务，缘来是你团队不因此承担任何责任。")])]),n("p",[n("span",[t._v("1.4\n\t\t\t声明。您必须是用户账号的实际拥有人，仅代表您自己接受缘来是你团队及缘来是你的各项服务。用户账号禁止赠与、借用、租用、转让或售卖，否则由此给他人或缘来是你造成损失的，由您承担所有责任。如果缘来是你发现使用者并非账号初始注册人，有权在未经通知的情况下回收该账号而无需向该账号使用人承担法律责任，由此带来的包括并不限于用户通讯中断、用户资料和道具等清空等损失由用户自行承担。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("2. 帐户安全")])]),n("p",[n("span",[t._v("您应当采取适当措施保障注册本产品过程中所指定之用户名和密码的机密性，不应在您公开的用户档案中包含任何联系方式（包括但不限于电话号码、街道地址、姓氏、URL、电子邮件地址或即时聊天工具号码）。而且您对以您的用户名和密码进行的所有活动承担全部责任。您同意：(a)一经发现，将未经授权使用您的用户名或密码或其他侵犯帐户安全的任何行为立即通知本产品；(b)\n\t\t\t确保您于每次会话结束后退出您的帐户；(c)本产品对因您未遵守上述规定而给您或他人带来的任何损失不承担责任。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("3.用户服务使用规则")])]),n("p",[n("span",[t._v("3.1\n\t\t\t为保护本产品所有用户之利益，以及保障本产品持续经营之目的，除经我们事先书面允许之外，您不得在任何公共信息平台（包括但不限于任何产品、网页、微博、报纸、期刊、电视、电影等各种类型的媒体）或在使用任何网络软件（包括但不限于QQ、MSN等即时通讯工具）的过程中将您在本产品的ID号码或昵称与您的任何联系方式一并予以公布。一旦我们发现您存在上述行为，则我们有权独立做出判断并就此采取限制您的用户权限或取消您的用户资格等惩罚性措施。")])]),n("p",[n("span",[t._v("3.2\n\t\t\t为保护本产品所有用户之利益，以及保障本产品持续经营之目的，一旦我们发现您在本产品的ID或昵称和相应个人的联系方式被一并公布在任何其他公共信息平台（包括但不限于任何产品、网页、微博、报纸、期刊、电视、电影等各种类型的媒体）或被任何个人通过网络软件（包括但不限于QQ、MSN等即时通讯工具）所公布，无论该信息的公布是任何人所为，您在此同意完全授权我们，在您用户身份持续期间，就撤销上述公布之信息采取任何行动，在前述公布之信息得以撤销之前，我们有权以任何方式限制您在本产品的用户权利，无论该信息之公布是否是您所为。对于我们采取以上措施而给您带来的不便甚至损失，于缔结本协议时您已表示理解并同意完全免除我们因此给您造成的任何损失的赔偿责任。对于因您公布上述信息而给我们造成的损失，我们有权要求您予以赔偿。")])]),n("p",[n("span",[t._v("3.3 用户不得将本产品用作商业用途。本产品仅供用户为个人目的使用，除非经我们书面授权，不得与任何商业行为相关联。")])]),n("p",[n("span",[t._v("3.4 提交信息真实性声明。您必须对您在本产品公布、提交、张贴或显示的任何内容，或您通过本产品提供之服务传输给其他用户的任何内容负全部责任。您声称并保证您在任何时候公布的内容是\n\t\t\t(a)准确真实和非误导性的、(b)未违反本协议和(c)任何情况下不会侵犯任何第三方的权利和利益。")])]),n("p",[n("span",[t._v("3.5 禁止利用本产品制作、复制、发布、传播含有下列内容的信息：")])]),n("p",[n("span",[t._v("a.反对宪法所确定的基本原则的；")])]),n("p",[n("span",[t._v("b.危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；")])]),n("p",[n("span",[t._v("c.损害国家荣誉和利益的；")])]),n("p",[n("span",[t._v("d.煽动民族仇恨、民族歧视，破坏民族团结的；")])]),n("p",[n("span",[t._v("e.破坏国家宗教政策，宣扬邪教和封建迷信的；")])]),n("p",[n("span",[t._v("f.散布谣言，扰乱社会秩序，破坏社会稳定的；")])]),n("p",[n("span",[t._v("g.散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；")])]),n("p",[n("span",[t._v("h.侮辱或者诽谤他人，侵害他人合法权益的；")])]),n("p",[n("span",[t._v("i.含有法律、行政法规禁止的其他内容的。")])]),n("p",[n("span",[t._v("3.6 禁止利用本产品发布含有以下内容的信息")])]),n("p",[n("span",[t._v("a.未经允许，构建任何第三人的档案或使用其照片并在本产品发布；")])]),n("p",[n("span",[t._v("b.骚扰或鼓动他人对其他人进行骚扰；")])]),n("p",[n("span",[t._v("c.传播或参与传播“垃圾邮件”、“连锁信”或未经请求的大量邮件或“兜售信息”；")])]),n("p",[n("span",[t._v("d.宣传您知道或应当知道是错误的、误导性信息，或宣传违法活动，或宣扬辱骂、威胁、猥亵、诽谤或损害他人名誉的行为；")])]),n("p",[n("span",[t._v("e.传播受知识产权法律法规保护的作品的违法的、未经授权的副本，包括但不限于提供盗版计算机程序或这些程序的链接、提供如何规避制造商所安装之副本保护设备的信息、或提供盗版音乐或这些盗版音乐文件夹的链接；")])]),n("p",[n("span",[t._v("f.您不应删除本产品包含的任何他人拥有著作权、商标或其他知识产权、所有权的信息；")])]),n("p",[n("span",[t._v("g.从不满18周岁的人那里索取其个人信息或照片并在本产品发布；")])]),n("p",[n("span",[t._v("h.提供关于违法活动的指导性信息，如有关如何制造或购买非法武器、侵犯他人隐私、提供或制造计算机病毒的信息；")])]),n("p",[n("span",[t._v("i.从其他用户处索取密码或个人标识信息，用作商业或非法之目的；")])]),n("p",[n("span",[t._v("j.未经我们事先书面许可，发布销售活动或任何其他商业活动之信息，如竞赛、赌博、交易、广告和金字塔计划。")])]),n("p",[n("span",[t._v("k.通过本产品向其他用户发布有关推销或请求其购买或出售任何产品或服务的信息，或因商业目的发布邀请其他用户参加各类团体或社会活动或其他网络的信息。")])]),n("p",[n("span",[t._v("l.其他违反法律、法规明文规定以及公共道德或者经我们单方面判断为不合适的信息。")])]),n("p",[n("span",[t._v("缘来是你团队有权依据独立的判断对违反以上禁止性行为的任何人进行调查并采取适当的法律行动，包括但不限于，从本产品上删除侮辱性通信、冻结、终止该类侵犯者的用户身份。")])]),n("p",[n("span",[t._v("3.7\n\t\t\t禁止利用本产品从事以下的活动。如果您滥用本产品提供之服务，或利用本产品从事以下不恰当或不合法的行为，本产品有权冻结、终止您用户身份，保留向您采取任何及所有必要法律行动进行索赔的权利。若相关行为涉嫌犯罪的，缘来是你将依法移交司法部门处理。")])]),n("p",[n("span",[t._v("a.冒充任何其他人或实体；")])]),n("p",[n("span",[t._v("b.“跟踪”或以其他方式骚扰任何人；")])]),n("p",[n("span",[t._v("c.未经我们事先特定书面同意，明示或暗示本产品支持您所做的任何声明；")])]),n("p",[n("span",[t._v("d.使用任何软件机器人（Robot/Spider）、站点搜索/检索应用程序，或其他手动或自动设备或程序来检索、索引、“数据挖掘”或以任何方式转载或规避“服务”或其内容的导航结构或表示法；")])]),n("p",[n("span",[t._v("e.未经该类拥有者事先同意，以任何方式张贴、散布或转载任何受保护的资料、商标或其他知识产权或所有权信息；")])]),n("p",[n("span",[t._v("f.删除本产品包含的任何他人拥有著作权、商标或其他知识产权、所有权的信息；")])]),n("p",[n("span",[t._v("g.未经本产品事先书面授权，对本产品及本产品提供之任何服务的任何部分进行“帧联（Framing）”或“镜像(Mirror)”。或使用超文本标记语言元标记（Meta\n\t\t\tTags）或代码或其他提及本产品及本产品提供之任何服务或产品的其他设备的信息，因任何目的，将任何人引导至任何其他产品；")])]),n("p",[n("span",[t._v("h.传输或张贴任何资料，只要它们构成或可能构成以下行为：可能被视为犯罪、或引起民事责任，或违反中国或世界任何其他国家/地区的法律，或侵犯第三方权利；")])]),n("p",[n("span",[t._v("i.除了可适用法律所允许的范围内，修改、改编、再授权、转换、出售、逆向工程、译解、解码或以其他方式反汇编本产品及本产品提供之任何服务所使用的任何软件的任何部分，或使其他人这样做；")])]),n("p",[n("span",[t._v("j.隐瞒您的真实婚姻状况或利用您的用户账号从事以下活动：")])]),n("p",[n("span",[t._v("·利用缘来是你的用户权限向他人推销“可代其向指定客户联系”的服务；")])]),n("p",[n("span",[t._v("·将您的用户账号及密码交由其他人使用，包括但不限于转让、借用等；")])]),n("p",[n("span",[t._v("·以盈利或非盈利的目的，帮助他人传达交友及求爱信息或索取缘来是你用户联系方式；")])]),n("p",[n("span",[t._v("·其他任何非以本人交友及求爱为目的所实施的行为。")])]),n("p",[n("span",[t._v("k.出售、泄露缘来是你用户信息。")])]),n("p",[n("span",[t._v("3.8\n\t\t\t您有权就本产品的其他用户有酒托茶托、花篮诈骗、情感诈骗、资料虚假等问题时向缘来是你进行举报，您承诺前述举报行为均真实可信，缘来是你在接到举报后会积极予以相应。但请您知悉，由于您的投诉信息可能涉嫌侵犯被投诉人的姓名权、名誉权、隐私权或其它合法权益，您应当承担投诉所产生的全部的法律责任。如您有虚假或恶意投诉，您将受到产品的严肃处理，如果因您虚假或恶意投诉而导致我们遭受任何损失的，您应就我们遭受的该等损失承担全额赔偿责任。如果由此导致任何第三方对我们提出任何权利请求的，您应保证我们不承担该等权利请求（包括适当的时候发表声明进行澄清）。如果我们先行对第三方承担责任的，我们有权对您进行追偿，您有义务在收到我们的追偿通知时全额赔偿我们的损失。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("4.隐私")])]),n("p",[n("span",[t._v("为了达成向您提供及时、优质服务之目的，在您注册时或访问本产品网页，或使用本产品产品或服务，或参加任何形式的用户活动时，我们会收集并使用您的个人信息。这些个人信息包括但不限于：您的昵称、出生年月、性别、学业、照片、手机号码等联系方式个人信息。本产品收集上述信息将用于：提供产品服务、改进网页内容，满足用户对某种产品、活动的需求、通知用户最新产品、活动信息、或根据法律法规要求的用途。")])]),n("p",[n("span",[t._v("您在缔结本协议时已理解并同意，您在本产品上公开发布的个人信息，任何登陆到本产品的第三人均可查看。尊重用户个人隐私是缘来是你团队的一项基本政策。所以，在未经您的授权时缘来是你不会公开、编辑或透露您的未在本产品上公开发布的个人信息及保存在缘来是你各项服务中的非公开内容。但是为了保证向您提供及时、优质的服务，我们在诚信的基础上认为透露这些信息某些情况是必要的，我们会将您的个人信息向下列第三人提供：\n\t\t\t(a)、您明确同意让第三方共享资料；( b)、只有透露您的个人信息，才能提供您所要求的产品和服务；( c)、为保护本产品、用户及社会公众的财产权利或人身权利；( d)、根据法律法规的规定，向司法机关提供；(e)、\n\t\t\t“隐私政策”列出的各类情况；(f)执行软件验证服务；(g)执行软件升级服务；(h)网络同步服务；(j)提高用户的使用安全性并提供客户支持；(j)被搜索引擎在搜索结果中显示；(k)、因用户使用本产品特定功能或因用户有潜在婚恋服务意愿，向代表我们提供产品或服务的合作单位或授权单位（包括但不限于缘来是你线下VIP婚介服务授权店）提供您的个人信息；(l)受到黑客攻击导致用户信息泄漏的；（m）、为实现使用目的，其他有必要的情况。")])]),n("p",[n("span",[t._v("在前述情况下我们将您的个人信息提供给第三方不需要获得您事先同意。如因此给您造成任何损害您同意免除我们的相应法律责任。")])]),n("p",[n("span",[t._v("如果您位于中华人民共和国（为本协议之目的，本协议中所指中华人民共和国或中国，仅包括中华人民共和国大陆地区，不包括香港特别行政区、澳门特别行政区和台湾地区）境外，请注意，您提供的信息将被发送到中华人民共和国。通过成为本产品的用户，您同意:\n\t\t\t(a) 将您的个人信息传输到中华人民共和国；(b) 在中华人民共和国境内使用；(c) 依据我们的“隐私政策”，在服务提供和操作中将您的个人信息传输给第三方。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("5.知识产权")])]),n("p",[n("span",[t._v("5.1\n\t\t\t缘来是你团队对本产品所拥有之权利包括但不限于缘来是你及其许可方受中国法律法规及世界范围内其他可适用的法律、法规或国际条约、国际惯例保护的任何资料、商标及其他知识产权和所有权。除公共领域可获得的信息或者您已获得我们书面许可的情况外，您不得复制、修改、公布、传播、执行、转载、许可使用、创建衍生作品、转移显示、出售、转售、以非法手段获取或以任何其他方式处置任何缘来是你团队拥有知识产权或所有权的任何信息。")])]),n("p",[n("span",[t._v("5.2未经该类拥有者事先同意，您不能以任何方式张贴、散布或转载任何受保护的资料、商标或其他知识产权。除上述规定外，如果您相信您的作品在本产品上被以一种构成侵害知识产权的方式复制或公布，请向我们的知识产权代理提供以下全部信息：知识产权的所有人（含被授权人或所有人的代理人）的电子或实际签名；您声称受到侵犯的受保护作品之说明；您声称受侵犯资料在本产品上的位置说明；您的地址、电话号码和电子邮件地址；有关您确信该复制或公布行为未经知识产权所有者或其代理或法律批准的书面陈述；您表明以上信息是准确的而且您是知识产权所有人或所有人的代理人的书面陈述，该书面陈述需您本人签字确认方被视为有效。")])]),n("p",[n("span",[t._v("5.3您一经成为本产品之用户或使用本产品，则表示您承认缘来是你团队对本产品及本产品所收集、制作、发布之各类信息拥有完全知识产权或所有权，包括但不限于各类文档、图像、数据库等，除非法律或本协议明确规定该等权利属于用户个人。")])]),n("p",[n("span",[t._v("5.4如您将各类信息公布到本产品的任何公共区域（包括珍爱直播间），则表示您同意，同时您自动授予，并且您陈述并保证您有权授予本产品不可撤销的、永久的、非独占的、完全免费的、世界范围的许可。在该等许可下，您同意本产品使用、复制、改编、汇编、执行、显示并传播该内容，您也同意我们基于该内容创作衍生作品或将该内容整合到其他作品中且我们对该等衍生作品或整合作品拥有完全的知识产权；同时，在该等许可下，您已授予我们对上述许可的再许可权，即我们可以将您授予我们的许可转授给其他第三人，并且我们行使再许可权不需要再获得您的同意。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("6.免责条款")])]),n("p",[n("span",[t._v("6.1于缔结本协议时，您已同意就下列事由免除我们的法律责任：")])]),n("p",[n("span",[t._v("a.我们会依据本协议为您提供服务，但您已理解并同意我们不保证所提供的服务将最终帮助您找到您的伴侣。")])]),n("p",[n("span",[t._v("b.您承认对于您利用本产品提供的服务或信息而从事的各类行为，包括在本产品发布各类信息，利用本产品提供之信息联系其他用户等，均为您个人行为且您个人对该类行为承担完全责任。")])]),n("p",[n("span",[t._v("c.对于用户上传的照片、资料、证件等信息，本产品已采用相关措施并已尽合理努力进行审核，但不保证其内容的正确性、合法性或可靠性，因此您在使用本产品时，可能会接触到令人不快、不适当或令人厌恶的内容。您同意在任何情况下，我们均不为用户经由本产品以张贴、发送电子邮件或其它方式传送的任何内容负责。相关责任由上传上述内容的用户负责。对于上传的信息，其它用户应以自己的独立判断来确定上传的照片的真实性、准确性，并独立承担可能产生的不利后果和责任，本产品不承担任何法律责任。")])]),n("p",[n("span",[t._v("d.对于本产品提供的各种广告信息、链接、资讯等（如有），本产品已采用相关措施并已尽合理努力进行审核；但并不就你与经由本产品所提供之信息与前述广告主、广告经营者进行的联系或进行的商业往来做出任何承诺及保证，基于前述行为完全属于您和广告主、广告经营者之间的行为，与本产品没有任何关系。对于前述商业往来所产生的任何损害或损失，本产品不承担任何责任。")])]),n("p",[n("span",[t._v("e.是否使用本产品服务下载或取得任何资料应由您自行考虑并自负风险，您同意因任何资料的下载而导致您电脑系统的任何损坏或数据丢失等后果，本产品不承担任何责任。")])]),n("p",[n("span",[t._v("f.对于用户自发组织的任何活动，或自发成立的组织的任何行为，本产品不负责任。")])]),n("p",[n("span",[t._v("6.2\n\t\t\t责任限制。本产品和缘来是你团队或任何珍爱团队关联企业，对于您或任何第三人因以任何方式连接本产品、或因使用、无法使用或使用本产品的结果可能导致的任何金钱或其他损失或损害不承担任何责任（该等损失或损害包括但不限于，任何直接的、间接的、惩罚性的或必然的损失或伤害，或任何收入、利润、信誉、数据、合同、资金使用上的任何损失，或以任何方式由任何种类的业务中断引起或与之相关的损失或伤害，无论是民事侵权行为、合同还是其他）。")])]),n("p",[n("span",[t._v("遵照以前所述，您同意，倘若您因为使用本产品或本产品提供之服务而遭受损失，且经过我们书面确认本产品应当对该损失负责的情况下，我们对您承担的赔偿责任，将不超过您已支付的用户费的金额。")])]),n("p",[n("span",[t._v("6.3用户因第三方如电信部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力原因而遭受的一切损失，缘来是你团队及合作单位不承担责任。")])]),n("p",[n("span",[t._v("6.4本服务同大多数互联网服务一样，受包括但不限于用户原因、网络服务质量、社会环境等因素的差异影响，可能受到各种安全问题的侵扰。用户应加强信息安全及使用者资料的保护意识，要注意加强密码保护，以免遭致损失和骚扰。")])]),n("p",[n("span",[t._v("6.5对于用户的投诉，本产品将认真核实，但不能保证最终公布的投诉处理结果的完全公正，您同意对于投诉内容和投诉处理结果，如侵犯您的隐私权、名誉权等合法权利，免除本产品的相应法律责任。")])]),n("p",[n("span",[t._v("本产品保留根据业务发展情况修改上述免责事由的权利。")])]),n("p",[n("span",[t._v("6.6在任何情况下，缘来是你团队均不对任何间接性、后果性、惩罚性、偶然性、特殊性或刑罚性的损害，包括因用户使用服务而遭受的利润损失、利益损失，承担责任（即使缘来是你团队已被告知该等损失的可能性亦然）。尽管本协议中可能含有相悖的规定，缘来是你团队对用户承担的全部责任，无论因何原因或何种行为方式，始终不超过用户在使用缘来是你服务而支付给缘来是你团队的服务费用(如有)\n\t\t\t。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("7.豁免")])]),n("p",[n("span",[t._v("如果您因任何其他用户因使用本产品或其提供之服务引起的行为，向其要求索赔或进行诉讼，您同意独自进行该类索赔或诉讼，不会要求我们协助举证或者将我们列为被告，而且您将豁免我们承担由该索赔或诉讼引起的任何相关联的所有索赔、责任和损失。")])]),n("p",[n("span",[t._v("如果由于您使用本产品或其提供之服务的行为或其他相关行为，导致我们遭受索赔或诉讼，您同意就我们因此所受的全部损失进行赔偿，该等赔偿应包括但不限于我们在此索赔或者诉讼中支付的律师费及其他诉讼费用。您也同意在涉及上述任何索赔及诉讼时，尽其所能地给予配合与协助，以最大限度的降低我们的损失。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("8.本协议之生效及终止")])]),n("p",[n("span",[t._v("一旦您开始使用本产品或者成为本产品的用户，则本协议立即生效。如果您选择使用本产品或者成为本产品的用户，表示您选择开始使用本产品提供之任何信息及服务并同时接受本协议所有条款之约束。")])]),n("h2",{attrs:{align:"center"}},[n("span",[t._v("9.不可抗力")])]),n("p",[n("span",[t._v("您同意并认可，对于因超出我们合理控制范围的任何事件或情况，包括但不限于战争、入侵、恐怖袭击、自然灾害或其他不可抗力，以及任何技术故障的发生、电气短路、第三方侵入本产品等情况所给您造成的任何损失或损害，我们无需承担任何赔偿责任，并不被视为违反本协议。")])]),n("br"),n("p",[n("strong",[n("span",[t._v("我已阅读并充分理解了以上协议中各条款，特别是涉及免除或者限制缘来是你责任的免责条款，对用户的权利限制的条款、约定争议解决方式、司法管辖、法律适用的条款，并且同意以上协议的全部内容。")])])])])},e=[]}}]);
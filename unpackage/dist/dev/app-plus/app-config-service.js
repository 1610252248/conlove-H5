
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/square/post","pages/square/square","pages/square/treeHole","pages/user/user","pages/release/release","pages/message/message"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"缘来是你","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#111111","selectedColor":"#111111","borderStyle":"white","backgroundColor":"#e6e6e6","list":[{"pagePath":"pages/home/home","iconPath":"static/tabar-image/home.png","selectedIconPath":"static/tabar-image/home-select.png","text":"缘来"},{"pagePath":"pages/square/square","iconPath":"static/tabar-image/square.png","selectedIconPath":"static/tabar-image/square-select.png","text":"小宇宙"},{"pagePath":"pages/release/release","iconPath":"static/tabar-image/jia.png"},{"pagePath":"pages/message/message","iconPath":"static/tabar-image/message.png","selectedIconPath":"static/tabar-image/message-select.png","text":"消息"},{"pagePath":"pages/user/user","iconPath":"static/tabar-image/user.png","selectedIconPath":"static/tabar-image/user-select.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"conlove","compilerVersion":"2.6.8","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"缘来","enablePullDownRefresh":true}},{"path":"/pages/square/post","meta":{},"window":{}},{"path":"/pages/square/square","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/square/treeHole","meta":{},"window":{}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/release/release","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
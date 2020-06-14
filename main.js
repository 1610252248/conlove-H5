import Vue from 'vue'
import App from './App'
import $utils from 'common/utils.js';
import $http from 'common/zhouWei-request/requestConfig.js'
//引入vuex
import store from './store'
//把vuex定义成全局组件
Vue.prototype.$store = store

import cScroll from 'components/conlove/c-scroll.vue'
import cCustom from 'components/conlove/c-custom.vue'
Vue.component('c-custom',cCustom)

Vue.component("cScroll", cScroll)


Vue.prototype.$http = $http;
Vue.prototype.$utils = $utils;
Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
	...App
})
app.$mount()

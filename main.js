import Vue from 'vue'
import App from './App'
import $http from 'common/zhouWei-request/requestConfig.js'
import $utils from 'common/utils.js';
import cScroll from 'components/conlove/c-scroll.vue'


Vue.prototype.$http = $http;
Vue.prototype.$utils = $utils;

Vue.config.productionTip = false

App.mpType = 'app'

Vue.component("cScroll", cScroll)

const app = new Vue({
	...App
})
app.$mount()

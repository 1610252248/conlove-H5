import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import $http from 'common/zhouWei-request/requestConfig.js'
import $utils from 'common/utils.js';
Vue.prototype.$http = $http;
Vue.prototype.$utils = $utils;


const app = new Vue({
	...App
})
app.$mount()

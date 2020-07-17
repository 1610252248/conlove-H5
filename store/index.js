import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
		userDB: uni.getStorageSync("user") ? JSON.parse(uni.getStorageSync("user")) : {},
	},
    actions: {
		set({state}, data) {
		  // 把学校和认证学校 更新
		  state.userDB = data.user;
		  if(data.token != null) {
			  state.token = data.token;
			  uni.setStorageSync('token', data.token);
		  }
		  uni.setStorageSync('user', JSON.stringify(data.user));
		},
		del({state}) {
		  state.token = '';
		  state.userDB = {};
		  uni.removeStorageSync('token');
		  uni.removeStorageSync('user');
		}
	},
	getters: {
		isLogin(state) {
		  return JSON.stringify(state.userDB) !== "{}";
		}
	}
})
export default store
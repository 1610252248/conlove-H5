import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		newPost: [],
		newTreeHole: [],
		newHome: [],
		postData: {
			user: {
				avatar: '/static/image/default-2.jpeg',
				userName: 'QAQ',
				isFemale: true
			},
			hidePost: false,
			createTime: '',
			content: '',
			imageList: [],
			comments: [],
		},
		homeData: {
			title: '',
			sex: '',
			school: '',
			grade: '',
			birthDate: '',
			height: null,
			introduce: '',
			images: [],
		},
		token: uni.getStorageSync('token') ? uni.getStorageSync('token') : '',
		userDB: uni.getStorageSync("user") ? JSON.parse(uni.getStorageSync("user")) : {},
		loginRouterIndex: 0
	},
    mutations: {
		addNewPost({newPost}, payload) {
			newPost.unshift(payload)
		},
		addNewTreeHole({newTreeHole}, payload) {
			newTreeHole.unshift(payload)
		},
		addNewHome({newHome}, payload) {
			newHome.unshift(payload)
		},
	},
    actions: {
		set({state}, data) {
		  
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
		},
		setPostData({state}, payload) {
			state.postData = payload;
		},
		setHomeData({state}, payload) {
			console.log(payload);
			state.homeData = payload;
		},
		setloginRouterIndex({state}, payload) {
			if(state.loginRouterIndex) {
				state.loginRouterIndex = payload;
			}
		}
	},
	getters: {
		isLogin(state) {
		  return JSON.stringify(state.userDB) !== "{}";
		}
	}
})
export default store
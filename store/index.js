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
			sex: 0,
			school: '',
			grade: '请选择',
			age: '请选择',
			height: null,
			introduce: '',
			images: [],
		},
		isLogin: false,
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
		setPostData({state}, payload) {
			state.postData = payload;
		},
		setHomeData({state}, payload) {
			console.log(payload);
			state.homeData = payload;
		},
		setIsLogin({state}, flag = true) {
			state.isLogin = flag;
		}
	}
})
export default store
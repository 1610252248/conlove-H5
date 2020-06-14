import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		newPost: [],
		newTreeHole: [],
		newHome: [],
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
		}	
	},
    actions: {}
})
export default store
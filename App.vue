<script>
import pageAnimation from '@/components/page-animation';
import { mapState, mapActions } from 'vuex';
export default {
	
	mixins: [pageAnimation],
	onShow() {
		this.$http.get('/user/refreshUser').then(res => {
			if(res.status == this.$http.SUCCESS) {
				this.set({user: res.data});
			} else {
				this.del()
			}
		})
	},
	computed: {
		// 使用对象展开运算符将 getter 混入 computed 对象中
		...mapState(['userDB'])
	},
	methods: {
		...mapActions([
			'set', 'del' // 将 `this.setIsLogin()` 映射为 `this.$store.dispatch('setIsLogin')`
		])
	}
};
</script>

<style lang="scss">
@import 'node_modules/uview-ui/index.scss';
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'my.css';

page {
	background-color: #ffffff;
	width: 100%;
	height: 100%;
	margin: 0;
	overflow: hidden;
}
</style>

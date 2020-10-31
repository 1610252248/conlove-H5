import labelList from 'pages/user/label-data/label.js'
export default {
	data() {
		return {
			selectTagList: [],
			colorList: ['bg-red', 'bg-yellow', 'bg-blue'],
			labelList: labelList,
			tabCur: 0,
		}
	},
	methods: {
		// 换一批 个性展示
		changeList() {
			let cur = this.tabCur;
			let info = this.labelList[cur];
			//
			if (info.index + 1 < info.list.length) info.index++;
			else {
				this.$u.toast('没有其他标签了');
				info.index = 0;
			}
		},
		//获取导航栏选中的 颜色
		getTabColor(tab) {
			if (this.selectTagList.find(item => item.name === tab)) {
				return this.getTagColor(this.tabCur);
			}
			return 'tag-border';
		},
		// 获取选中标签的 颜色
		getTagColor(idx) {
			return this.colorList[idx % 3];
		},
		// 选中/取消 标签
		changeTag(label) {
			this.changUser = true;
			let idx = this.selectTagList.findIndex(item => item.name === label);
		
			let obj = { name: label };
		
			if (idx != -1) this.selectTagList.splice(idx, 1);
			else this.selectTagList.push(obj);
		},
		changeTab(index) {
			this.tabCur = index;
		},
	}
}
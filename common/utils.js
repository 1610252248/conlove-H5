/*
 * strBirthday: 2010.9.8
 * 由生日获取岁数
 */
function getAge(strBirthday) {
	var returnAge;
	var strBirthdayArr = strBirthday.split("-");
	var birthYear = strBirthdayArr[0];
	var birthMonth = strBirthdayArr[1];
	var birthDay = strBirthdayArr[2];

	var now = new Date();
	var nowYear = now.getFullYear();
	var nowMonth = now.getMonth() + 1;
	var nowDay = now.getDate();

	if (nowYear == birthYear) {
		returnAge = 0; //同年 则为0岁
	} else {
		var ageDiff = nowYear - birthYear; //年之差
		if (ageDiff > 0) {
			if (nowMonth == birthMonth) {
				var dayDiff = nowDay - birthDay; //日之差
				if (dayDiff < 0) {
					returnAge = ageDiff - 1;
				} else {
					returnAge = ageDiff;
				}
			} else {
				var monthDiff = nowMonth - birthMonth; //月之差
				if (monthDiff < 0) {
					returnAge = ageDiff - 1;
				} else {
					returnAge = ageDiff;
				}
			}
		} else {
			returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
		}
	}

	return returnAge; //返回周岁年龄
}

// function fromNow(date) {
// 	var dur = new Date() - new Date(date);
// 	return (
// 		dur < 10 * 1000 && '刚刚' ||
// 		dur < 30 * 60 * 1000 && '半小时前' ||
// 		dur < 60 * 60 * 1000 && '一小时前' ||
// 		dur < 12 * 60 * 60 * 1000 && '半天前' ||
// 		dur < 24 * 60 * 60 * 1000 && '一天前' ||
// 		dur < 3 * 24 * 60 * 60 * 1000 && '三天前' ||
// 		dur < 7 * 24 * 60 * 60 * 1000 && '一周前' ||
// 		dur < 14 * 24 * 60 * 60 * 1000 && '两周前' ||
// 		dur < 30 * 24 * 60 * 60 * 1000 && '一个月前' || '很久以前'
// 	)
// }

// 一级登录验证
function needLogin() {
	uni.showToast({
		title: '请登录后操作',
		icon: "none",
		duration: 2000,
		success: () => {
			uni.navigateTo({
				url: '/pages/index/login'
			})
		}
	})
}

module.exports = {
	getAge: getAge,
	// fromNow: fromNow,
	needLogin: needLogin
}

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

var dateUtils = {
	// 重要的执行方法
	trans : function(date) {
	  var d = this.parse(date)
	  var t = new Date()
	  var objd = {
	    'Y': d.getFullYear(),
	    'm': parseInt(d.getMonth()) + 1,
	    'd': parseInt(d.getDate()),
	    'w': d.getDay(),
	    'H': d.getHours(),
	    'i': d.getMinutes(),
	    's': d.getSeconds(),
	  }
	  //分钟小于10 加一个0
	  if(d.getMinutes()<10){
	    objd.i = '0'+ objd.i
	  }
	  var objt = {
	    'Y': t.getFullYear(),
	    'm': parseInt(t.getMonth()) + 1,
	    'd': parseInt(t.getDate()),
	    'w': t.getDay(),
	    'H': t.getHours(),
	    'i': t.getMinutes(),
	    's': t.getSeconds(),
	  }
	
	  var timeStr = ''
	  var dayPerMonthAddTime = this.getDayPerMonth(objd.Y)
	  var week = ['周日','周一','周二','周三','周四','周五','周六']
	
		if(objd.H < 13) {
		  // timeStr += '上午 '
		  objd.H = '上午 ' + objd.H
		} else {
		  objd.H = '下午 '+ (objd.H - 12)
		}
	
	  if(objd.Y == objt.Y && objd.m == objt.m && objd.d == objt.d) {
	    //判断当天
	    timeStr += objd.H + ':' + objd.i
	
	  } else if ((objd.Y == objt.Y && objd.m == objt.m && objd.d == objt.d - 1) || (objd.Y == objt.Y && objt.m - objd.m == 1 && dayPerMonthAddTime[objd.m] == objd.d && objt.d == 1) || (objt.Y - objd.Y == 1 && objd.m == 12 && objd.d == 31 && objt.m == 1 && objt.d == 1)) {
	    //判断昨天
	    timeStr += '昨天 ' + objd.H + ':' + objd.i + ' '
	  } else if ((objd.Y == objt.Y && objd.m == objt.m && objt.d - objd.d < 7) || (objd.Y == objt.Y && objt.m - objd.m == 1 && dayPerMonthAddTime[objd.m] - objd.d + objt.d < 7|| (objt.Y - objd.Y == 1 && objd.m == 12 && objt.m == 1 && 31 - objd.d + objt.d < 7))) {
	    //判断为七天内显示为周几
	    timeStr += week[objd.w] + ' ' + objd.H + ':' + objd.i
	
	  } else {
	    //直接展示年月日
	    timeStr += objd.Y + '年' + objd.m + '月' + objd.d + '日 ' + objd.H + ':' + objd.i
	  }
	
	// **#判断上下午，不要可以注释掉**
	 
	
	  return timeStr
	},
	
	//月份
	getDayPerMonth: function(year) {
	  var arr = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	  //闰年
	  if((year%4 == 0 && year%100 != 0) || (year%400 == 0)) {
	    arr[2] = 29
	  } 
	  return arr
	},
	
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['月']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + ' ' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},
	currentDate: function() {
		var date = new Date();
		var year = date.getFullYear(); //年 ,从 Date 对象以四位数字返回年份
		var month = date.getMonth() + 1; //月 ,从 Date 对象返回月份 (0 ~ 11) ,date.getMonth()比实际月份少 1 个月
		var day = date.getDate(); //日 ,从 Date 对象返回一个月中的某一天 (1 ~ 31)
		var hours = date.getHours(); //小时 ,返回 Date 对象的小时 (0 ~ 23)
		var minutes = date.getMinutes(); //分钟 ,返回 Date 对象的分钟 (0 ~ 59)
		var seconds = date.getSeconds(); //秒 ,返回 Date 对象的秒数 (0 ~ 59)
		//修改月份格式
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		//修改日期格式
		if (day >= 0 && day <= 9) {
			day = "0" + day;
		}
		//修改小时格式
		if (hours >= 0 && hours <= 9) {
			hours = "0" + hours;
		}
		//修改分钟格式
		if (minutes >= 0 && minutes <= 9) {
			minutes = "0" + minutes;
		}
		//修改秒格式
		if (seconds >= 0 && seconds <= 9) {
			seconds = "0" + seconds;
		}
		//格式(yyyy-mm-dd hh:mm:ss)
		var currentFormatDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
		return currentFormatDate;
	},
	GetAge: function(strBirthday) {
		var returnAge,
			strBirthdayArr = strBirthday.split("-"),
			birthYear = strBirthdayArr[0],
			birthMonth = strBirthdayArr[1],
			birthDay = strBirthdayArr[2],
			d = new Date(),
			nowYear = d.getFullYear(),
			nowMonth = d.getMonth() + 1,
			nowDay = d.getDate();
		if (nowYear == birthYear) {
			returnAge = 0; //同年 则为0周岁
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
	},
	getconstellation: function(strBirthday) {
		var returnAge,
			strBirthdayArr = strBirthday.split("-"),
			month = strBirthdayArr[1],
			day = strBirthdayArr[2];
		var d = new Date(1999, month - 1, day, 0, 0, 0);
		var arr = [];
		arr.push(["魔羯座", new Date(1999, 0, 1, 0, 0, 0)])
		arr.push(["水瓶座", new Date(1999, 0, 20, 0, 0, 0)])
		arr.push(["双鱼座", new Date(1999, 1, 19, 0, 0, 0)])
		arr.push(["牡羊座", new Date(1999, 2, 21, 0, 0, 0)])
		arr.push(["金牛座", new Date(1999, 3, 21, 0, 0, 0)])
		arr.push(["双子座", new Date(1999, 4, 21, 0, 0, 0)])
		arr.push(["巨蟹座", new Date(1999, 5, 22, 0, 0, 0)])
		arr.push(["狮子座", new Date(1999, 6, 23, 0, 0, 0)])
		arr.push(["处女座", new Date(1999, 7, 23, 0, 0, 0)])
		arr.push(["天秤座", new Date(1999, 8, 23, 0, 0, 0)])
		arr.push(["天蝎座", new Date(1999, 9, 23, 0, 0, 0)])
		arr.push(["射手座", new Date(1999, 10, 22, 0, 0, 0)])
		arr.push(["魔羯座", new Date(1999, 11, 22, 0, 0, 0)])
		for (var i = arr.length - 1; i >= 0; i--) {
			if (d >= arr[i][1]) return arr[i][0];
		}
	}
};



module.exports = {
	getAge,
	// fromNow: fromNow,
	needLogin,
	dateUtils
}

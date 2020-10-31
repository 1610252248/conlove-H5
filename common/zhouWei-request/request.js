import * as TanslateImage from '@/common/translate-image.js'
export default class request {
	constructor(options) {
		//请求公共地址
		this.baseUrl = options.baseUrl || "";
		//公共文件上传请求地址
		this.fileUrl = options.fileUrl || "";
		//默认请求头
		this.headers = options.headers || {};
		//默认配置
		//是否提示--默认提示
		this.isPrompt = options.isPrompt || false;
		//是否显示请求动画
		this.load = options.load || false;
		//是否使用处理数据模板
		this.isFactory = options.isFactory || false;
		//列表接口是否有加载判断
		this.loadMore = options.loadMore || false;
	}
	// 获取默认信息
	getDefault(url, options, type) {
		//判断url是不是链接
		var urlType = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~/])+$/.test(url);
		let httpUrl;
		if (type == "file") {
			httpUrl = urlType ? url : this.fileUrl + url;
		} else {
			httpUrl = urlType ? url : this.baseUrl + url;
		}
		let config = Object.assign({
			isPrompt: this.isPrompt,
			load: this.load,
			isFactory: this.isFactory,
			loadMore: this.loadMore
		}, options);
		//请求地址
		config.httpUrl = httpUrl;
		//请求头
		config.headers = Object.assign(this.headers, options.headers);
		return config;
	}
	
	//post请求
	post(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "data");
		requestInfo.data = data;
		return new Promise((resolve, reject) => {
			this.getRequest("POST", requestInfo, (state, response) => {
				//是否用外部的数据处理方法
				if (state && requestInfo.isFactory && this.dataFactory) {
					//数据处理
					var factoryInfo = this.dataFactory(requestInfo, response);
					factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
				} else {
					state ? resolve(response) : reject(response);
				}
			});
		});
	}
	//get请求
	get(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "data");
		requestInfo.data = data;
		
		return new Promise((resolve, reject) => {
			this.getRequest("GET", requestInfo, (state, response) => {
				//是否用外部的数据处理方法
				if (state && requestInfo.isFactory && this.dataFactory) {
					//数据处理
					var factoryInfo = this.dataFactory(requestInfo, response);
					factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
				} else {
					state ? resolve(response) : reject(response);
				}
			});
		});
	}
	//put请求
	put(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "data");
		requestInfo.data = data;
		return new Promise((resolve, reject) => {
			this.getRequest("PUT", requestInfo, (state, response) => {
				//是否用外部的数据处理方法
				if (state && requestInfo.isFactory && this.dataFactory) {
					//数据处理
					var factoryInfo = this.dataFactory(requestInfo, response);
					factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
				} else {
					state ? resolve(response) : reject(response);
				}
			});
		});
	}
	//delete请求
	delete(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "data");
		requestInfo.data = data;
		return new Promise((resolve, reject) => {
			this.getRequest("DELETE", requestInfo, (state, response) => {
				//是否用外部的数据处理方法
				if (state && requestInfo.isFactory && this.dataFactory) {
					//数据处理
					var factoryInfo = this.dataFactory(requestInfo, response);
					factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
				} else {
					state ? resolve(response) : reject(response);
				}
			});
		});
	}
	
	//接口请求方法
	getRequest(ajaxType, options, callback) {
		//请求前回调
		
		if (this.requestStart) {
			options.method = ajaxType;
			var requestStart = this.requestStart(options);
			if (typeof requestStart == "object") {
				options.data = requestStart.data;
				options.headers = requestStart.headers;
				options.isPrompt = requestStart.isPrompt;
				options.load = requestStart.load;
				options.isFactory = requestStart.isFactory;
			} else {
				callback(false, "请求开始拦截器未通过");
				return;
			}
		}
		
		uni.request({
			url: options.httpUrl,
			data: options.data,
			method: ajaxType, //请求类型
			header: options.headers, //加入请求头
			success: (res) => {
				//请求完成回调
				this.requestEnd && this.requestEnd(options, res);
				callback(true, res);
			},
			fail: (err) => {
				//请求完成回调
				this.requestEnd && this.requestEnd(options, err);
				callback(false, err);
			}
		});
	}
	//jsonp请求(只限于H5使用)
	jsonp(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "data");
		let dataStr = '';
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		});
		//匹配最后一个&并去除
		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
		}
		requestInfo.httpUrl = requestInfo.httpUrl + '?' + dataStr;
		const _this = this;
		return new Promise((resolve, reject) => {
			let callbackName = "callback" + Math.ceil(Math.random() * 1000000);
			if (_this.requestStart) {
				requestInfo.data = data;
				var requestStart = _this.requestStart(requestInfo);
				if (typeof requestStart == "object") {
					requestInfo.data = requestStart.data;
					requestInfo.headers = requestStart.headers;
					requestInfo.isPrompt = requestStart.isPrompt;
					requestInfo.load = requestStart.load;
					requestInfo.isFactory = requestStart.isFactory;
				} else {
					reject("请求开始拦截器未通过");
					return;
				}
			}
			window[callbackName] = function(data) {
				resolve(data);
			}
			var script = document.createElement("script");
			script.src = requestInfo.httpUrl + "&callback="+callbackName;
			document.head.appendChild(script);
			// 及时删除，防止加载过多的JS
			document.head.removeChild(script);
			//请求完成回调
			_this.requestEnd && _this.requestEnd(requestInfo, {});
		});
	}

	//本地服务器图片上传
    urlImgUpload(url = '', data = {}, options = {}) {
		let requestInfo = this.getDefault(url, options, "file");
		requestInfo.data = data;
		const _this = this;
		return new Promise((resolve, reject) => {
			uni.chooseImage({
				count: 9, //默认9
				sizeType: data.sizeType || ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: data.sourceType || ['album'], //从相册选择
				success: function(res) {
					let list = []
					uni.showLoading({
					    title: '上传中',
						mask: true
					});
					for(let i in res.tempFilePaths) {
						TanslateImage.translate2(res.tempFiles[i].size , res.tempFilePaths[i], (res) => {
							list.push(res)
						})
					}
					setTimeout(() => {
						uni.hideLoading();
						_this.urlFileUpload(requestInfo, list, (state, response) => {
							state ? resolve(response) : reject(response);
						});
					}, 2000)
				}
			});
		});
	}
	
	//本地服务器文件上传方法
	urlFileUpload(options, files, callback) {
		const _this = this;
		//请求前回调
		if (this.requestStart) {
			options.method = "FILE";
			var requestStart = this.requestStart(options);
			if (typeof requestStart == "object") {
				if (typeof requestStart == "object") {
					options.data = requestStart.data;
					options.headers = requestStart.headers;
					options.isPrompt = requestStart.isPrompt;
					options.load = requestStart.load;
					options.isFactory = requestStart.isFactory;
				} else {
					callback(false, "请求开始拦截器未通过");
					return;
				}
			}
		}
		const len = files.length - 1;
		let fileList = new Array;
		fileUpload(0);
		function fileUpload(i) {
			var config = {
				url: options.httpUrl,
				filePath: files[i],
				// header: options.headers, //加入请求头
				name: options.name || "file",
				success: (response) => {
					response.data = JSON.parse(response.data);
					//请求完成回调
					_this.requestEnd && _this.requestEnd(options, response);
					//是否用外部的数据处理方法
					if (options.isFactory && _this.dataFactory) {
						//数据处理
						var factoryInfo = _this.dataFactory(options, response);
						if (factoryInfo.success) {
							fileList.push(factoryInfo.result.data);
							if (len <= i) {
								callback(true, fileList);
							} else {
								fileUpload(i + 1);
							}
						} else {
							callback(false, factoryInfo.result);
						}
					} else {
						fileList.push(response.data.data);
						if (len <= i) {
							callback(true, fileList);
						} else {
							fileUpload(i + 1);
						}
					}
				},
				fail: (err) => {
					//请求完成回调
					_this.requestEnd && _this.requestEnd(options, err);
					callback(false, err);
				}
			};
			if (options.data) {
				config.formData = options.data;
			}
			uni.uploadFile(config);
		}
	}
}

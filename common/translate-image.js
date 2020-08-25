/**
 * 压缩
 * @param {Object} imgSrc 图片url
 * @param {Object} callback 回调设置返回值
 */

export function translate(imgSrc, callback) {
	let img = new Image();
	img.src = imgSrc;
	img.onload = function() {
		let that = this;
		let h = that.height;
		// 默认按比例压缩
		let w = that.width;
		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
		let anw = document.createAttribute("width");
		anw.nodeValue = w;
		let anh = document.createAttribute("height");
		anh.nodeValue = h;
		canvas.setAttributeNode(anw);
		canvas.setAttributeNode(anh);
		ctx.drawImage(that, 0, 0, w, h);
		//压缩比例
		// let quality = 0.1;
		let base64 = canvas.toDataURL('image/png');
		canvas = null;
		let blob = base64ToBlob(base64);
		// console.log(blob)
		//Blob对象转blob地址
		let blobUrl = window.URL.createObjectURL(blob);
		callback(blobUrl);
	}

}

/**
 * base转Blob对象
 * @param {Object} base64 base64地址
 */

export function base64ToBlob(base64) {
	let arr = base64.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime
	});
}



export function translate2(imgSrc, callback) {
	uni.getImageInfo({
		src: imgSrc,
		success: function(res) {
			let canvasWidth = res.width //图片原始长宽
			let canvasHeight = res.height;
			let base = canvasWidth / canvasHeight;
			if (canvasWidth > 500) {
				canvasWidth = 500;
				canvasHeight = Math.floor(canvasWidth / base);
			}
			let img = new Image();
			img.src = imgSrc; // 要压缩的图片  
			let canvas = document.createElement('canvas');
			let ctx = canvas.getContext('2d');
			canvas.width = canvasWidth;
			canvas.height = canvasHeight;
		
			//  将图片画到canvas上面   使用Canvas压缩  
			ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
			//压缩比例
			let quality = 0.9;
			let base64 = canvas.toDataURL('image/jpeg', quality);
			canvas = null;
			let blob = base64ToBlob(base64);
			//Blob对象转blob地址
			let blobUrl = window.URL.createObjectURL(blob);
			callback(blobUrl);
		},
	})
}

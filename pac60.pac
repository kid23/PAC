var rules = [
  "mzstatic.com",
  "apple.com",
  "95516.com",
  "95559.com",
  "apk",
  "m.wangyin.com",
  "ele.me",
  "msjdpay.jd.com",
  "wandafilm.com",
  "xiaoying.com",
  "yingzt.com",
  "growingio.com",
  "bestpay.com.cn",
  "api.ffan.com",
  "lianlianpay.com",
  "tongbanjie.com",
  "cmpassport.com",
  "freeyun.net",
  "d.cn",
  "360kan.com",
  "myapp.com",
  "wx_emoji",
  "phicomm.com",
  "ixigua.com",
  "video.xiaomi.com",
  "bytecdn.cn",
  "bsgslb.cn",
  "pstatp.com",
];

var proxy = "PROXY 172.16.3.60:8888";

function FindProxyForURL(url, host) {

for (var i = 0; i < rules.length; i++) {
	var s = "*"+rules[i]+"*";
	if(shExpMatch(url,s)){  
		return "DIRECT";
	}
}

return proxy;
}

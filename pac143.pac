var rules = [
  "apk",
  "mzstatic.com",
  "apple.com",
  "95516.com",
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
];

var proxy = "PROXY 192.168.2.143:8888; PROXY 192.168.2.110:8888; DIRECT";

function FindProxyForURL(url, host) {

if(shExpMatch(url,"*apk")){  
	return "DIRECT";
}
	
for (var i = 0; i < rules.length; i++) {
	var s = "*"+rules[i]+"*";
	if(shExpMatch(url,s)){  
		return "DIRECT";
	}
}

return proxy;
}

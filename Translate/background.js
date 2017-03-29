var s;
var cid;
var r = "";
chrome.runtime.onMessage.addListener(function(request) {
	s = request.selected;
	var xhr = new XMLHttpRequest();
	var url = "http://sensearch.baidu.com/sensearch/selecttext?&q=" + s;
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			
			s = JSON.parse(xhr.responseText).data["result"];
			console.log(s);
			if (typeof(s) != "string") {
				for (var i = 0; i < s.length; i++) {
					r += s[i].pre ?"["+ s[i].pre + "]" + s[i].cont+" ": s[i].cont;
				}
			} else {
				r = s;
			}
			if (cid) {
				chrome.contextMenus.update(cid, { title: r });
			} else {
				cid = chrome.contextMenus.create({ title: r, contexts: ["selection"] });
			}
		}
	}
	xhr.send();
	r = "";
});
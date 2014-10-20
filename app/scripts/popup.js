(function (){
	'use strict';

	var sb = document.getElementById("sb-popup").contentWindow;
	chrome.storage.local.get("last_url", function(obj){
		sb.postMessage(obj, "*");
	});
})();
(function (ko){
	'use strict';

	function LastUrl(data){
		this.title = ko.observable(data.title);
		this.url = data.url;
	}

	window.addEventListener("message", function(obj){
		var last = new LastUrl({
			title: "last episode link", url: obj.data.last_url
		});
		ko.applyBindings(last);
	});
})(ko);

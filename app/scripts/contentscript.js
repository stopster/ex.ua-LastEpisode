(function(){
	'use strict';
	var qs = document.querySelector.bind(document);
	var storage = {
		get: function(key, callback){
			chrome.storage.local.get(key, callback);
		},
		set: function(key, value){
			chrome.storage.local.set(key, value);
		}
	};

	var list = qs('table.list');
	function getEpisodeLink(){
		var playerTitle = qs('#player_title');
		if(playerTitle && playerTitle.childNodes.length>1){
			var episodeTitle = playerTitle.childNodes[1].textContent.trim();
			var episodeLinkEl = list.querySelector('a[title=\'' + episodeTitle + '\']');
			return episodeLinkEl.getAttribute('href');
		}
	}

	window.addEventListener('load', function(){
		storage.get('last_url', function (obj){
			var playBtn = qs('.r_button_small a[href=\'' + obj.last_url + '\']');
			if(playBtn){
				playBtn.click();
			}
		});
	});

	window.addEventListener('beforeunload', function(){
		var episodeLink = getEpisodeLink();
		if(episodeLink){
			storage.set({last_url: episodeLink});
		}
	});
}());

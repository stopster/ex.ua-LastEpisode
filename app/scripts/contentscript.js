(function(){
	'use strict';
	var qs = document.querySelector.bind(document);
	var storage = {
		get: function(key){
			return window.localStorage.getItem(key);
		},
		set: function(key, value){
			window.localStorage.setItem(key, value);
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
		var lastEpisodeUrl = storage.get('lastEpisodeUrl');
		var playBtn = qs('.r_button_small a[href=\'' + lastEpisodeUrl + '\']');
		if(playBtn){
			playBtn.click();
		}
	});

	window.addEventListener('beforeunload', function(){
		var episodeLink = getEpisodeLink();
		if(episodeLink){
			storage.set('lastEpisodeUrl', episodeLink);
		}
	});
}());


'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	// Show popup only on ex.ua website
	if(tab.url.match(/^http:\/\/www\.ex\.ua/i)){
	    // chrome.pageAction.show(tabId);
	}
});

console.log('\'Allo \'Allo! Event Page for Page Action');

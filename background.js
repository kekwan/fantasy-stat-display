chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
		"id": "fantasyTracker",
		"title": "Track This Team",
	});
});

chrome.webNavigation.onCompleted.addListener(function() {
	console.log("This is my favorite website!");
}, {url: [{urlMatches : 'https://basketball.fantasysports.yahoo.com/nba*'}]});

chrome.contextMenus.onClicked.addListener(function (page) {
	var url = page.pageUrl;
	chrome.storage.sync.set({'trackingURL' : url}, function() {
	});
});



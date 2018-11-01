chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		"id": "fantasyTracker",
		"title": "Track This Team",
	});
});

chrome.contextMenus.onClicked.addListener(function (page) {
	var url = page.pageUrl;
	if (/^https:\/\/basketball\.fantasysports\.yahoo\.com\/nba\/\d+\/\d+$/i.test(url)) {
		alert("Success! This team will be tracked.")
		chrome.storage.sync.set({ 'trackingURL': url }, function () {
		});

	} else {
			alert("Fantasy Basketball Tracker only tracks Yahoo Fantasy Basketball sports team.");
	}
});



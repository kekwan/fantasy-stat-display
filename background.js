chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		"id": "fantasyTracker",
		"title": "Track This Team",
	});
});

chrome.contextMenus.onClicked.addListener(function (page) {
	var url = page.pageUrl;
	if (/^https:\/\/basketball\.fantasysports\.yahoo\.com\/nba\/\d+\/\d+$/i.test(url)) {
		chrome.storage.sync.get("trackingURLs", function (result) {
			var arr = result.trackingURLs? result.trackingURLs: [];

			
			if(!arr.includes(url)) {
				arr.push(url);
			} else {
				alert("This team has already been tracked.");
				return;
			}
			console.log(arr);

			chrome.storage.sync.set({ 'trackingURLs': arr }, function () {
				alert("Success! This team will be tracked.");

			});
		  });



	} else {
			alert("Fantasy Basketball Tracker only tracks Yahoo Fantasy Basketball sports team.");
	}
});



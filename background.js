sendURL = function (page) {
	var url = page.pageUrl;
	chrome.storage.sync.set({'trackingURL' : url}, function() {
		console.log('URL setting saved');
	});
};

chrome.contextMenus.create({
  title: "Track This Team's Stats!",
  contexts:["page"],
  onclick: sendURL
});
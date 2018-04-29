sendURL = function (page) {
	var url = page.pageUrl;
	chrome.storage.sync.set({'trackingURL' : url}, function() {
		console.log('URL setting saved');
	});
};

chrome.contextMenus.create({
  title: "Track this team !",
  contexts:["page"],
  onclick: sendURL
});
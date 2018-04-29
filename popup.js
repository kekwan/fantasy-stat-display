// add listener to storage url so we update url to get when it changes

$.get({ url: 'https://basketball.fantasysports.yahoo.com/nba/8888/4', 
	success: function(data) { 
		document.write(data);
		console.log(data);
	},
	error: function(xhr, textStatus, error){
      console.log(xhr.statusText);
      console.log(textStatus);
      console.log(error);
      alert(xhr);
      document.write(data);
  } 
});

chrome.storage.sync.get("trackingURL", function(result) {
          console.log("Value currently is " + result.trackingURL);
 });

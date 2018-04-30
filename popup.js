chrome.storage.sync.get("trackingURL", function(result) {
  var currentURL = result.trackingURL;
  console.log("Value currently is " + currentURL);

  $.get({ url: currentURL, 
    success: function(data) {
    parseStats(data);
    document.write(data);
    },
    error: function(xhr, textStatus, error){
      console.log(xhr.statusText);
      console.log(textStatus);
      console.log(error);
      alert(xhr);
    } 
  }); 
});

function parseStats (data) {
      var pageDOMs = $.parseHTML(data);
    var dataHTML = $(pageDOMs).filter(".outer-wrapper")[0].innerHTML;

    var dataDOMs = $.parseHTML(dataHTML);
    var innerDataHTML = $(dataDOMs).filter(".ct-box.yui-sv")[0].innerHTML;

    console.log(innerDataHTML);
}
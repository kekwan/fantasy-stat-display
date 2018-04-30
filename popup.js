chrome.storage.sync.get("trackingURL", function(result) {
  var currentURL = result.trackingURL;
  console.log("Value currently is " + currentURL);

  $.get({ url: currentURL, 
    success: function(data) {
    var DOMNodes = $.parseHTML(data);
    var dataHTML = $(DOMNodes).filter(".outer-wrapper")[0].innerHTML;
    console.log(DOMNodes);
    console.log(dataHTML);
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

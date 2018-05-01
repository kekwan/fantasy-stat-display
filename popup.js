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
    var dataHTML = $(data).filter(".outer-wrapper")[0].innerHTML;
    var innerDataHTML1 = $(dataHTML).filter(".ct-box.yui-sv")[0].innerHTML;
    var innerDataHTML2 = $(innerDataHTML1).filter(".ct-box-bd.yui-sv-bd")[0].innerHTML;
    var innerDataHTML3 = $(innerDataHTML2).filter(".yui-sv-content.Ta-c")[0].innerHTML;
    var innerDataHTML4 = $(innerDataHTML3).filter(".Page-wrap")[0].innerHTML;
    var innerDataHTML5 = $(innerDataHTML4).filter(".Page.Phone-fill-x.Tablet-fill-x")[0].innerHTML;
    var innerDataHTML6 = $(innerDataHTML5).filter(".Page-bd.Page-wrap-sm")[0].innerHTML;
    var innerDataHTML7 = $(innerDataHTML6).filter("#fantasy")[0].innerHTML;
    var innerDataHTML8 = $(innerDataHTML7).filter(".Rail")[0].innerHTML;
    var innerDataHTML9 = $(innerDataHTML8).filter(".RailFull")[0].innerHTML;
    var innerDataHTML10 = $(innerDataHTML9).filter("#yspmain")[0].innerHTML;
    var innerDataHTML11 = $(innerDataHTML10).filter("#yspmaincontent")[0].innerHTML;
    var innerDataHTML12 = $(innerDataHTML11).filter("#team-roster")[0].innerHTML;
    var innerDataHTML13 = $(innerDataHTML12).filter(".Bd.No-p:not(.Bdrbot)")[0].innerHTML;
    var innerDataHTML14 = $(innerDataHTML13).filter(".stat-target")[0].innerHTML;
    var innerDataHTML15 = $(innerDataHTML14).filter(".tablewrap")[0].innerHTML;
    var innerDataHTML16 = $(innerDataHTML15).filter("#statTable0")[0].innerHTML;

    console.log($(data).find("#statTable0"));
    console.log($(innerDataHTML16).children('tbody'));
    console.log($.parseHTML(innerDataHTML16));
    console.log(innerDataHTML16);

}
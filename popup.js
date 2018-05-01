chrome.storage.sync.get("trackingURL", function(result) {
  var currentURL = result.trackingURL;
  console.log("Value currently is " + currentURL);

  $.get({ url: currentURL, 
    success: function(data) {
    parseStats(data);
    //document.write(data);
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

    var playerNodes = $.parseHTML($(data).find("#statTable0").children('tbody')[0].innerHTML);

    // TODO: For each player node (15 of them), iterate through and populate table with 
    // info contained in each player node 
    console.log(playerNodes);
    console.log(playerNodes[0].innerHTML);
    console.log($.parseHTML(playerNodes[0].innerHTML));
    $('#rostertable tbody').append('<tr><td>ABC</td></tr>');



}
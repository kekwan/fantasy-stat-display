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

    // console.log(playerNodes);
    // console.log(playerNodes[0].innerHTML);
    // console.log($.parseHTML(playerNodes[0].innerHTML));

    //$('#rostertable tbody').append('<tr>' + b + c + d + '</tr>');

    for (i = 0; i < playerNodes.length; i++) {
      var playerInfo = $.parseHTML(playerNodes[i].innerHTML);
      console.log(playerInfo);
      let pos = '<td>' + playerInfo[0].innerText + '</td>';
      // Extracting name and position 
      let temp = playerInfo[1].innerText;
      temp = temp.trim();
      tempArr = temp.split("  ");
      let name = tempArr[tempArr.length - 1];
      let player = '<td>' + name + '</td>';

      let opp = '<td>' + playerInfo[2].innerText + '</td>';
      let status = '<td>' + playerInfo[3].innerText + '</td>';
      let fgm = '<td>' + playerInfo[7].innerText + '</td>';
      let fgper = '<td>' + playerInfo[8].innerText + '</td>';
      let ftm = '<td>' + playerInfo[9].innerText + '</td>';
      let ftper = '<td>' + playerInfo[10].innerText + '</td>';
      let threePt = '<td>' + playerInfo[11].innerText + '</td>';
      let pts = '<td>' + playerInfo[12].innerText + '</td>';
      let reb = '<td>' + playerInfo[13].innerText + '</td>';
      let ast = '<td>' + playerInfo[14].innerText + '</td>';
      let st = '<td>' + playerInfo[15].innerText + '</td>';
      let blk = '<td>' + playerInfo[16].innerText + '</td>';
      let TO = '<td>' + playerInfo[17].innerText + '</td>';
      $('#rostertable tbody').append('<tr>' + pos+ player + opp + status  + fgm + fgper + ftm + ftper 
        + threePt + pts + reb + ast + st + blk + TO+ '</tr>');

    }



}
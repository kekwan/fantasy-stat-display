chrome.storage.sync.get("trackingURL", function(result) {
  var currentURL = result.trackingURL;
  console.log("Value currently is " + currentURL);

  $.get({ url: currentURL, 
    success: function(data) {
    parseStats(data);
    parseMatchup(data);

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
    // Grabs html of table that contains stats
    var playerNodes = $.parseHTML($(data).find("#statTable0").children('tbody')[0].innerHTML);

    // Iterate through each player to pull and display data in own table
    for (i = 0; i < playerNodes.length; i++) {
      var playerInfo = $.parseHTML(playerNodes[i].innerHTML);
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

function parseMatchup (data) {
  let myRank = $(data).find(".Inlineblock.Mend-lg.Pstart-lg.Phone-ptop-lg")[0].innerText.trim();
  tempArr = myRank.split(" ");
  let myStanding = tempArr[tempArr.length - 1];

  let myScore = $(data).find(".Fz-lg.Ptop-lg.Phone-ptop-med:not(.Fw-b)")[0].innerText;
  let oppScore = $(data).find(".Fz-lg.Fw-b.Ptop-lg.Phone-ptop-med")[0].innerText;
  let oppName = $(data).find(".Inlineblock.Fz-xxs.Pend-sm")[0].innerText;
  let ret = oppName.replace('vs ','');
  let tmp = ret.replace(/\d+-\d+-\d/, '');
  let matchupTxt = "Your score " + " " + myScore + " vs. " + oppScore + " " + ret;
  console.log(ret);
  console.log(tmp);
  $("#matchup").text(matchupTxt);



}
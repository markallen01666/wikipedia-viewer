$(document).ready(function() {
  // Set global variables
  var offset = 0;
  var srOffset;
  var returnEntries = 2;
  var srReturnEntries;
  var searchTerm = "";
  var endFlag;

  // Get Wikipedia entries based on searchTerm
  function getResults(search) {
    // Reset values for subsequent searches
    srOffset = offset;
    srReturnEntries = returnEntries;
    endFlag = "";

    // Remove previous search result rows if they exist
    $(".searchResultRow").remove();

    // Get JSON data from Wikipedia using MediaWiki API
    var wikiSource = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" + searchTerm + "&limit=500&namespace=0&format=json";
    $.ajax({
      url : wikiSource,
      method : 'GET',
      success : function (data) {
        showResults(data);
      }
    });
  }

  // Display the results
  function showResults(data) {

    // Number of entries returned
    var srTotal = data[1].length;

    // Remove the "More" button if it exists
    $("#moreButton").remove();

    var srPageEnd = srOffset + srReturnEntries;
    console.log(srPageEnd);

    // Remove the current search result rows if they exist and if they are not the last results available
    if (srPageEnd < srTotal || (srTotal - srOffset) > 0) {
      $(".searchResultRow").remove();
    }
    for (i=srOffset; i<srPageEnd; i++) {
      if (!data[1][i]) {
        endFlag = "EndOfSearch";
      }
      else {
        $("#searchResults").append('<div class="row  searchResultRow"><div class="col-xs-3"></div><a href="' + data[3][i] + '" target="_blank"><div class="col-xs-6 text-left well"><h4>' + data[1][i] + '</h4><br />' + data[2][i] + '</div></a><div class="col-xs-3"></div></div');
      }
    }
    if (endFlag != "EndOfSearch") {
      srOffset += srReturnEntries;
      $("#searchResults").append('<button type="button" class="btn btn-primary" id="moreButton">More...</button>');
      $("#moreButton").on("click", function() {
        showResults(data);
      });
    }
  }

  $("#searchButton").on("click", function() {
    srOffset = 0;
    searchTerm = document.getElementById("searchTerm").value;
    getResults(searchTerm);
  });
});

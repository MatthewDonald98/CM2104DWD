$(function(){
  //documentReady
  alert("document ready");

//listener tied to the form submit button
  $('#searchform').submit(function() {
    //gets the items in the search term box
    var searchterms = $("#searchterms").val();
    //call the function
    getResultsFromOMDB(searchterms);
    //stops the page reloading
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  //call youtube API using AJAX
  //build url for the request
  var url = "http://www.omdbapi.com/?apikey=c619ea91&s=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    //handle the results
    printJSON(jsondata);
  });

}

function printJSON(jsondata){
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<pre>" + normal + "</pre>");

}

$(function(){

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
    addResultTitles(jsondata);
  });

}

function addResultTitles(jsondata){
//create a string to contain our HTML code to inject
var htmlstring = "";
//iterate over the collection of results
for(var i=0; i<10; i++){
  var title = jsondata.Search[i].Title;
  htmlstring += "<li>" + title + "</li>";
}

//inject the HTML into our empty list
$("results").html(htmlstring);
}

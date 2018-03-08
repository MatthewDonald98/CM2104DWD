$(function(){
  //documentReady
  alert("document ready");

//listener tied to the form submit button
  $('#searchform').submit(funtion(){
    //gets the items in the search term box
    var searchterms = $("#searchterms").val();
    //call the function
    addItemToList(searchterms);
    //stops the page reloading
    return false;
  });
});

function addItemToList (item){
  //adds the item into the list
  $('#results').append("<li>" + item + "</li>");
}

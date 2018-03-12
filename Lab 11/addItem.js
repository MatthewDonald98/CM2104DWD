$(function(){
  //documentReady
  alert("document ready");

//listener tied to the form submit button
  $('#searchform').submit(funtion(){
    //call the function
    addItemToList("example item");
    //stops the page reloading
    return false;
  });
});

function addItemToList (item){
  //adds the item into the list
  $('#results').append("<li>" + item + "</li>");
}

$(function(){
  //documentReady
  alert("document ready");

//listener tied to the form submit button
  $('#searchform').submit(funtion(){
    //call the function
    addItemToList("example item");
    //stops the page reloading
    return false;
  });
});

function addItemToList (item){
  //adds the item into the list
  $('#results').append("<li>" + item + "</li>");
}

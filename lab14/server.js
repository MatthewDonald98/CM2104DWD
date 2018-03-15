var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
 consumer_key: 'Sd7Zb7vkFDRlVS2QPWhtIg5kF',
 consumer_secret: 'rNsFnbubBa0sYok4x8HA6DCdQNHEMskJN1qouuK4KTu6XnlHVs',
 access_token_key: '974214991317471232-P9dbUboxLVmwsMcDfxKpRQ5F7k2rE9a',
 access_token_secret: 'WlAXJ8PqEq7S6dD7RD7G1Gdp1jGtoURwk4VHJAGHJueTF'
});
app.use(express.static('public'))
app.get('/'
, function(req, res){
  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
   if (!error) {
   console.log(tweets);
   }
  });
 res.send("Hello world! by express");
});
app.listen(8080);

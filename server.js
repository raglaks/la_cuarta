//server.js
const express = require('express');
//const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/get', (req, res) => {
var Twit = require('twit')

var T = new Twit({

	consumer_key : process.env.CONSUMER_KEY 
	, consumer_secret : process.env.CONSUMER_SECRET 
	, access_token: process.env.ACCESS_TOKEN
	, access_token_secret: process.env.ACCESS_TOKEN_SECRET

})

  tuits = []

function isThisRT(tuit){
	if(tuit.indexOf("RT ") == 0)
		return true;
	else
		return false;
}

T.get('search/tweets', { q: 'amlo since:2018-01-12', count: 100 }, function(err, data, response) {
	const tuits = data.statuses.filter( status => (!isThisRT(status.text)) );
	console.log(tuits)
	res.send(tuits)
})


});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);

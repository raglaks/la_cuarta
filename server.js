
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const Twit = require('twit');
const dotenv = require('dotenv');
dotenv.config({path: '/Users/raglaks/Desktop/PROJECTS/la_cuarta/.env.juicy'});

const T = new Twit({

	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,

});

//filters out RTs
function isThisRT(tuit){

	if(tuit.indexOf("RT ") == 0)

		return true;

	else

		return false;

}

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//ping pong func to test
app.get('/ping', function (req, res) {
 return res.send('pong');
});

//get route to get all tweets with amlo query
app.get('/get', (req, res) => {

	let count = 0;

	let queries = ['amlo since:2017-01-01', 'la cuarta transformación since:2017-01-01', 'morena since:2017-01-01', '4T since:2017-01-01', 'andres manuel lopez obrador since:2017-01-01', 'andres manuel since:2017-01-01', 'lopez obrador since:2017-01-01'];

	//let queries = ['doggies since:2017-01-01', 'meow since:2017-01-01'];

	let clean = [];

	queries.map(element => {

		T.get('search/tweets', { q: element, count: 100, tweet_mode: 'extended' }, function(err, data, response) {

			data.statuses.map(element => {
	
				if (!isThisRT(element.full_text)) {
	
					clean.push(element);
	
				}
				
			});

			count++;

			console.log(`cleany ${count}`, clean);

			if (count === 7) {

				sendInf(clean);

			}

		});

	});

	function sendInf(t) {

		res.send(t);

	}

});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => console.log(`app is listening on ${port}`));

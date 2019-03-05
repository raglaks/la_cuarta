
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const Twit = require('twit');

const T = new Twit({

	consumer_key: 'ctHInIMBhU4ydVaNc3xmtmrG9',
	consumer_secret: 'muDQX4eGKfm6xXjxzhjE0QaIdc3CEMyjTzY6iHNvQlBUU9M5BD',
	access_token: '88828925-bS0OU3KsMoj2DsR1QAXGkpRF6s9FvHTuUo1tNSfKS',
	access_token_secret: 'sB03ysQRwbXKYAf0HEAFwbtmGUwD9pUSCxm1f7ykNoJxo'

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

	let searches = queries.map(element => {

		T.get('search/tweets', { q: element, count: 100, tweet_mode: 'extended' }, function(err, data, response) {

			//let clean = [];

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

	// 'amlo since:2017-01-01' || 'la cuarta transformación since:2017-01-01' || 'morena since:2017-01-01' || '4T since:2017-01-01' || 'andres manuel lopez obrador since:2017-01-01' || 'andres manuel since:2017-01-01' || 'lopez obrador since:2017-01-01'

});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => console.log(`app is listening on ${port}`));

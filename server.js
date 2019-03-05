
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

	let tuix = [];

	T.get('search/tweets', { q: 'amlo since:2018-01-01' || 'la cuarta transformación since:2018-01-01' || 'morena since:2018-01-01' || '4T since:2018-01-01' || 'andres manuel lopez obrador since:2018-01-01' || 'andres manuel since:2018-01-01' || 'lopez obrador since:2018-01-01', count: 100000, tweet_mode: 'extended' }, function(err, data, response) {

		data.statuses.forEach(element => {

			if (!isThisRT(element.full_text)) {

				tuix.push(element);

			}
			
		});

		res.send(tuix);
		
	});

});

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => console.log(`app is listening on ${port}`));

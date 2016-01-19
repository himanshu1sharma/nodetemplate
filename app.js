
	var http = require('http')
		,express = require('express')
		,routes = require('./routes');

	var app = express();

	app.set('views', __dirname + '/views');
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html');

	app.get('/', routes.index);

	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
	});

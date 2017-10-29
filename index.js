var express = require('express');
var app = express();
var morgan  = require('morgan');

app.set('port', (process.env.PORT || 5000));

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

app.use(express.static(__dirname + '/public'));
app.use('/views/pages', express.static(__dirname + '/views/pages'));
// views is directory for all template files
app.set('views', __dirname + '/views');


app.get('/', function(request, response) {
  response.render('pages/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { pretty: true })
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes
app.get('/', function(req, res){
  res.redirect('/welcome/html');
});
app.get('/welcome/html', routes.showHtml);
app.get('/welcome/css', routes.showCss);
app.get('/welcome/js', routes.showJS);
app.get('/demo', routes.demo);



app.listen(3000);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

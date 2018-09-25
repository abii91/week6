var app = require('express')();
// var server = require('http').createServer(app);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


app.get('/', function (req, res) {

});

var server = app.listen(1337);

var io = require('socket.io')(server);


io.on('connection', function(client){
  client.on('messageSend', function(data){
    io.emit("messageRec", data);
  });
  client.on('disconnect', function(){
  });
});

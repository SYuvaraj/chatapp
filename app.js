var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var path = require('path');

//Define the port to listen
http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.use(express.static(path.join(__dirname, 'public')));

var users=[];


app.get('/', function(req, res){
  res.sendfile('index.html');
});



//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');

  socket.on("newuser", function(data){
  	users.push(data);
  	console.log(users);
  	if( users.username === data.username && users.pass === data.pass){}
  	app.get('/index.html', function(req,res){
		
  	});

  });


  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });

});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});




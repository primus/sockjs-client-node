'use strict';

var sockjs = require('sockjs')
  , http = require('http')
  , SockJS = require('./');

//
// Setup a Sockjs server so we can listen for incoming connections and regular
// HTTP server to listen for incoming requests.
//
var realtime = sockjs.createServer()
  , server = http.createServer();

realtime.on('connection', function (socket) {
  socket.on('data', function echo(data) {
    socket.write(data);
  });
});

realtime.installHandlers(server, {
  prefix: '/test'
});

//
// Listen to the server.
//
server.listen(8123, function listening() {
  var socket = new SockJS('http://localhost:8123/test')
    , timeout;

  socket.onopen = function onopen() {
    socket.send('foo');
  };

  socket.onmessage = function onmessage(evt) {
    if ('foo' !== evt.data) throw new Error('Invalid message');

    clearTimeout(timeout);
    socket.close();
    server.close();
  };

  timeout = setTimeout(function timeout() {
    throw new Error('Timeout');
  }, 1000);
});

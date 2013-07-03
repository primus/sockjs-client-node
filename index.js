'use strict';

var scope = require('jsdom').jsdom().createWindow()
  , library = __dirname + '/library.js'
  , read = require('fs').readFileSync;

scope.WebSocket = require('ws');
scope.eval(read(library, 'utf-8'));

module.exports = scope.SockJS;

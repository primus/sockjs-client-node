'use strict';

var scope = require('jsdom').jsdom('<html><head></head><body></body></html>').defaultView
  , primus = require.resolve('primus')
  , read = require('fs').readFileSync
  , path = require('path');

//
// The library in Primus contains additional stability fixes which makes it
// a lot more stable to run on node, which why we use that instead.
//
var library = path.join(primus, '..', 'transformers/sockjs/library.js');

scope.WebSocket = require('ws');

//
// On Node 0.12 there are some issues with eval. It somehow doesn't correctly
// introduce the SockJS global. Using script tags fully resolves this issue.
//
var script = scope.document.createElement('script');
script.text = read(library, 'utf-8');
scope.document.body.appendChild(script);
script = null;

//
// The href is `about:blank` by default. This doesn't work SockJS's same origin
// check as it cannot parse it and it start throwing errors when it attempts to
// find the host. So in order to fix this we need to force a HREF.
//
scope.location.href = 'http://localhost:8080/';
module.exports = scope.SockJS;

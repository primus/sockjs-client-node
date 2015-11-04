'use strict';

var read = require('fs').readFileSync
  , jsdom = require('jsdom').jsdom
  , join = require('path').join;

var scope = jsdom('<html><head></head><body></body></html>', {
  agentOptions: { keepAlive: false }
}).defaultView;

//
// The library in Primus contains additional stability fixes which make it
// a lot more stable.
//
var lib = join(require.resolve('primus'), '../transformers/sockjs/library.js');

scope.WebSocket = require('ws');

//
// On Node 0.12 there are some issues with eval. It somehow doesn't correctly
// introduce the SockJS global. Using script tags fully resolves this issue.
//
var script = scope.document.createElement('script');
script.text = read(lib, 'utf-8');
scope.document.body.appendChild(script);
script = null;

//
// The href is `about:blank` by default. This doesn't work SockJS's same origin
// check as it cannot parse it and it start throwing errors when it attempts to
// find the host. So in order to fix this we need to force a HREF.
//
scope.location.href = 'http://localhost:8080/';
module.exports = scope.SockJS;

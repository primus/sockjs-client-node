# sockjs-client-node

[![Version npm][npm-sockjs-client-node-badge]][npm-sockjs-client-node][![Build Status][travis-sockjs-client-node-badge]][travis-sockjs-client-node][![Dependencies][david-sockjs-client-node-badge]][david-sockjs-client-node][![Coverage Status][coverage-sockjs-client-node-badge]][coverage-sockjs-client-node][![IRC channel][irc-badge]][irc]

This is a small wrapper around the `sockjs-client` framework that was designed
for browsers. It wraps it in a `jsdom` environment and adds some `WebSocket`
magic to make it go fast.

## Installation

```
npm install sockjs-client-node
```

## API

```js
var SockJS = require('sockjs-client-node');

//
// The API is exactly the same as the regular sockjs client.
//
```

[npm-sockjs-client-node-badge]: https://img.shields.io/npm/v/sockjs-client-node.svg?style=flat-square
[npm-sockjs-client-node]: http://browsenpm.org/package/sockjs-client-node
[travis-sockjs-client-node-badge]: https://img.shields.io/travis/primus/sockjs-client-node/master.svg?style=flat-square
[travis-sockjs-client-node]: https://travis-ci.org/primus/sockjs-client-node
[david-sockjs-client-node-badge]: https://img.shields.io/david/primus/sockjs-client-node.svg?style=flat-square
[david-sockjs-client-node]: https://david-dm.org/primus/sockjs-client-node
[coverage-sockjs-client-node-badge]: https://img.shields.io/coveralls/primus/sockjs-client-node/master.svg?style=flat-square
[coverage-sockjs-client-node]: https://coveralls.io/r/primus/sockjs-client-node?branch=master
[irc-badge]: https://img.shields.io/badge/IRC-irc.freenode.net%23primus-00a8ff.svg?style=flat-square
[irc]: https://webchat.freenode.net/?channels=primus

## License

MIT

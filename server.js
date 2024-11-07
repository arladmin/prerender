#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeLocation: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary',
    logRequests: true,
    captureConsoleLog: true,
    followRedirects: false
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

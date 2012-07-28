#!/usr/bin/env node
/*jshint strict:true node:true es5:true onevar:true laxcomma:true laxbreak:true eqeqeq:true immed:true latedef:true*/
(function () {
  "use strict";

  var net = require('net')
    , fs = require('fs')
    , path = require('path')
    , buf = fs.readFileSync(process.argv[2])
    , port = process.argv[3]
    , host = process.argv[4] || 'localhost'
    , client
    ;

  console.log('host: ' + host);
  console.log('port: ' + port);

  client = net.connect(port, host, function() {
    console.log('connected');
    if(!buf) {
      console.error('no data');
      return;
    }
    client.write(buf);
  });

  client.on('end', function() {
    console.log('disconnected');
  });
  
}());

(function() {
  'use strict';

  var http    = require('http'),
      through = require('through'),
      port    = process.argv[2] || 8001;

  http.createServer(function(req, res) {
    if(req.method === 'POST') {
      req.pipe(through(function write(buffer) {
        this.queue(buffer.toString().toUpperCase());
      })).pipe(res);
    }
    else {
      res.end('Only accept POST method');
    }
  }).listen(port, function() {
    console.log('server listen on port '+port);
  });

})();
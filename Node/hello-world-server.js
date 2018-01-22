var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt);
  fs.readFile('package.json', function(err, data) {
	  res.write(data);
	  res.end();
  });
})
.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

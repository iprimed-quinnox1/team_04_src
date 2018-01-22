var http = require('http');
var url = require('url');
qs = require('querystring');

var header = {
    	"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
    	"Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
    	"Content-Type": "text/html",
		};

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, header);
	
	console.log('Request for - ' + req.url);
	var q = url.parse(req.url, true);
	res.write("<br>The Requested URL : " + req.url)
	res.write("<br>Query Path :" + q.pathname);
	
	if(req.method=='GET'){
		res.write("<br>Search String :" + q.search);
		console.log(q.query);
		res.write("<br>Query :" + JSON.stringify(q.query));
	}
	/*
	*/
	else if(req.method=='POST'){
		var body='';
	    req.on('data', function (data) {
	        body +=data;
	    });
	    req.on('end',function(){
	        var POST =  qs.parse(body);
	        console.log(POST);
	        res.write("<br>Request Params: " + JSON.stringify(POST));
	    });

	}
	
	
	//res.end();
	
	

}).listen(8080, function(){
	console.log("Listenting on 8080.")
}); //the server object listens on port 8080

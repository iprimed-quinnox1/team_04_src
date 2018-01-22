var http = require('http');
var mon = require('./mongo');
var url = require('url');

var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {
	console.log('Request for - ' + req.url);
	var ct = "Content-Type";
	var ct_json = "application/json";
	var ct_html = "text/html";
	
	var header = {
	    	"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
	    	"Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS 
			};
	res.writeHead(200, header);
	var q = url.parse(req.url, true);
	if(q.pathname == "/products"){
		// load products
		mon.getProducts(function(data){
			console.log(data);
			header[ct] = ct_json;
			res.write(JSON.stringify(data));
			res.end(); //end the response
		});
	} else if(q.pathname == "/carts"){
		// load carts
		mon.getCarts(function(carts){
			console.log(carts);
			header[ct] = ct_json;
			res.write(JSON.stringify(carts));
			res.end(); //end the response
		});
	} else if(q.pathname.startsWith("/html/")){
		  var filename = "." + q.pathname;
		  fs.readFile(filename, function(err, data) {
		    if (err) {
		      res.writeHead(404, {'Content-Type': 'text/html'});
		      return res.end("404 Not Found");
		    }  
			header[ct] = ct_html;
		    res.write(data);
		    return res.end();
		  });

	} else {
		header[ct] = ct_html;
		res.write("<a href='./products'>Product List</a>");
		res.write("<br>");
		res.write("<a href='./carts'>Cart List</a>");
	    return res.end();
	}


}).listen(8080, function(){
	console.log("Listenting on 8080.")
}); //the server object listens on port 8080

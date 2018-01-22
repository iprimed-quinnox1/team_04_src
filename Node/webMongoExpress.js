var fs = require('fs');
var mon = require('./mongo');
var url = require('url');

var express = require('express');
var app = express();

// local variables.
var ct = "Content-Type";
var ct_json = "application/json";
var ct_html = "text/html";

// home page
app.get('/', function(req, res){
		setHeader(res);
	      res.set(ct, ct_html);
		res.write("<a href='./products'>Product List</a>");
		res.write("<br>");
		res.write("<a href='./carts'>Cart List</a>");
	    return res.end();
});

// products objects
app.get('/products', function(req, res){
	setHeader(res);
	mon.getProducts(function(data){
		console.log(data);
		res.send(data); //send the response
	});
});

// carts objects
app.get('/carts', function(req, res){
	setHeader(res);
	mon.getCarts(function(carts){
		console.log(carts);
		res.send(carts); //send the response
	});
});

// files in "html" subfolder.
app.get('/html/*', function(req, res){
	  setHeader(res);
      res.set(ct, ct_html);
	  var q = url.parse(req.url, true);
	  var filename = "." + q.pathname;
	  fs.readFile(filename, function(err, data) {
	    if (err) {
	      return res.send("404 Not Found");
	    }  
	    return res.send(data);
	  });
});

// web server 
app.listen(8080, function(){
	console.log("Listenting on 8080.")
}); 

// utility to set headers with JSON.
function setHeader(res){
	var header = {
	    	ct: ct_json,
			"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
	    	"Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS 
			};
	res.set(header);
	return header;

}

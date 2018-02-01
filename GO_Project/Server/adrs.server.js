var express = require("express");
var router = express.Router();
var addSearch = require("../DataBase/addressSearch.js");



router.post("/search", function (req, res) {
    res.set({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
    }); // to set the header .
    addSearch.seachDb(req.body,function callback(result){
		 res.send(result);
		 console.log("Server initial result");
		 res.end();
    });
       
});

module.exports = router;


var express=require("express");
var mongoclient=require('mongodb').mongoclient;
var url="mongo://localhosr:27017/";
 var app=express();
var bodyparser=require('body-parser');
var multer=require('multer');
var upload=multer();

app.use(bodyparser.JSON());
app.use(bodyparser.urlencoded({
extended: true
}));

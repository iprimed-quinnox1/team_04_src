var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    pid : String,
	itemName : String,
	itemPrice : Number,
	techSpecs : [],
	img : String

},{collection:'Product'});
mongoose.model('Product',addressSchema);
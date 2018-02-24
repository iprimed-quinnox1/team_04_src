var mongoose = require('mongoose');

var cartSchema = mongoose.Schema({
	_id : String,
	customerId : String,
	pid : Number,
	pname : String,
	price : Number,
	gift_Wrapper : Boolean,
	img : String,
	quantity : Number

},{collection:'CartCollection'});
mongoose.model('Cart',productSchema);


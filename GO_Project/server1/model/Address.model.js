var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    _id : String,
	customerName : String,
	mobileNo : Number,
	city : String,
	state : String,
	pincode : Number,
	Address : String,
	type : String,
	customerId : String
},{collection:'Address'});
mongoose.model('Address',addressSchema);
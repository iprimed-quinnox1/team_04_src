var mongoose = require('mongoose');

  var orderSchema = mongoose.Schema({
		_id : String,
		customerId : String,
		pid : Number,
		pname : String,
		price : Number,
		gift_Wrapper : Boolean,
		img : String,
		quantity : Number,
		address : {
			_id : String,
			customerName : String,
			mobileNo : Number,
			city : String,
			state : String,
			pincode : Number,
			Address : String,
			type : String,
			customerId : String
		}
  },{collection:'OrderCollection'});
  mongoose.model('Order',productSchema);
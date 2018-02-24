var mongoose = require('mongoose');

var productSchema = mongoose.Schema({

_id : String,   
pid : String,
pname :String,
price : String,
gift_Wrapper : Boolean,
img: String,
},{collection:'ProductCollection'});
mongoose.model('Product',productSchema);



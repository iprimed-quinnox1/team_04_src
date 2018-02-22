var mongoose = require('mongoose');

var testSchema = mongoose.Schema({
    name:String,
    gender:String
},{collection:'Address'});
mongoose.model('Address',addressSchema);
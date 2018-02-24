var address = require("./address.controller.js");
var product = require("./product.controller.js");

module.exports = function(app){
console.log(JSON.stringify(app));
app.route('/address/search').get(address.search);
    app.route('/product/search').get(address.search);
    
}
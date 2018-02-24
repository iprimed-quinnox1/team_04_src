var address = require("./Controller/address.controller.js");
var product = require("./Controller/productController.js");

module.exports = function(app){
console.log(JSON.stringify(app));
app.route('/address/search').get(address.search);
    app.route('/product/search').get(product.search);
    app.route('/product/fetch').get(product.fetch);
    app.route('/cart/fetch').get(cart.fetch);
    app.route('/order/fetch').get(order.fetch);
}
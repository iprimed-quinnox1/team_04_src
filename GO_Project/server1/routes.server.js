var address = require("./Controller/address.controller.js");
var product = require("./Controller/product.controller.js");

module.exports = function(app){
console.log(JSON.stringify(app));
app.route('/address/search').get(address.search);

	
    app.route('/address/search').get(address.search);
    app.route('/address/insert').get(address.insert);
    app.route('/address/delete').get(address.delete);
    app.route('/address/update').get(address.update);

    app.route('/product/fetch').get(product.fetch);
    app.route('/product/search').get(product.search);
    app.route('/product/insert').get(product.insert);
    
    app.route('/product/search').get(product.search);
    app.route('/product/fetch').get(product.fetch);
    
    app.route('/cart/fetch').get(cart.fetch);
    app.route('/cart/data').get(cart.fetch);
    app.route('/cart/insert').get(cart.fetch);
    app.route('/cart/delete').get(cart.fetch);
    
    app.route('/order/insert').get(order.insert);
    app.route('/order/fetch').get(order.fetch);
    app.route('/order/statusUpdate').get(order.statusUpdate);
    app.route('/order/addressUpdate').get(order.addressUpdate);
}
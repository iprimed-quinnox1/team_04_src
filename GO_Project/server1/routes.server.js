var address = require("./Controller/address.controller.js");
var product = require("./Controller/product.controller.js");
var order = require("./Controller/orderController.js");
var cart = require("./Controller/cartController.js");

module.exports = function(app){
console.log(JSON.stringify(app));
app.route('/address/search').post(address.search);

	
    app.route('/address/search').post(address.search);
    app.route('/address/insert').post(address.insert);
    app.route('/address/delete').post(address.delete);
    app.route('/address/update').post(address.update);

    app.route('/product/fetch').post(product.fetch);
    app.route('/product/search').post(product.search);
    app.route('/product/insert').post(product.insert);
        
    app.route('/cart/fetch').post(cart.fetch);
    app.route('/cart/data').post(cart.data);
    app.route('/cart/insert').post(cart.insert);
    app.route('/cart/delete').post(cart.delete);
    
    app.route('/order/insert').post(order.insert);
    app.route('/order/fetch').post(order.fetch);
    app.route('/order/statusUpdate').post(order.statusUpdate);
    app.route('/order/addressUpdate').post(order.addressUpdate);
}
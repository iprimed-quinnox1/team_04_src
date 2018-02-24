var address = require("./productController.js");

module.exports = function(app){
console.log(JSON.stringify(app));
    app.route('/product/search').get(address.search);
}

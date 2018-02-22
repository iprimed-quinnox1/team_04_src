var address = require("./address.controller.js");

module.exports = function(app){
console.log(JSON.stringify(app));
    app.route('/address/search').get(address.search);
}
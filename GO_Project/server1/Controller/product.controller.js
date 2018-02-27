var mongoose = require('mongoose');

var product = mongoose.model('Product');

exports.insert = function (req, res) {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log("Ye Rha Fields");
        console.log(fields);
        //console.log(files);
        if (files)
            var oldPath = files.file.path;
        var newPath = __dirname + "/../../resources/images/" + files.file.name;
        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
        });
        var obj = {
            pid: fields.pid,
            itemName: fields.itemName,
            itemPrice: fields.itemPrice,
            techSpecs: JSON.parse(fields.techSpecs),
            img: files.file.name
        };

        //var myobj = req.body;
        var temp = new product(obj);
        temp.save(obj, function (err, res) {
            if (err) throw err;
            console.log(obj.pid + " Inserted");
            res.send(true);
        });
    });
}

exports.fetch = function(req,res){
    product.find({},function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result);
        console.log(result);
        console.log("Products list sent");
        //console.log(result);
       
    });
}

exports.search = function(req,res){
    var ob = req.body;
    product.find({pid:ob.pid},function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result);
        console.log("Products details sent");
        //console.log(result);
       
    });
}



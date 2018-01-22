var fs = require('fs');

var fname ='package.json';
if(fs.existsSync(fname)){
	fs.readFile(fname, 'utf8', function(err, data) {
		  if (err) throw err;
		  console.log("Content of file - " + fs.realpathSync(fname));
		  console.log(data);
		});
} else {
	console.log("File '" + fname + "' doesn't exist.");
}

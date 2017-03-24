var fsp = require('fs-promise');

var filename = 'file1.txt';

fsp.readFile(filename, "utf8")
  .then(function(data){
    console.log(data);
  }, function(err){
    console.log("No Bueno", err.message)
  })

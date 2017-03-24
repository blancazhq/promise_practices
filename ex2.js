var fsp = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'input.txt';


fsp.readFile(filename, "utf8")
  .then(function(data){
    console.log(data);
    return fsp.writeFile(outputFilename, data);
  })
  .then(function(){
    console.log("done")
  })
  .catch(function(err){
      console.log("No Bueno", err.message)
  })

require("any-promise/register/bluebird");
var fs = require('fs-promise');
var Promise = require("bluebird");

// function splice2 (filename1, filename2, outputFileName){
//   return fs.readFile(filename1, "utf8")
//     .then(function(data1){
//       return [data1, fs.readFile(filename2)];
//     })
//     .spread(function(data1, data2){
//       var new_text = data1+data2;
//       return fs.writeFile(outputFileName, new_text);
//     })
// }
//
// splice2('file-1.txt', 'file-2.txt', 'output.txt')
//   .then(function() {
//     console.log('It worked.');
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   })

function splice(array, outputFileName){
  var new_text = "";
  func_array = array.map(function(filename){
    return fs.readFile(filename, "utf8")
      .then(function(data){
        new_text+=data;
        return fs.writeFile(outputFileName, new_text);
      })
  })
  return Promise.all(func_array);
}

splice(['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'], "output1.txt")
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  })

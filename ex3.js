var requestp = require('request-promise');
var fsp = require('fs-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

requestp.get(url)
  .then(function(html){
    return fsp.writeFile(filename, html);
  })
  .then(function(){
    console.log("done");
  })
  .catch(function(err){
      console.log("No Bueno", err.message)
  })

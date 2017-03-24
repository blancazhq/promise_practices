var requestp = require('request-promise');
var fsp = require('fs-promise');
var Promise = require("bluebird");


var urls = [
  'https://en.wikipedia.org/wiki/Futures_and_promises',
  'https://en.wikipedia.org/wiki/Continuation-passing_style',
  'https://en.wikipedia.org/wiki/JavaScript',
  'https://en.wikipedia.org/wiki/Node.js',
  'https://en.wikipedia.org/wiki/Google_Chrome'
];
var filename = [
  "promises.html", "cps.html", "js.html", "node.html", "chrome.html"
]
var counter = -1;

// urls.forEach(function(url){
//   requestp.get(url)
//     .then(function(html){
//       counter++;
//       return fsp.writeFile(filename[counter], html);
//     })
//     .then(function(){
//       console.log("done")
//     })
//     .catch(function(err){
//       console.log("No Bueno", err.message)
//     })
// })

urls_functions = urls.map(function(url){
  return requestp.get(url)
    .then(function(html){
      counter++;
      return fsp.writeFile(filename[counter], html);
    })
    .then(function(){
      console.log("done")
    })
})


Promise.all(urls_functions)
  .then(function(){
    console.log("all done");
  })
  .catch(function(err){
    console.log("No Bueno", err.message)
  })

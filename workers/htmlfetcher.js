var helpers = require('../helpers/archive-helpers.js');
var request = require('request');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
helpers.readListOfUrls(function (list) {
  list.forEach(function(){
    //do some stuff
  })


  // last thing we do is delete the list
});
// check the list
// get the site
// put the site in a file


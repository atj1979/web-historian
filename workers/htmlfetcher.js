var helpers = require('../helpers/archive-helpers.js');
var request = require('request');
var fs = require('fs');
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
helpers.readListOfUrls(function (list) {
  list.forEach(function(url){
    console.log(url);
    //do some stuff
    request.get({url: 'http://'+url
      // progress: function(res) {
      //   console.log(res);
      //   return;
      // }
    },
    helpers.paths.archivedSites + '/' + url,
    function(err, res){
      console.log(res);
      fs.writeFile(helpers.paths.archivedSites + '/' + url);
      return;
    });
  });


  // last thing we do is delete the list
});
// check the list
// get the site
// put the site in a file


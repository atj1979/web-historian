var helpers = require('../helpers/archive-helpers.js');
var request = require('request');
var fs = require('fs');
var CronJob = require('cron').CronJob;
// eventually, you'll have some code here that uses the code in `archive-helpers.js`
// to actually download the urls you want to download.
var archive = function(){
  console.log('archeeveing');
  helpers.readListOfUrls(function (list) {
    list.forEach(function(url){
      // console.log(url);
      //do some stuff
      url !== '' && request.get({url: 'http://'+url
        // progress: function(res) {
        //   console.log(res);
        //   return;
        // }
      },
      helpers.paths.archivedSites + '/' + url,
      function(err, res){
        if (err){
          console.log(err);
        }
        // console.log(res);
        fs.writeFile(helpers.paths.archivedSites + '/' + url, res.body);
        return;
      });
    });


    // last thing we do is delete the list
  });
  // check the list
  // get the site
  // put the site in a file
}


var job = new CronJob('* */1 * * * *', function(){
    // Runs every weekday (Monday through Friday)
    // at 11:30:00 AM. It does not run on Saturday
    // or Sunday.
    archive();
  }, function () {
    // This function is executed when the job stops
  },
  true /* Start the job right now */,
  "America/Los_Angeles" /* Time zone of this job. */
);

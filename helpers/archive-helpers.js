var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(cb){
  //read the file
  fs.readFile(exports.paths.list,{encoding: 'utf8'}, function (err, data){
    cb(data.split('\n'));
  });

  //give back list of urls in the file
  //in an Array
};

exports.isUrlInList = function(url){
  //using 2 files
  //web/archives/sites.txt will be websites to get
  var contents;
  exports.readListOfUrls(function(list){
    contents = list;
  });
  return contents.reduce(function(acc, elem){
    return elem === url ? true : acc;
  }, false);

  //read list of urls on above file
  //search throught the returned list to see if we have it or not

};

exports.addUrlToList = function(url, res){
  //parse data to remove 'url='
  var website =url.slice(4);
  fs.appendFile(exports.paths.list, website + '\n', function(err) {
    if(err) {
      console.log(err);
    } else {
      //console.log("The file was saved!");
      res.end();
    }
  });

};

exports.isURLArchived = function(url){
  return (fs.readdirSync(exports.paths.archivedSites).indexOf(url) !== -1);
  //search sites folder to see if we have it or not
  //if (url)

};

exports.downloadUrls = function(){
//its tricky
};

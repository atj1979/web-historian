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

exports.readListOfUrls = function(fileLocation){
  //read the file
  var theDataz = '';
  var fileData = fs.createReadStream(fileLocation);
  fileData.on('data', function(data){
    theDataz += data;
  });

  fileData.on('end', function(){
    return return theDataz.split('\n');
  });

  //give back list of urls in the file
  //in an Array
};
console.log(exports.readListOfUrls('../archives/sites.txt'));


exports.isUrlInList = function(url){
  //using 2 files
  //web/archives/sites.txt will be websites to get

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

exports.isURLArchived = function(){
  //using 2 files
  // /archives/sites.txt will be websites to get
  //read list of urls on above file
  //search throught the returned list to see if we have it or not

};

exports.downloadUrls = function(){
//its tricky
};

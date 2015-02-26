var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!
//(req, res)
exports.handleRequest =  {
  'GETindex': function (req, res){
    res.writeHead(200, headers.headers);
    var fullPage = '';
    var homePage = fs.createReadStream(archive.paths.siteAssets+"/index.html");
    homePage.on('data', function(data){
      fullPage+=data;
    });
    homePage.on('end', function (){
      res.end(fullPage);
    });
  },

  'GETpage': function (req, res, url){
    //if page has been archived, return page else redirect to robot page
    res.writeHead(200, headers.headers);
    var fullPage = '';
    var homePage = fs.createReadStream(archive.paths.archivedSites + '/' + url.slice(4));
    homePage.on('data', function(data){
      fullPage+=data;
    });
    homePage.on('end', function (){
      res.end(fullPage);
    });



  },

  'POST': function (req, res, data) {
    res.writeHead(201, headers.headers);
    archive.addUrlToList(data, res);
    var fullPage = '';
    var homePage = fs.createReadStream(archive.paths.siteAssets+"/loading.html");
    homePage.on('data', function(data){
      fullPage+=data;
    });
    homePage.on('end', function (){
      res.end(fullPage);
    });
    // req.data.pipe(fs.createWriteStream(archive.paths.list));
    // req.on('end', function(){
    //   res.writeHead(201, headers.headers);
    //   res.end();
    // });
  }

};

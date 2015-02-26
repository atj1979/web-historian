var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers');
var fs = require('fs')
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if (req.method === 'GET'){
    res.writeHead(200, headers.headers);
    var fullPage = '';
    var homePage = fs.createReadStream(archive.paths.siteAssets+"/index.html");
    homePage.on('data', function(data){
      fullPage+=data;
    });
    homePage.on('end', function (){
      res.end(fullPage);
    });
  }
  if (req.method === 'POST'){
    res.writeHead(201, headers.headers);
    var incoming = '';
    req.on('data', function (data) {
      incoming += data;
    });
    req.on('end', function () {
      archive.addUrlToList(incoming, res);


    });



    // req.data.pipe(fs.createWriteStream(archive.paths.list));
    // req.on('end', function(){
    //   res.writeHead(201, headers.headers);
    //   res.end();
    // });


  }

};

var headers = require('./http-helpers');
var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');
var handler = require("./request-handler");

exports.route = function (req, res) {
  if (req.method === 'GET'){
      handler.handleRequest.GETindex(req, res);
  }
  if (req.method === 'POST') {
    var incoming ='';
    req.on('data', function (data) {
      incoming += data;
    });
    req.on('end', function () {
      //check if it exists w/ archive-helper isURLarchived
      if (archive.isURLArchived(incoming.slice(4))){
        console.log('WE HAVE THE URL!');

        handler.handleRequest.GETpage(req, res, incoming);
      } else {
        //else do a post to the list
        handler.handleRequest.POST(req, res, incoming);
      }
    });




  }
};

// const apiKey = require('../config.js');

const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const request = require('request');

const homeHandler = (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, 'Content-Type: text/plain');
      res.end('file not found.');
    }
    res.writeHead(200, 'Content-Type: text/html');
    res.end(file);
  });
};

const staticFileHandler = (req, res, url) => {
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
  };

  const extension = url.split('.')[1];

  const filePath = path.join(__dirname, '..', url);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(404, 'Content-Type: text/plain');
      res.end('File not found.');
    }
    res.writeHead(200, `Content-Type: ${extensionType[extension]}`);
    res.end(file);
  });
};

const apiHandler = (req, res) => {
  const endpoint = req.url;
  const parsed = querystring.parse(endpoint);
  const date = parsed['/date'];

  let url = 'https://api.nasa.gov/planetary/apod?date=' + date + '&api_key=' + apiKey;
  request(url, (err, resAPI, body) => {
    if (err) {
      throw err;
    } else {
      res.writeHead(200, 'Content-Type: application/json');
      res.end(body);
    }
  });
};

module.exports = {
  homeHandler,
  staticFileHandler,
  apiHandler,
};

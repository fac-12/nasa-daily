const { homeHandler, staticFileHandler, apiHandler } = require('./handler');

const router = (req, res) => {
  // const { url } = req.url;

  if (req.url.endsWith('/')) {
    homeHandler(req, res);
  } else if (req.url.indexOf('/public') !== -1) {
    staticFileHandler(req, res, req.url);
  } else if (req.url.indexOf('/date') !== -1) {
    apiHandler(req, res);
  } else {
    res.writeHead(404);
    res.end('404, File not found!');
  }
};

module.exports = router;

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

var urls = [
  { "id": 1, "original_url": 'http://google.com', "short_url": 'cool' }
];
var initialUrlId = 2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/urls', function(req, res) {
  res.json(urls);
});

router.post('/urls', function(req, res) {
  console.log(req.body)

  var original = req.body.originalURL;
  var short = req.body.shortURL;

  var id = initialUrlId++;

  var newURL = { "id": id, "original_url": original, "short_url": short };
  urls.push(newURL);

  res.json(urls);
});


module.exports = router;

var express = require('express');
var router = express.Router();

var urls = [
  { "id": id, "original_url": 'http://google.com', "short_url": 'cool' }
];
var initialUrlId = 2;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/urls', function(req, res) {
  res.json(urls);
});

app.post('/urls', function(req, res) {
  console.log(req.body)

  var original = req.body.data.original_url;
  var short = req.body.data.short_url;

  var id = initialTodoId++;

  var newURL = { "id": id, "original_url": original, "short_url": short };
  todos.push(newURL);

  res.json(urls);
});


module.exports = router;

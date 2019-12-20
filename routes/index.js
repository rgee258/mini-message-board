var express = require('express');
var router = express.Router();

const messages = [
  {text: 'Hi there!', user: 'Mini Message Board', added: new Date()},
  {text: 'Hello World', user: 'Console', added: new Date()},
  {text: 'Foo', user: 'Bar', added: new Date()}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/new', function(req, res, next) {
  messages.push({name: req.body.name, text: req.body.message, added: new Date()})
  res.redirect('/');
});

module.exports = router;

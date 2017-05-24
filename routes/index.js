var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/mainpersona', function(req, res, next) {
  res.render('mainPersona', { title: 'Express' });
});
router.get('/formpersona', function(req, res, next) {
  res.render('formPersona', { title: 'Express' });
});


module.exports = router;

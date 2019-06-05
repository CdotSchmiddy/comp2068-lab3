var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 3' });
});

const persons = [
{
  path: 'calum',
  name: "Calum", 
  age: 20, 
  cityResiding: 'Barrie'
},
{
  path: 'tanya',
  name: "Tanya", 
  age: 50, 
  cityResiding: 'Barrie'
}, 
{
  path: 'rachel',
  name: "Rachel", 
  age: 22, 
  cityResiding: 'Barrie'
}, 
{
  path: 'colton',
  name: "Colton", 
  age: 27, 
  cityResiding: 'Hamilton'
}
];

router.get('/:name', (req, res, next) => {
  const name = req.params.name;
  const person = persons.find(per => per.path === name)

if (!person) {
  return next(new Error('Person does not exist.'));
}

  res.render('person', person);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/compare', (req, res) => {
  res.render('compare');
});

router.get('/prebook', (req, res) => {
  res.render('prebook');
});

router.get('/rentals', (req, res) => {
  res.render('rentals');
});
router.get('/se03lite',(req,res)=>{
  res.render('se03lite');
})
router.get('/se03',(req,res)=>{
  res.render('se03');
})
router.get('/se03max',(req,res)=>{
  res.render('se03max');
})
module.exports = router;

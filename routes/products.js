const express = require('express');
const router = express.Router();

router.get('/se03-lite', (req, res) => {
  res.render('product', { product: 'SE03 Lite' });
});

router.get('/se03', (req, res) => {
  res.render('product', { product: 'SE03' });
});

router.get('/se03-max', (req, res) => {
  res.render('product', { product: 'SE03 Max' });
});

module.exports = router;

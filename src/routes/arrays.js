const express = require('express');
const router = express.Router();

router.get('/arrays/add', (req, res) => {
  res.render('arrays/new-array');
});

router.get('/arrays', (req, res) => {
  res.send('arrays');
});
  module.exports = router;


  

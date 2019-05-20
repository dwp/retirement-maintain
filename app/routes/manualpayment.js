const express = require('express');
const router = express.Router()

router.post('/manualpayment/processaclaim', (req, res) => {
    res.redirect('/manualpayment/checkclaim')
  })
  ;
  
  router.post('/manualpayment/checkclaim', (req, res) => {
    res.redirect('/manualpayment/enteramounts')
  })
  ;
  
  router.post('/manualpayment/enteramounts', (req, res) => {
    res.redirect('/manualpayment/payment')
  })
  ;
  
  router.post('/manualpayment/payment', (req, res) => {
    res.redirect('/manualpayment/confirmation')
  })
  
  
  module.exports = router
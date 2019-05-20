const express = require('express');
const router = express.Router()

router.post('/newclaims/find', (req, res) => {
    res.redirect('/newclaims/find-1')
  })
  ;
  
  router.post('/newclaims/sp-date', (req, res) => {
    res.redirect('/newclaims/lived-outside')
  })
  ;
  
  router.post('/newclaims/security1', (req, res) => {
    res.redirect('/newclaims/security2')
  })
  ;
  
  router.post('/newclaims/security2', (req, res) => {
    res.redirect('/newclaims/sp-date')
  })
  ;
  
  router.post('/newclaims/lived-outside', (req, res) => {
    res.redirect('/newclaims/worked-outside')
  })
  ;
  
  router.post('/newclaims/worked-outside', (req, res) => {
    res.redirect('/newclaims/marital')
  })
  ;
  
  router.post('/newclaims/marital', (req, res) => {
    res.redirect('/newclaims/spouse')
  })
  ;
  
  router.post('/newclaims/spouse', (req, res) => {
    res.redirect('/newclaims/contact-details')
  })
  ;
  
  router.post('/newclaims/contact-details', (req, res) => {
    res.redirect('/newclaims/bank')
  })
  ;
  


module.exports = router;

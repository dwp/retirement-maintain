const express = require('express');
const router = express.Router()

router.post('/newclaims2/find', (req, res) => {
    res.redirect('/newclaims2/find-1')
  })
  ;

  router.post('/newclaims2/sp-date', (req, res) => {
    res.redirect('/newclaims2/lived-outside')
  })
  ;

  router.post('/newclaims2/security1', (req, res) => {
    res.redirect('/newclaims2/security2')
  })
  ;

  router.post('/newclaims2/security2', (req, res) => {
    res.redirect('/newclaims2/sp-date')
  })
  ;

  router.post('/newclaims2/lived-outside', (req, res) => {
    res.redirect('/newclaims2/worked-outside')
  })
  ;

  router.post('/newclaims2/worked-outside', (req, res) => {
    res.redirect('/newclaims2/marital')
  })
  ;

  router.post('/newclaims2/marital', (req, res) => {
    res.redirect('/newclaims2/spouse')
  })
  ;

  router.post('/newclaims2/spouse', (req, res) => {
    res.redirect('/newclaims2/contact-details')
  })
  ;

  router.post('/newclaims2/contact-details', (req, res) => {
    res.redirect('/newclaims2/bank')
  })
  ;

  router.post('/newclaims2/declaration', (req, res) => {
    res.redirect('/newclaims2/payments')
  })
  ;

  router.post('/newclaims2/payments', (req, res) => {
    res.redirect('/newclaims2/find')
  })
  ;

  router.post('/newclaims2/frequency', function(req, res) {
    if ( req.body['frequency'] === 'yes' ) {
      res.redirect('/newclaims2/declaration');
    } else {
      res.redirect('/newclaims2/change-frequency');
    }
  });

  module.exports = router;

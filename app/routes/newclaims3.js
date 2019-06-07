const express = require('express');
const router = express.Router()

router.post('/newclaims3/find', (req, res) => {
    res.redirect('/newclaims3/find-1')
  })
  ;

  router.post('/newclaims3/sp-date', (req, res) => {
    res.redirect('/newclaims3/lived-outside')
  })
  ;

  router.post('/newclaims3/security1', (req, res) => {
    res.redirect('/newclaims3/security2')
  })
  ;

  router.post('/newclaims3/security2', (req, res) => {
    res.redirect('/newclaims3/sp-date')
  })
  ;

  router.post('/newclaims3/lived-outside', (req, res) => {
    res.redirect('/newclaims3/worked-outside')
  })
  ;

  router.post('/newclaims3/worked-outside', (req, res) => {
    res.redirect('/newclaims3/marital')
  })
  ;

  router.post('/newclaims3/marital', (req, res) => {
    res.redirect('/newclaims3/spouse')
  })
  ;

  router.post('/newclaims3/spouse', (req, res) => {
    res.redirect('/newclaims3/contact-details')
  })
  ;

  router.post('/newclaims3/contact-details', (req, res) => {
    res.redirect('/newclaims3/bank')
  })
  ;

  router.post('/newclaims3/declaration', (req, res) => {
    res.redirect('/newclaims3/payments')
  })
  ;

  router.post('/newclaims3/payments', (req, res) => {
    res.redirect('/newclaims3/find')
  })
  ;

  router.post('/newclaims3/frequency', function(req, res) {
    if ( req.body['frequency'] === 'yes' ) {
      res.redirect('/newclaims3/declaration');
    } else {
      res.redirect('/newclaims3/change-frequency');
    }
  });

module.exports = router;

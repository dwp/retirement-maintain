const express = require('express');
const router = express.Router()

  router.post('/iteration31d/change-status', function(req, res) {
    if ( req.body['maritalstatus'] === 'married' ) {
      res.redirect('marital-details');
    } if ( req.body['maritalstatus'] === 'civil-partnership' ) {
      res.redirect('CP-details');
    } 
  });

  router.post('/iteration31d/verify', function(req, res) {
    if ( req.body['verified-or-notverified'] === 'verified' ) {
      res.redirect('CP-detailsV');
    } else {
      res.redirect('new-date');
    }
  });



  module.exports = router;
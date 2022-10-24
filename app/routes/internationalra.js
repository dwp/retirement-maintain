const express = require('express');
const router = express.Router()

// Iteration 3




router.post('/international-record/ra-iteration-1/date-of-entry', function(req, res) {
  if ( req.body['date-of-entry'] === 'before' ) {
    res.redirect('rf1-hmrc');
  } else {
    res.redirect('liason-forms');
  }
});


router.post('/international-record/ra-iteration-1/rf1-returned', function(req, res) {
  if ( req.body['rf1-returned'] === 'yes' ) {
    res.redirect('liason-forms-rf1');
  } else {
    res.redirect('lived-worked-details-rf1');
  }
});


  module.exports = router;

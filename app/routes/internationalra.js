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


  module.exports = router;

const express = require('express');
const router = express.Router()

// Iteration 1

router.post('/international-task/anzac-iteration-1/award-improvement', function(req, res) {
  if ( req.body['improvement'] === 'yes' ) {
    res.redirect('issue-letter');
  } else {
    res.redirect('no-improvement');
  }
});






  module.exports = router;

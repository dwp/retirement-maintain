const express = require('express');
const router = express.Router()

// Iteration 1

router.post('/international-task/eea-iteration-2/mixed-years-spain', function(req, res) {
  if ( req.body['mixedyearsspain'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-spain');
  } else {
    res.redirect('mixed-years');
  }
});


router.post('/international-task/eea-iteration-2/foreign-insurance-request-spain', function(req, res) {
  if ( req.body['spaininsurance'] === 'Sent' ) {
    res.redirect('mixed-years');
  } else {
    res.redirect('mixed-years');
  }
});



router.post('/international-task/eea-iteration-2/mixed-years-austria', function(req, res) {
  if ( req.body['mixedyearsaustria'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-austria');
  } else {
    res.redirect('mixed-years');
  }
});







  module.exports = router;

const express = require('express');
const router = express.Router()

// Iteration 1

router.post('/international-task/testing/scenario-1/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/mixed-years-ireland')
})
;



router.post('/international-task/testing/scenario-1/mixed-years-ireland', function(req, res) {
  if ( req.body['mixedyearsireland'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-ireland');
  } else {
    res.redirect('confirmation');
  }
});


router.post('/international-task/testing/scenario-1/foreign-insurance-request-ireland', function(req, res) {
  if ( req.body['spaininsurance'] === 'Sent' ) {
    res.redirect('confirmation');
  } else {
    res.redirect('confirmation');
  }
});


router.post('/international-task/testing/scenario-1/confirmation', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/get-a-task-2')
})
;






  module.exports = router;

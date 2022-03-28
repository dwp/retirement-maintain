const express = require('express');
const router = express.Router()

router.post('/death-arrears/current/org-dap-ref-change', function(req, res) {
  if ( req.body ['ref'][0] === 'yes' ) {
    res.redirect('org-dap-send-letter-no-ref');
  } else {
    res.redirect('org-dap-send-letter');
  }

});

router.post('/death-arrears/current/dap-overseas-bank-details', function(req, res) {
  if ( req.body ['iban'] === 'ES320054285411112222' ) {
    res.redirect('death-arrears/current/dap-arrears-paid');
  } else {
    res.redirect('death-arrears/current/dap-overseas-bank-details-payment');
  }

});

router.post('/death-arrears/current/dap-overseas-bank-details', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
  if (iban == 'ES320054285411112222') {
    res.redirect('death-arrears/current/dap-arrears-paid')
  } else {
    res.redirect('death-arrears/current/dap-overseas-bank-details-payment')
  }
})


  module.exports = router


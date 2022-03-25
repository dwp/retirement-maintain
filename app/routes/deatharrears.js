const express = require('express');
const router = express.Router()

router.post('/death-arrears/current/org-dap-ref-change', function(req, res) {
  if ( req.body ['ref'][0] === 'yes' ) {
    res.redirect('org-dap-send-letter-no-ref');
  } else {
    res.redirect('org-dap-send-letter');
  }

});

router.post('/dap-overseas-bank-details', function(req, res) {
  if ( req.body['iban'] == 'ES') {
    res.redirect('dap-arrears-paid');
  } else {
    res.redirect('dap-overseas-bank-details-payment.html');
  }
});

  module.exports = router

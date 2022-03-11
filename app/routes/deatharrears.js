const express = require('express');
const router = express.Router()

router.post('/death-arrears/current/org-dap-send-letter', function(req, res) {
  if ( req.session.data ['ref'][0] === 'yes' ) {
    res.redirect('org-dap-send-letter-no-ref');
  } else {
    res.redirect('org-dap-send-letter');
  }

});


router.post('/death-arrears/current/dap-uk-bank-details', function(req, res) {
  if ( req.session.data ['ref2'][0] === 'yes' ) {
    res.redirect('dap-overseas-bank-details-manual-payment');
  } else {
    res.redirect('dap-overseas-bank-details-payment');
  }

});

  module.exports = router

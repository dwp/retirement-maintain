const express = require('express');
const router = express.Router()

router.post('/manual-payments/returned-payment', function(req, res) {
  if ( req.body['returned'] === 'yes' ) {
    res.redirect('payment-returned');
  } if ( req.body['returned'] === 'no' ) {
    res.redirect('payment-details-2');
  }

});

  module.exports = router

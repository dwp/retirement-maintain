const express = require('express');
const router = express.Router()

router.post('/manual-payments/returned-payment', function(req, res) {
  if ( req.body['returned'] === 'yes' ) {
    res.redirect('payment-returned');
  } if ( req.body['returned'] === 'no' ) {
    res.redirect('payment-details-2');
  }

});

router.post('/manual-payments/reissue-details', function(req, res) {
  if ( req.body['reissue-payment-1'] === 'yes' ) {
    res.redirect('reissue-payment');
  } if ( req.body['reissue-payment-1'] === 'no' ) {
    res.redirect('payment-details-2');
  }

});

  module.exports = router

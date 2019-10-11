const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})
  ;

router.post('/iteration22b/payment-details-bank', function (req, res) {
  if (req.body['bank-change'] === 'yes') {
    res.redirect('payment-details-resend');
  } else {
    res.redirect('bankdetails');
  }
});


module.exports = router;

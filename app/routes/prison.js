const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/prison/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'suspend' ) {
    res.redirect('personal-suspended');
  } else if ( req.body['stop-sp'] === 'prison' ) {
    res.redirect('prison-overpayment');
  } else {
    res.redirect('personal');
  }
});


// Prison overpayment referral
router.post('/prison/prison-overpayment', function(req, res) {
  if ( req.body['prison-overpayment'] === 'yes' ) {
    res.redirect('prison-debt-referral');
  } else {
    res.redirect('personal-prison-overpayment');
  }
});

router.post('/prison/prison-debt-referral', (req, res) => {
  res.redirect('personal-prison')
})
;

router.post('/prison/prison-restart-sp', (req, res) => {
  res.redirect('personal')
})
;


// Reason for restarting SP
router.post('/prison/restart-sp', function(req, res) {
  if ( req.body['restart-sp'] === 'prison' ) {
    res.redirect('personal-left-prison');
  } else if ( req.body['restart-sp'] === 'suspend' ) {
    res.redirect('personal-suspendedrestarted');
  } else {
    res.redirect('personal');
  }
});

  module.exports = router;

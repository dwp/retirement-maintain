const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// ITERATION ONE

// Reason for stopping SP
router.post('/prison/iteration-1/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'suspend' ) {
    res.redirect('personal-suspended');
  } else if ( req.body['stop-sp'] === 'prison' ) {
    res.redirect('date-entered-prison');
  } else {
    res.redirect('personal');
  }
});

router.post('/prison/iteration-1/date-entered-prison', (req, res) => {
  res.redirect('prison-overpayment')
})
;

// Prison overpayment referral
router.post('/prison/iteration-1/prison/iteration-1-overpayment', function(req, res) {
  if ( req.body['prison-overpayment'] === 'yes' ) {
    res.redirect('prison-debt-referral');
  } else {
    res.redirect('personal-prison-overpayment');
  }
});

router.post('/prison/iteration-1/prison/iteration-1-debt-referral', (req, res) => {
  res.redirect('personal-prison')
})
;

router.post('/prison/iteration-1/prison/iteration-1-restart-sp', (req, res) => {
  res.redirect('personal')
})
;


// Reason for restarting SP
router.post('/prison/iteration-1/restart-sp', function(req, res) {
  if ( req.body['restart-sp'] === 'prison' ) {
    res.redirect('personal-left-prison');
  } else if ( req.body['restart-sp'] === 'suspend' ) {
    res.redirect('personal-suspendedrestarted');
  } else {
    res.redirect('personal');
  }
});






// ITERATION two

// Reason for stopping SP
router.post('/prison/iteration-2/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'suspend' ) {
    res.redirect('personal-suspended');
  } else if ( req.body['stop-sp'] === 'prison' ) {
    res.redirect('date-entered-prison');
  } else if ( req.body['stop-sp'] === 'custody' ) {
    res.redirect('personal-suspended');
  } else {
    res.redirect('personal');
  }
});



router.post('/prison/iteration-2/date-entered-prison', (req, res) => {
  res.redirect('prison-overpayment')
})
;

// Prison overpayment referral
router.post('/prison/iteration-2/prison/iteration-2-overpayment', function(req, res) {
  if ( req.body['prison-overpayment'] === 'yes' ) {
    res.redirect('prison-debt-referral');
  } else {
    res.redirect('personal-prison-overpayment');
  }
});

router.post('/prison/iteration-2/prison/iteration-1-debt-referral', (req, res) => {
  res.redirect('personal-prison')
})
;

router.post('/prison/iteration-2/prison/iteration-1-restart-sp', (req, res) => {
  res.redirect('personal')
})
;


// Reason for restarting SP
router.post('/prison/iteration-2/restart-sp', function(req, res) {
  if ( req.body['restart-sp'] === 'prison' ) {
    res.redirect('personal-left-prison');
  } else if ( req.body['restart-sp'] === 'suspend' ) {
    res.redirect('personal-suspendedrestarted');
  } else {
    res.redirect('personal');
  }
});

  module.exports = router;

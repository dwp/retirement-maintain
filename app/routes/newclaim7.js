const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/newclaim7/find', function(req, res) {
  if ( req.body['nino'] === 'XX 12 34 56' ) {
    res.redirect('/newclaim7/not-found');
  } else {
    res.redirect('/newclaim7/find-1');
  }
});


router.post('/newclaim7/find', (req, res) => {
  res.redirect('/newclaim7/find-1')
})
;

router.post('/newclaim7/dob-request', (req, res) => {
  res.redirect('/newclaim7/find')
})
;

router.post('/newclaim7/complete', (req, res) => {
  res.redirect('/newclaim7/find')
})
;


router.post('/newclaim7/address', (req, res) => {
  res.redirect('/newclaim7/address-result')
})
;


router.post('/newclaim7/address-result', function(req, res) {
  if ( req.body['address-results'] === 'address-not-found' ) {
    res.redirect('/newclaim7/manual-address');
  } else {
    res.redirect('/newclaim7/bank');
  }
});


router.post('/newclaim7/manual-address', (req, res) => {
  res.redirect('/newclaim7/bank')
})
;


router.post('/newclaim7/bank', (req, res) => {
  res.redirect('/newclaim7/sp-date')
})
;

// Do you want your State Pension from the earliest possible date? YES/NO
router.post('/newclaim7/sp-date', function(req, res) {
  if ( req.body['sp-date'] === 'yes' ) {
    res.redirect('/newclaim7/contact');
  } else {
    res.redirect('/newclaim7/claim-date');
  }
});

router.post('/newclaim7/claim-date', (req, res) => {
  res.redirect('/newclaim7/contact')
})
;
router.post('/newclaim7/contact', (req, res) => {
  res.redirect('/newclaim7/alternative')
})
;

router.post('/newclaim7/alternative', function(req, res) {
  if ( req.body['alternative'] === 'yes' ) {
    res.redirect('/newclaim7/alternative2');
  } else {
    res.redirect('/newclaim7/marital-status');
  }
});

router.post('/newclaim7/alternative2', (req, res) => {
  res.redirect('/newclaim7/marital-status')
})
;

router.post('/newclaim7/marital-details', (req, res) => {
  res.redirect('/newclaim7/lived-worked')
})
;

router.post('/newclaim7/lived-worked', function(req, res) {
  if ( req.body['lived-outside'] === 'yes' ) {
    res.redirect('/newclaim7/lived');
  } else {
    res.redirect('/newclaim7/worked');
  }
});

router.post('/newclaim7/lived-2', (req, res) => {
  res.redirect('/newclaim7/france')
})
;

router.post('/newclaim7/france', (req, res) => {
  res.redirect('/newclaim7/switzerland')
})
;


router.post('/newclaim7/switzerland', (req, res) => {
  res.redirect('/newclaim7/worked')
})
;

router.post('/newclaim7/divorce-details', (req, res) => {
  res.redirect('/newclaim7/lived-worked')
})
;


router.post('/newclaim7/worked', function(req, res) {
  if ( req.body['worked-outside'] === 'yes' ) {
    res.redirect('/newclaim7/worked-countries');
  } else {
    res.redirect('/newclaim7/check-answers');
  }
});

router.post('/newclaim7/marital-status', function(req, res) {
  if ( req.body['marital-status'] === 'married' ) {
    res.redirect('marital-details');
  } else if ( req.body['marital-status'] === 'never' ) {
    res.redirect('lived-worked');
  } else if ( req.body['marital-status'] === 'civil-partnership' ) {
    res.redirect('civil-details');
  } else if ( req.body['marital-status'] === "widowed" ) {
    res.redirect('widow-details');
  } else if ( req.body['marital-status'] === "divorced" ) {
    res.redirect('divorce-details');
  } else if ( req.body['marital-status'] === "dissolved" ) {
    res.redirect('dissolved-details');
  }
});


router.post('/newclaim7/dob', function(req, res) {
  if (req.session.data["nino"] === "xx347612a") {
    res.redirect('dob-request');
  } else if (req.session.data["nino"] === "XX347612A") {
    res.redirect('dob-request');
  } else {
    res.redirect('address');
  }
});

router.post('/newclaim7/declaration', (req, res) => {
  res.redirect('/newclaim7/complete')
})
;

router.post('/newclaim7/dob-evidence', (req, res) => {
  res.redirect('/newclaim7/find')
})
;




  module.exports = router;

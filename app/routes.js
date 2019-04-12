const express = require('express')
const router = express.Router()

///////////////////////////// Iteration 1 ///////////////////////////////////////

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/frequency', (req, res) => {
  res.redirect('/iteration1/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/bankdetails', (req, res) => {
  res.redirect('/iteration1/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/workphone', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/mobilephone', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/email', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/homephone', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/find', (req, res) => {
  res.redirect('/iteration1/find-1')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration1/address', (req, res) => {
  res.redirect('/iteration1/address-1')
})
;

router.post('/iteration1/address-1', (req, res) => {
  res.redirect('/iteration1/homephone-address')
})
;

// Change of address and home phone number
router.post('/iteration1/homephone-address', function(req, res) {
  if ( req.body['homephone-address'] === 'Yes' ) {
    res.redirect('homephone');
  } else {
    res.redirect('overview');
  }
});

// Home phone number removal
router.post('/iteration1/homephone-remove', function(req, res) {
  if ( req.body['homephone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('homephone');
  }
});


// Mobile phone number removal
router.post('/iteration1/mobilephone-remove', function(req, res) {
  if ( req.body['mobilephone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('mobilephone');
  }
});

// Work phone number removal & change
router.post('/iteration1/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

router.post('/iteration1/workphone', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

// Email removal
router.post('/iteration1/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});

// Marital status change
router.post('/iteration1/marital-status', (req, res) => {
  res.redirect('/iteration1/marriage-details')
})
;

router.post('/iteration1/marriage-details', (req, res) => {
  res.redirect('/iteration1/overview')
})
;

// Contact preferences
router.post('/iteration1/contact-preferences', (req, res) => {
  res.redirect('/iteration1/overview')
})
;


///////////////////////////// Iteration 2 ///////////////////////////////////////

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/frequency', (req, res) => {
  res.redirect('/iteration2/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/bankdetails', (req, res) => {
  res.redirect('/iteration2/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/workphone', (req, res) => {
  res.redirect('/iteration2/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/mobilephone', (req, res) => {
  res.redirect('/iteration2/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/email', (req, res) => {
  res.redirect('/iteration2/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/homephone', (req, res) => {
  res.redirect('/iteration2/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/find', (req, res) => {
  res.redirect('/iteration2/find-1')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration2/address', (req, res) => {
  res.redirect('/iteration2/address-1')
})
;

router.post('/iteration2/address-1', (req, res) => {
  res.redirect('/iteration2/homephone-address')
})
;

// Change of address and home phone number
router.post('/iteration2/homephone-address', function(req, res) {
  if ( req.body['homephone-address'] === 'Yes' ) {
    res.redirect('homephone');
  } else {
    res.redirect('contact');
  }
});

// Home phone number removal
router.post('/iteration2/homephone-remove', function(req, res) {
  if ( req.body['homephone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('homephone');
  }
});


// Mobile phone number removal
router.post('/iteration2/mobilephone-remove', function(req, res) {
  if ( req.body['mobilephone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('mobilephone');
  }
});

// Work phone number removal & change
router.post('/iteration2/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

router.post('/iteration2/workphone', (req, res) => {
  res.redirect('/iteration2/overview')
})
;

// Email removal
router.post('/iteration2/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});

// Marital status change
router.post('/iteration2/marital-status', (req, res) => {
  res.redirect('/iteration2/marriage-details')
})
;

router.post('/iteration2/marriage-details', (req, res) => {
  res.redirect('/iteration2/marriage-certificate')
})
;

// Contact preferences
router.post('/iteration2/contact-preferences', (req, res) => {
  res.redirect('/iteration2/overview')
})
;


// Stopping payments
router.post('/iteration2/prevent-payments', function(req, res) {
  if ( req.body['stopped-reason'] === 'dead' ) {
    res.redirect('death-date');
  } else {
    res.redirect('imprisioned-date');
  }
});



///////////////////////////// Iteration 3 ///////////////////////////////////////

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/frequency', (req, res) => {
  res.redirect('/iteration3/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/bankdetails', (req, res) => {
  res.redirect('/iteration3/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/workphone', (req, res) => {
  res.redirect('/iteration3/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/mobilephone', (req, res) => {
  res.redirect('/iteration3/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/email', (req, res) => {
  res.redirect('/iteration3/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/homephone', (req, res) => {
  res.redirect('/iteration3/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/find', (req, res) => {
  res.redirect('/iteration3/find-1')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration3/address', (req, res) => {
  res.redirect('/iteration3/address-1')
})
;

router.post('/iteration3/address-1', (req, res) => {
  res.redirect('/iteration3/homephone-address')
})
;

// Change of address and home phone number
router.post('/iteration3/homephone-address', function(req, res) {
  if ( req.body['homephone-address'] === 'Yes' ) {
    res.redirect('homephone');
  } else {
    res.redirect('contact');
  }
});

// Home phone number removal
router.post('/iteration3/homephone-remove', function(req, res) {
  if ( req.body['homephone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('homephone');
  }
});


// Mobile phone number removal
router.post('/iteration3/mobilephone-remove', function(req, res) {
  if ( req.body['mobilephone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('mobilephone');
  }
});

// Work phone number removal & change
router.post('/iteration3/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

router.post('/iteration3/workphone', (req, res) => {
  res.redirect('/iteration3/overview')
})
;

// Email removal
router.post('/iteration3/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});

// Marital status change
router.post('/iteration3/marital-status', (req, res) => {
  res.redirect('/iteration3/marriage-details')
})
;

router.post('/iteration3/marriage-details', (req, res) => {
  res.redirect('/iteration3/marriage-certificate')
})
;

// Contact preferences
router.post('/iteration3/contact-preferences', (req, res) => {
  res.redirect('/iteration3/contact')
})
;


// Stopping payments
router.post('/iteration3/prevent-payments', function(req, res) {
  if ( req.body['stopped-reason'] === 'dead' ) {
    res.redirect('death-date');
  } else {
    res.redirect('imprisioned-date');
  }
});


///////////////////////////// iteration 4 ///////////////////////////////

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/frequency', (req, res) => {
  res.redirect('/iteration4/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/bankdetails', (req, res) => {
  res.redirect('/iteration4/reissue-payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/workphone', (req, res) => {
  res.redirect('/iteration4/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/mobilephone', (req, res) => {
  res.redirect('/iteration4/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/email', (req, res) => {
  res.redirect('/iteration4/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/homephone', (req, res) => {
  res.redirect('/iteration4/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/find', (req, res) => {
  res.redirect('/iteration4/find-1')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration4/address', (req, res) => {
  res.redirect('/iteration4/address-1')
})
;

router.post('/iteration4/address-1', (req, res) => {
  res.redirect('/iteration4/homephone-address')
})
;

// Change of address and home phone number
router.post('/iteration4/homephone-address', function(req, res) {
  if ( req.body['homephone-address'] === 'Yes' ) {
    res.redirect('homephone');
  } else {
    res.redirect('contact');
  }
});

// Home phone number removal
router.post('/iteration4/homephone-remove', function(req, res) {
  if ( req.body['homephone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('homephone');
  }
});


// Mobile phone number removal
router.post('/iteration4/mobilephone-remove', function(req, res) {
  if ( req.body['mobilephone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('mobilephone');
  }
});

// Work phone number removal & change
router.post('/iteration4/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

router.post('/iteration4/workphone', (req, res) => {
  res.redirect('/iteration4/overview')
})
;

// Email removal
router.post('/iteration4/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});

// Marital status change
router.post('/iteration4/marital-status', (req, res) => {
  res.redirect('/iteration4/marriage-details')
})
;

router.post('/iteration4/marriage-details', (req, res) => {
  res.redirect('/iteration4/marriage-certificate')
})
;

// Contact preferences
router.post('/iteration4/contact-preferences', (req, res) => {
  res.redirect('/iteration4/contact')
})
;


// Stopping payments
router.post('/iteration4/prevent-payments', function(req, res) {
  if ( req.body['stopped-reason'] === 'dead' ) {
    res.redirect('death-date');
  } else {
    res.redirect('imprisioned-date');
  }
});




///////////////////////////// BPV iteration ///////////////////////////////////////
//-------------------------------------------------------------------------------
router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/frequency', (req, res) => {
  res.redirect('/bpv-iteration/cps')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/bankdetails', (req, res) => {
  res.redirect('/bpv-iteration/cps')
})
;

router.post('/bpv-iteration/cps', (req, res) => {
  res.redirect('/bpv-iteration/payment')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/workphone', (req, res) => {
  res.redirect('/bpv-iteration/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/mobilephone', (req, res) => {
  res.redirect('/bpv-iteration/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/email', (req, res) => {
  res.redirect('/bpv-iteration/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/homephone', (req, res) => {
  res.redirect('/bpv-iteration/overview')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/find', (req, res) => {
  res.redirect('/bpv-iteration/find-1')
})
;

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/bpv-iteration/address', (req, res) => {
  res.redirect('/bpv-iteration/address-1')
})
;

router.post('/bpv-iteration/address-1', (req, res) => {
  res.redirect('/bpv-iteration/overview')
})
;

// Change of address and home phone number
router.post('/bpv-iteration/homephone-address', function(req, res) {
  if ( req.body['homephone-address'] === 'Yes' ) {
    res.redirect('homephone');
  } else {
    res.redirect('overview');
  }
});

// Home phone number removal
router.post('/bpv-iteration/homephone-remove', function(req, res) {
  if ( req.body['homephone-remove'] === 'Yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('homephone');
  }
});


// Mobile phone number removal
router.post('/bpv-iteration/mobilephone-remove', function(req, res) {
  if ( req.body['mobilephone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('mobilephone');
  }
});

// Work phone number removal
router.post('/bpv-iteration/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

// Email removal
router.post('/bpv-iteration/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});


// New claims 1 -----------------------------------------------------------------
// ------------------------------------------------------------------------------

router.post('/newclaims/find', (req, res) => {
  res.redirect('/newclaims/find-1')
})
;

router.post('/newclaims/sp-date', (req, res) => {
  res.redirect('/newclaims/lived-outside')
})
;

router.post('/newclaims/security1', (req, res) => {
  res.redirect('/newclaims/security2')
})
;

router.post('/newclaims/security2', (req, res) => {
  res.redirect('/newclaims/sp-date')
})
;

router.post('/newclaims/lived-outside', (req, res) => {
  res.redirect('/newclaims/worked-outside')
})
;

router.post('/newclaims/worked-outside', (req, res) => {
  res.redirect('/newclaims/marital')
})
;

router.post('/newclaims/marital', (req, res) => {
  res.redirect('/newclaims/spouse')
})
;

router.post('/newclaims/spouse', (req, res) => {
  res.redirect('/newclaims/contact-details')
})
;

router.post('/newclaims/contact-details', (req, res) => {
  res.redirect('/newclaims/bank')
})
;



// New claims 2 -----------------------------------------------------------------
// ------------------------------------------------------------------------------

router.post('/newclaims-2/find', (req, res) => {
  res.redirect('/newclaims-2/find-1')
})
;

router.post('/newclaims-2/sp-date', (req, res) => {
  res.redirect('/newclaims-2/lived-outside')
})
;

router.post('/newclaims-2/security1', (req, res) => {
  res.redirect('/newclaims-2/security2')
})
;

router.post('/newclaims-2/security2', (req, res) => {
  res.redirect('/newclaims-2/sp-date')
})
;

router.post('/newclaims-2/lived-outside', (req, res) => {
  res.redirect('/newclaims-2/worked-outside')
})
;

router.post('/newclaims-2/worked-outside', (req, res) => {
  res.redirect('/newclaims-2/marital')
})
;

router.post('/newclaims-2/marital', (req, res) => {
  res.redirect('/newclaims-2/spouse')
})
;

router.post('/newclaims-2/spouse', (req, res) => {
  res.redirect('/newclaims-2/contact-details')
})
;

router.post('/newclaims-2/contact-details', (req, res) => {
  res.redirect('/newclaims-2/bank')
})
;

router.post('/newclaims-2/frequency', function(req, res) {
  if ( req.body['frequency'] === 'yes' ) {
    res.redirect('/newclaims-2/declaration');
  } else {
    res.redirect('/newclaims-2/change-frequency');
  }
});



// Agent manual -----------------------------------------------------------------
// ------------------------------------------------------------------------------

router.post('/manualpayment/processaclaim', (req, res) => {
  res.redirect('/manualpayment/checkclaim')
})
;

router.post('/manualpayment/checkclaim', (req, res) => {
  res.redirect('/manualpayment/enteramounts')
})
;

router.post('/manualpayment/enteramounts', (req, res) => {
  res.redirect('/manualpayment/payment')
})
;

router.post('/manualpayment/payment', (req, res) => {
  res.redirect('/manualpayment/confirmation')
})



module.exports = router

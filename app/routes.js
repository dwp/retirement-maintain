const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

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

// Work phone number removal
router.post('/iteration1/workphone-remove', function(req, res) {
  if ( req.body['workphone-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('workphone');
  }
});

// Email removal
router.post('/iteration1/email-remove', function(req, res) {
  if ( req.body['email-remove'] === 'yes' ) {
    res.redirect('overview');
  } else {
    res.redirect('email');
  }
});



// Agent manual -----------------------------------------------------------------
// ------------------------------------------------------------------------------

router.post('/manualpayment/processaclaim', (req, res) => {
  res.redirect('/manualpayment/checkclaim')
})
;

router.post('/manualpayment/checkclaim', (req, res) => {
  res.redirect('/manualpayment/suffix')
})
;

router.post('/manualpayment/suffix', (req, res) => {
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
;


module.exports = router

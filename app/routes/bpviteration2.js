const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/frequency', (req, res) => {
    res.redirect('/bpviteration/payment')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/bankdetails', (req, res) => {
    res.redirect('/bpviteration/reissue-payment')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/workphone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/mobilephone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/email', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/homephone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/find', (req, res) => {
    res.redirect('/bpviteration/find-1')
  })
  ;
  
  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  
  router.post('/bpviteration/address', (req, res) => {
    res.redirect('/bpviteration/address-1')
  })
  ;
  
  router.post('/bpviteration/address-1', (req, res) => {
    res.redirect('/bpviteration/homephone-address')
  })
  ;
  
  // Change of address and home phone number
  router.post('/bpviteration/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });
  
  // Home phone number removal
  router.post('/bpviteration/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });
  
  
  // Mobile phone number removal
  router.post('/bpviteration/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });
  
  // Work phone number removal & change
  router.post('/bpviteration/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });
  
  router.post('/bpviteration/workphone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;
  
  // Email removal
  router.post('/bpviteration/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });
  
  // Marital status change
  router.post('/bpviteration/marital-status', (req, res) => {
    res.redirect('/bpviteration/marriage-details')
  })
  ;
  
  router.post('/bpviteration/marriage-details', (req, res) => {
    res.redirect('/bpviteration/marriage-certificate')
  })
  ;
  
  // Contact preferences
  router.post('/bpviteration/contact-preferences', (req, res) => {
    res.redirect('/bpviteration/contact')
  })
  ;
  
  
  // Stopping payments
  router.post('/bpviteration/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
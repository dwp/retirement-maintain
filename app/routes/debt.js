const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



router.post('/debt/debt-start-date', function(req, res) {
  if ( req.body['debtstartdate'] === 'manual-date' ) {
    res.redirect('debt-start-date-manual');
  } else {
    res.redirect('debt-details');
  }
});

router.post('/debt/debt-edit', function(req, res) {
  if ( req.body['edit-remove-debt'] === 'remove' ) {
    res.redirect('remove-confirmation');
  } else {
    res.redirect('debt-start-date-manual');
  }
});

router.post('/debt/apply-debt', (req, res) => {
  res.redirect('/debt/confirm-debt')
})
;

router.post('/debt/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/debt-details')
})
;

router.post('/debt/debt-details', (req, res) => {
  res.redirect('/debt/debt-end-date')
})
;


router.post('/debt/debt-end-date', (req, res) => {
  res.redirect('/debt/confirm-debt')
})
;

router.post('/debt/confirm-debt', function(req, res) {
  if ( req.session.data['edit-remove-debt'] === 'edit' ) {
    res.redirect('award-debt-edited');
  } else {
    res.redirect('award-updated');
  }
});






// Iteration two

router.post('/debt/iteration-2/debt-start-date', function(req, res) {
  if ( req.body['debtstartdate'] === 'manual-date' ) {
    res.redirect('debt-start-date-manual');
  } else {
    res.redirect('debt-details');
  }
});

router.post('/debt/iteration-2/debt-edit', function(req, res) {
  if ( req.body['edit-remove-debt'] === 'remove' ) {
    res.redirect('remove-confirmation');
  } else {
    res.redirect('debt-start-date-manual');
  }
});

router.post('/debt/iteration-2/apply-debt', (req, res) => {
  res.redirect('/debt/confirm-debt')
})
;

router.post('/debt/iteration-2/debt-start-date-manual', (req, res) => {
  res.redirect('/debt/debt-details')
})
;

router.post('/debt/iteration-2/debt-details', (req, res) => {
  res.redirect('/debt/debt-end-date')
})
;


router.post('/debt/iteration-2/debt-end-date', (req, res) => {
  res.redirect('/debt/confirm-debt')
})
;

router.post('/debt/iteration-2/confirm-debt', function(req, res) {
  if ( req.session.data['edit-remove-debt'] === 'edit' ) {
    res.redirect('award-debt-edited');
  } else {
    res.redirect('award-updated');
  }
});





//
router.post('/', (req, res) => {
  res.redirect('/')
})
;



  module.exports = router;

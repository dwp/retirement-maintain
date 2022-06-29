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







//
router.post('/', (req, res) => {
  res.redirect('/')
})
;



  module.exports = router;

const express = require('express');
const router = express.Router()


router.post('/newclaim7/address', (req, res) => {
  res.redirect('/newclaim7/bank')
})
;

router.post('/newclaim7/bank', (req, res) => {
  res.redirect('/newclaim7/freqency')
})
;

router.post('/newclaim7/frequency', (req, res) => {
  res.redirect('/newclaim7/sp-date')
})
;

router.post('/newclaim7/sp-date', (req, res) => {
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



router.post('/newclaim7/lived-worked', function(req, res) {
  if ( req.body['lived-outside'] === 'yes' ) {
    res.redirect('/newclaim7/lived');
  } else {
    res.redirect('/newclaim7/check-answers');
  }
});


  module.exports = router;

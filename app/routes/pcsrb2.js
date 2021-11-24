const express = require('express');
const router = express.Router()

router.post('/pc-srb-2/review', (req, res) => {
  res.redirect('/pc-srb-2/review-details')
})
;

router.post('/pc-srb-2/review-details', (req, res) => {
  res.redirect('/pc-srb-2/review-award')
})
;

router.post('/pc-srb-2/review-award', (req, res) => {
  res.redirect('/pc-srb-2/received-pension-credit')
})
;

  router.post('/pc-srb-2/received-pension-credit', (req, res) => {
    if ( req.body['receiving-pc'] === 'citizen' ) {
      res.redirect('/pc-srb-2/pc-review-task');
    }
  else if ( req.body['receiving-pc'] === 'partner' ) {
    res.redirect('/pc-srb-2/enter-partner-details');
  }  else {
    res.redirect('/pc-srb-2/')
  }
})


module.exports = router;

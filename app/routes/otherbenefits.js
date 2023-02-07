const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// WAR PENSION
router.post('/war-pension/iteration-1/war-pension-decision', function(req, res) {
  if ( req.body['war-pension-decision'] === 'award-state-pension' ) {
    res.redirect('award-change');
  } else {
    res.redirect('no-award');
  }
});


// CARERS ALLOWANCE

router.post('/carers-allowance/iteration-1/carers-allowance-decision-1', function(req, res) {
  if ( req.body['carers-allowance'] === 'yes' ) {
    res.redirect('carers-allowance-details');
  } else {
    res.redirect('refused-2');
  }
});



  module.exports = router;

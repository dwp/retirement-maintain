const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/carers-allowance/iteration-1/carers-allowance-decision', function(req, res) {
  if ( req.body['carers-allowance-decision'] === 'offset' ) {
    res.redirect('carers-allowance-details');
  } else {
    res.redirect('no-offset');
  }
});


  module.exports = router;

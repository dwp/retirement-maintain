
const express = require('express');
const router = express.Router()


  router.post('/pc-srb-record-2/pc-changes', (req, res) => {
    if ( req.body['pc-withhold'] === 'yes' ) {
      res.redirect('/pc-srb-record-2/review-award')
  }  else {
    res.redirect('/pc-srb-record-2/confirm-nothing-withheld')
  }
})


module.exports = router;

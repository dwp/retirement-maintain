const express = require('express');
const router = express.Router()

router.post('/iteration39/can-inherit', function(req, res) {
    if ( req.body['inherited'] === 'yes' ) {
      res.redirect('/iteration39/components');
    } else {
      res.redirect('/iteration39/not-inherit');
    }
  });

module.exports = router;

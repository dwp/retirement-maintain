const express = require('express');
const router = express.Router()

router.post('/paperclaims5c/marital-status', function(req, res) {
    if ( req.body['marital-status'] === 'divorced' ) {
      res.redirect('/paperclaims5c/marital-details');
    } else {
      res.redirect('/paperclaims5c/marital-details-civil');
    }
  });

module.exports = router;

const express = require('express');
const router = express.Router()


  router.post('/paperclaims/iteration-4/find-1', function(req, res) {
    if ( req.body['process'] === 'yes' ) {
      res.redirect('/paperclaims/iteration-4/ni');
    } else {
      res.redirect('/paperclaims/iteration-4/drop-out');
    }
  });



router.post('/paperclaims/iteration-5c/marital-status', function(req, res) {
    if ( req.body['marital-status'] === 'divorced' ) {
      res.redirect('/paperclaims/iteration-5c/marital-details');
    } else {
      res.redirect('/paperclaims/iteration-5c/marital-details-civil');
    }
  });

module.exports = router;

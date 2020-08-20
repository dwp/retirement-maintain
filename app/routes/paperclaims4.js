const express = require('express');
const router = express.Router()


  router.post('/paperclaims4/find-1', function(req, res) {
    if ( req.body['process'] === 'yes' ) {
      res.redirect('/paperclaims4/ni');
    } else {
      res.redirect('/paperclaims4/drop-out');
    }
  });

module.exports = router;

const express = require('express');
const router = express.Router()


  router.post('/iteration43/cancel-date', function(req, res) {
    if ( req.body['claim'] === 'yes' ) {
      res.redirect('/iteration43/cancel-confirm');
    } else {
      res.redirect('/iteration43/cancel-defer-date');
    }
  });

module.exports = router;

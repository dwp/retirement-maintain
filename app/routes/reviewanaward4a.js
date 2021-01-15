const express = require('express');
const router = express.Router()

router.post('/reviewanaward4a/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward4a/tasks-5');
    } else {
      res.redirect('/reviewanaward4a/tasks');
    }
  });

module.exports = router;
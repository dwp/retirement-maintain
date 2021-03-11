const express = require('express');
const router = express.Router()

router.post('/reviewanaward5/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward5/tasks-5');
    } else {
      res.redirect('/reviewanaward5/end-task');
    }
  });

module.exports = router;

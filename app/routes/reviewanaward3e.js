const express = require('express');
const router = express.Router()

router.post('/reviewanaward3e/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward3e/tasks-5');
    } else {
      res.redirect('/reviewanaward3e/end-task');
    }
  });

module.exports = router;
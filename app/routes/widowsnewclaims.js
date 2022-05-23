const express = require('express');
const router = express.Router()

router.post('/widows/new-claims/inheritable', function(req, res) {
    if ( req.body['inheritable-amounts'] === 'yes' ) {
      res.redirect('/widows/new-claims/spouse-spa');
    } else {
      res.redirect('/widows/new-claims/end-task');
    }
  });

module.exports = router;

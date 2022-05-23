const express = require('express');
const router = express.Router()

router.post('/widows/new-claims/inheritable', function(req, res) {
    if ( req.body['inheritable-amounts'] === 'yes' ) {
      res.redirect('/widows/new-claims/spouse-spa');
    } else {
      res.redirect('/widows/new-claims/end-task');
    }
  });

  router.post('/widows/new-claims/spouse-spa', function(req, res) {
      if ( req.body['receiving-sp'] === 'yes' ) {
        res.redirect('/widows/new-claims/check-details');
      } else {
        res.redirect('/widows/new-claims/end-task-pscs');
      }
    });



module.exports = router;

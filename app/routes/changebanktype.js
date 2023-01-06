const express = require('express');
const router = express.Router()

router.post('/whatislive2/changebanktype', function(req, res) {
    if ( req.body['bankaccounttype'] === 'uk' ) {
      res.redirect('/whatislive2/change-bank');
    } else {
      res.redirect('/whatislive2/international-bank');
    }
  });

// bank change with name check

  router.post('/bank-name-check/iteration-1/changebanktype', function(req, res) {
      if ( req.body['bank-account-type'] === 'uk' ) {
        res.redirect('/bank-name-check/iteration-1/bank-uk');
      } else {
        res.redirect('/bank-name-check/iteration-1/bank-international');
      }
    });

module.exports = router;

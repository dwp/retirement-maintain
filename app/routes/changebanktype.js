const express = require('express');
const router = express.Router()

router.post('/whatislive2/changebanktype', function(req, res) {
    if ( req.body['bankaccounttype'] === 'uk' ) {
      res.redirect('/whatislive2/change-bank');
    } else {
      res.redirect('/whatislive2/international-bank');
    }
  });

module.exports = router;

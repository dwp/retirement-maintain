const express = require('express');
const router = express.Router()

router.post('/death-arrears/current/dap-address-1-corporate-dap', function(req, res) {
  if ( req.session.data ['corp-ref'] === 'corp-ref-no' ) {
    res.redirect('nothing-owed-corporate-dap');
  } if ( req.session.data ['corp-ref'] === 'corp-ref-yes' ) {
    res.redirect('corporate-dap-ref');
  }

});

  module.exports = router

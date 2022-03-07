const express = require('express');
const router = express.Router()

router.post('/death-arrears/current/dap-address-1-corporate-dap', function(req, res) {
  if ( req.session.data ['corp-ref'] === 'corp-ref' ) {
    res.redirect('corporate-dap-ref-q');
  }

});

  module.exports = router

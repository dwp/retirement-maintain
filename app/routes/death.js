const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/death/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'deferral' ) {
    res.redirect('deferral');
  } else {
    res.redirect('death-date');
  }
});

// Date of death to DAP details
router.post('/death/death-date', (req, res) => {
  res.redirect('/death/dap-details')
})
;

// DAP details yes/no
router.post('/death/dap-details', function(req, res) {
  if ( req.body['dap-details'] === 'yes' ) {
    res.redirect('dap-name');
  } else {
    res.redirect('overview-arrears');
  }
});


  module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// DAP details yes/no
router.post('/debt/debt-start-date', function(req, res) {
  if ( req.body['debt-start-date'] === 'manual-date' ) {
    res.redirect('debt-start-date-manual');
  } else {
    res.redirect('debt-details');
  }
});

//
router.post('/', (req, res) => {
  res.redirect('/')
})
;

  module.exports = router;

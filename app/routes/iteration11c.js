const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})
  ;

router.post('iteration11c/dap-number', (req, res) => {
  res.redirect('iteration10a/nothing-owed')
})
  ;

router.post('/iteration11c/dap-address', function (req, res) {
  if (req.body['send-letter'] === 'yes') {
    res.redirect('dap-address');
  } else {
    res.redirect('confirmation-2');
  }
});


module.exports = router;

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/admin-view-3/stop-sp', function(req, res) {
  if ( req.body['stop-sp'] === 'suspend' ) {
    res.redirect('personal-suspended');
  } else {
    res.redirect('personal');
  }
});


  module.exports = router;

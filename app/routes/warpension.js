const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Reason for stopping SP
router.post('/war-pension/iteration-1/war-pension-decision', function(req, res) {
  if ( req.body['war-pension-decision'] === 'award-state-pension' ) {
    res.redirect('award-change');
  } else {
    res.redirect('no-award');
  }
});


  module.exports = router;

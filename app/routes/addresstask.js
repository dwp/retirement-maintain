const express = require('express');
const router = express.Router()

router.post('/addresstask/tasks-1', (req, res) => {
  res.redirect('/addresstask/address-task-1')
})
;


router.post('/addresstask/address-task-1', function(req, res) {
  if ( req.body['address'] === 'Address not found' ) {
    res.redirect('address-search-1');
  } else {
    res.redirect('tasks-2');
  }
});


module.exports = router;

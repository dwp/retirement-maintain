const express = require('express');
const router = express.Router()

router.post('/addresstask/address-task-1', function(req, res) {
if ( req.body['address-fix-1'] === 'Address not found' ) {
  res.redirect('/addresstask/address-search-1');
} else {
  res.redirect('/addresstask/address-matched-1');
}
});
;

module.exports = router;

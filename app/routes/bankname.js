const express = require('express');
const router = express.Router()


router.post('/widows/conversion-task-pc/task-details', (req, res) => {
  res.redirect('/widows/conversion-task-pc/check-details-info-missing')
})
;

router.post('/widows/conversion-task-pc/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'nothing-to-inherit' ) {
      res.redirect('/widows/conversion-task-pc/nothing-to-inherit');
    } else if  ( req.body['decision'] === 'save' ) {
      res.redirect('/widows/conversion-task-pc/get-a-task-return');
    } else if  ( req.body['decision'] === 'inheritable-amounts' ) {
      res.redirect('/widows/conversion-task-pc/inheritable-amounts');
    } else {
      res.redirect('/widows/conversion-task-pc/more-info-letter');
    }
  });


module.exports = router;

const express = require('express');
const router = express.Router()


router.post('/identity-check-task-2/security-check-task-details-record', (req, res) => {
  res.redirect('/identity-check-task-2/security-check-task-record')
})
;

router.post('/identity-check-task-2/security-check-task-details', (req, res) => {
  res.redirect('/identity-check-task-2/security-check-task')
})
;


router.post('/identity-check-task-2/security-check-task', function(req, res) {
  if ( req.body['security-questions'] === 'passed' ) {
    res.redirect('passed');
  } else if ( req.body['security-questions'] === 'failed' ) {
    res.redirect('first-fail');
  } else if ( req.body['security-questions'] === 'refused' ) {
    res.redirect('refused');
  } else {
    res.redirect('no-answer');
  }
});


//
router.post('/identity-check-task-2/security-check-task-record', function(req, res) {
  if ( req.body['security-questions'] === 'passed' ) {
    res.redirect('passed-2');
  } else if ( req.body['security-questions'] === 'failed' ) {
    res.redirect('first-fail-2');
  } else {
    res.redirect('refused-2');
  }
});



  module.exports = router;

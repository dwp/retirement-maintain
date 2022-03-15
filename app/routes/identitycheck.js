const express = require('express');
const router = express.Router()


router.post('/identity-check-task/security-check-task-details-record', (req, res) => {
  res.redirect('/identity-check-task/security-check-task-record')
})
;

router.post('/identity-check-task/security-check-task-details', (req, res) => {
  res.redirect('/identity-check-task/security-check-task')
})
;


router.post('/identity-check-task/security-check-task', function(req, res) {
  if ( req.body['security-questions'] === 'passed' ) {
    res.redirect('passed');
  } else if ( req.body['security-questions'] === 'failed' ) {
    res.redirect('failed');
  } else if ( req.body['security-questions'] === 'refused' ) {
    res.redirect('refused');
  } else {
    res.redirect('no-answer');
  }
});
//
router.post('/identity-check-task/security-check-task-record', function(req, res) {
  if ( req.body['security-questions'] === 'passed' ) {
    res.redirect('personal-2');
  } else if ( req.body['security-questions'] === 'failed' ) {
    res.redirect('personal-2');
  } else {
    res.redirect('personal');
  }
});

  module.exports = router;

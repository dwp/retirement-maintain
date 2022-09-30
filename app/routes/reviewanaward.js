const express = require('express');
const router = express.Router()

// Iteration 5

router.post('/reviewanaward/iteration-5/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward/iteration-5/tasks-5');
    } else {
      res.redirect('/reviewanaward/iteration-5/end-task');
    }
  });

module.exports = router;

// Iteration 4a

router.post('/reviewanaward/iteration-4a/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward/iteration-4a/tasks-5-5');
    } else {
      res.redirect('/reviewanaward/iteration-4a/end-task');
    }
  });

// Iteration 3e

router.post('/reviewanaward/iteration-3e/tasks-4-4', function(req, res) {
    if ( req.body['overpayment'] === 'yes' ) {
      res.redirect('/reviewanaward/iteration-3e/tasks-5');
    } else {
      res.redirect('/reviewanaward/iteration-3e/end-task');
    }
  });

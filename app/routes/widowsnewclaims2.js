const express = require('express');
const router = express.Router()


router.post('/widows/iteration-2/task-details', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})
;

router.post('/widows/iteration-2/dom', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})
;

router.post('/widows/iteration-2/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'more-info' ) {
      res.redirect('/widows/iteration-2/more-info-letter');
    } else {
    res.redirect('/widows/iteration-2/nothing-to-inherit');
  }
  });

  router.post('/widows/iteration-2/more-info-letter', (req, res) => {
    res.redirect('/widows/iteration-2/get-a-task-2')
  })
  ;

  router.post('/widows/iteration-2/nothing-to-inherit', (req, res) => {
    res.redirect('/widows/iteration-2/get-a-task-2')
  })
  ;

  router.post('/widows/iteration-2/award-without-inheritance', (req, res) => {
    res.redirect('/widows/iteration-2/get-a-task-2')
  })
  ;

router.post('/widows/iteration-2/inheritable', function(req, res) {
    if ( req.body['inheritable-amounts'] === 'yes' ) {
      res.redirect('/widows/iteration-2/spouse-spa');
    } else {
      res.redirect('/widows/iteration-2/end-task');
    }
  });

  router.post('/widows/iteration-2/spouse-spa', function(req, res) {
      if ( req.body['receiving-sp'] === 'yes' ) {
        res.redirect('/widows/iteration-2/check-details');
      } else {
        res.redirect('/widows/iteration-2/end-task-pscs');
      }
    });

module.exports = router;

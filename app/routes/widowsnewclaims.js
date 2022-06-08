const express = require('express');
const router = express.Router()


router.post('/widows/new-claims/task-details', (req, res) => {
  res.redirect('/widows/new-claims/check-details-info-missing')
})
;

router.post('/widows/new-claims/check-details-info-missing', function(req, res) {
    if ( req.body['specialist-decision'] === 'support-queue' ) {
      res.redirect('/widows/new-claims/get-a-task');
    } else if  ( req.body['specialist-decision'] === 'more-info' ) {
      res.redirect('/widows/new-claims/more-info-letter');
    } else if  ( req.body['specialist-decision'] === 'award' ) {
      res.redirect('/widows/new-claims/nothing-to-inherit');
    } else {
    res.redirect('/widows/new-claims/award-without-inheritance');
  }
  });

  router.post('/widows/new-claims/more-info-letter', (req, res) => {
    res.redirect('/widows/new-claims/get-a-task-2')
  })
  ;

  router.post('/widows/new-claims/nothing-to-inherit', (req, res) => {
    res.redirect('/widows/new-claims/get-a-task-2')
  })
  ;

  router.post('/widows/new-claims/award-without-inheritance', (req, res) => {
    res.redirect('/widows/new-claims/get-a-task-2')
  })
  ;

router.post('/widows/new-claims/inheritable', function(req, res) {
    if ( req.body['inheritable-amounts'] === 'yes' ) {
      res.redirect('/widows/new-claims/spouse-spa');
    } else {
      res.redirect('/widows/new-claims/end-task');
    }
  });

  router.post('/widows/new-claims/spouse-spa', function(req, res) {
      if ( req.body['receiving-sp'] === 'yes' ) {
        res.redirect('/widows/new-claims/check-details');
      } else {
        res.redirect('/widows/new-claims/end-task-pscs');
      }
    });



module.exports = router;

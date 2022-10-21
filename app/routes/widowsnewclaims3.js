const express = require('express');
const router = express.Router()



// conversions

router.post('/widows/conversion-task/task-details', (req, res) => {
  res.redirect('/widows/conversion-task/check-details-info-missing')
})
;

router.post('/widows/conversion-task/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'nothing-to-inherit' ) {
      res.redirect('/widows/conversion-task/nothing-to-inherit');
    } else if  ( req.body['decision'] === 'save' ) {
      res.redirect('/widows/conversion-task/get-a-task-return');
    } else if  ( req.body['decision'] === 'inheritable-amounts' ) {
      res.redirect('/widows/conversion-task/inheritable-amounts');
    } else {
      res.redirect('/widows/conversion-task/more-info-letter');
    }
  });

  router.post('/widows/conversion-task/dom', (req, res) => {
    res.redirect('/widows/conversion-task/check-details-info-missing')
  })
  ;


  router.post('/widows/conversion-task/award-calculated', (req, res) => {
    res.redirect('/widows/conversion-task/get')
  })
  ;


// Conversion record

  router.post('/widows/conversion/dom', (req, res) => {
    res.redirect('/widows/conversion/check-details-info-missing')
  })
  ;

  router.post('/widows/conversion/inheritable-amounts', (req, res) => {
    res.redirect('/widows/conversion/award-calculated')
  })
  ;

  router.post('/widows/conversion/award-calculcated', (req, res) => {
    res.redirect('/widows/conversion/personal-widowed')
  })
  ;

  router.post('/widows/conversion/change-marital-status', function(req, res) {
      if ( req.body['maritalstatus'] === 'divorced' ) {
        res.redirect('/widows/conversion/divorced');
      } else {
        res.redirect('/widows/conversion/check-details-info-missing');
      }
    });


  router.post('/widows/conversion/check-details-info-missing', function(req, res) {
      if ( req.body['conversion-decision'] === 'nothing-to-inherit' ) {
        res.redirect('/widows/conversion/nothing-to-inherit');
      } else if  ( req.body['conversion-decision'] === 'save' ) {
        res.redirect('/widows/conversion/get-a-task-return');
      } else if  ( req.body['conversion-decision'] === 'inheritable-amounts' ) {
        res.redirect('/widows/conversion/inheritable-amounts');
      } else {
        res.redirect('/widows/conversion/more-info-letter');
      }
    });

    router.post('/widows/conversion/inheritable-amounts', (req, res) => {
      res.redirect('/widows/conversion/')
    })
    ;



// new claims

router.post('/widows/iteration-3/task-details', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;

router.post('/widows/iteration-3/nino', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;

router.post('/widows/iteration-3/dom', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;

router.post('/widows/iteration-3/dob', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;


router.post('/widows/iteration-3/gender', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;

router.post('/widows/iteration-3/dod', (req, res) => {
  res.redirect('/widows/iteration-3/check-details-info-missing')
})
;

router.post('/widows/iteration-3/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'more-info' ) {
      res.redirect('/widows/iteration-3/more-info-no-letter');
    } else if  ( req.body['decision'] === 'save-return' ) {
      res.redirect('/widows/iteration-3/get-a-task-2');
    } else if ( req.body['decision'] === 'nothing-to-inherit' ) {
    res.redirect('/widows/iteration-3/nothing-to-inherit');
  } else if ( req.body['decision'] === 'inheritable-amounts' ) {
      res.redirect('/widows/iteration-3/inheritable-amounts');
    } else {
    res.redirect('/widows/iteration-3/get-a-task-2');
  }
  });





  router.post('/widows/iteration-3/more-info-no-letter', (req, res) => {
    res.redirect('/widows/iteration-3/get-a-task-2')
  })
  ;

  router.post('/widows/iteration-3/nothing-to-inherit', (req, res) => {
    res.redirect('/widows/iteration-3/get-a-task-2')
  })
  ;

  router.post('/widows/iteration-3/award-without-inheritance', (req, res) => {
    res.redirect('/widows/iteration-3/get-a-task-2')
  })
  ;



  router.post('/widows/iteration-3/spouse-spa', function(req, res) {
      if ( req.body['receiving-sp'] === 'yes' ) {
        res.redirect('/widows/iteration-3/check-details');
      } else {
        res.redirect('/widows/iteration-3/end-task-pscs');
      }
    });




    // Widows conversions

    router.post('/widows/conversion/spouse-dod', function(req, res) {
        if ( req.body['spouse-dod-verification'] === 'verified' ) {
          res.redirect('/widows/conversion/check-details-info-complete');
        } else {
          res.redirect('/widows/conversion/check-details-info-missing');
        }
      });

module.exports = router;

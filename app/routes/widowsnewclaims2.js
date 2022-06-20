const express = require('express');
const router = express.Router()


router.post('/widows/iteration-2/task-details', (req, res) => {
  res.redirect('/widows/iteration-2/check-details-info-missing')
})
;

router.post('/widows/iteration-2/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'support-queue' ) {
      res.redirect('/widows/iteration-2/get-a-task');
    } else {
    res.redirect('/widows/iteration-2/');
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



// Scenario 1

router.post('/widows/scenario-1/task-details', (req, res) => {
  res.redirect('/widows/scenario-1/check-details-info-missing')
})
;

router.post('/widows/scenario-1/check-details-info-missing', function(req, res) {
    if ( req.body['decision'] === 'support-queue' ) {
      res.redirect('/widows/scenario-1/get-a-task');
    } else if  ( req.body['decision'] === 'more-info' ) {
      res.redirect('/widows/scenario-1/more-info-letter');
    } else if  ( req.body['decision'] === 'award' ) {
      res.redirect('/widows/scenario-1/nothing-to-inherit');
    } else {
    res.redirect('/widows/scenario-1/award-without-inheritance');
  }
  });

  router.post('/widows/scenario-1/nothing-to-inherit', (req, res) => {
    res.redirect('/widows/scenario-1/get-a-task-2')
  })
  ;


  // Scenario 2

  router.post('/widows/scenario-2/task-details', (req, res) => {
    res.redirect('/widows/scenario-2/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-2/check-details-info-missing', function(req, res) {
      if ( req.body['decision'] === 'support-queue' ) {
        res.redirect('/widows/scenario-2/get-a-task-2');
      } else if  ( req.body['decision'] === 'more-info' ) {
        res.redirect('/widows/scenario-2/more-info-letter');
      } else if  ( req.body['decision'] === 'award' ) {
        res.redirect('/widows/scenario-2/nothing-to-inherit');
      } else {
      res.redirect('/widows/scenario-2/award-without-inheritance');
    }
    });

    router.post('/widows/scenario-2/nothing-to-inherit', (req, res) => {
      res.redirect('/widows/scenario-2/get-a-task-2')
    })
    ;

    router.post('/widows/scenario-2/nino', (req, res) => {
      res.redirect('/widows/scenario-2/check-details-info-missing')
    })
    ;

    router.post('/widows/scenario-2/gender', (req, res) => {
      res.redirect('/widows/scenario-2/check-details-info-missing')
    })
    ;

    router.post('/widows/scenario-2/dom', (req, res) => {
      res.redirect('/widows/scenario-2/check-details-info-missing')
    })
    ;

    router.post('/widows/scenario-2/dod', (req, res) => {
      res.redirect('/widows/scenario-2/check-details-info-missing')
    })
    ;

    router.post('/widows/scenario-2/dob', (req, res) => {
      res.redirect('/widows/scenario-2/check-details-info-missing')
    })
    ;

    router.post('/widows/scenario-2/more-info-letter', (req, res) => {
      res.redirect('/widows/scenario-2/get-a-task-2')
    })
    ;

    router.post('/widows/scenario-2/nothing-to-inherit', (req, res) => {
      res.redirect('/widows/scenario-2/get-a-task-2')
    })
    ;

    router.post('/widows/scenario-2/award-without-inheritance', (req, res) => {
      res.redirect('/widows/scenario-2/get-a-task-2')
    })
    ;

//Scenario 3

router.post('/widows/scenario-3/task-details', (req, res) => {
  res.redirect('/widows/scenario-3/check-details-info-missing')
})
;

router.post('/widows/scenario-3/check-details-info-missing', function(req, res) {
    if ( req.body['decision-3'] === 'support-queue' ) {
      res.redirect('/widows/scenario-3/get-a-task-2');
    } else if  ( req.body['decision-3'] === 'more-info' ) {
      res.redirect('/widows/scenario-3/more-info-letter');
    } else if  ( req.body['decision-3'] === 'award' ) {
      res.redirect('/widows/scenario-3/nothing-to-inherit');
    } else {
    res.redirect('/widows/scenario-3/award-without-inheritance');
  }
  });

  router.post('/widows/scenario-3/nothing-to-inherit', (req, res) => {
    res.redirect('/widows/scenario-3/get-a-task-2')
  })
  ;

  router.post('/widows/scenario-3/nino', (req, res) => {
    res.redirect('/widows/scenario-3/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-3/gender', (req, res) => {
    res.redirect('/widows/scenario-3/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-3/dom', (req, res) => {
    res.redirect('/widows/scenario-3/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-3/dod', (req, res) => {
    res.redirect('/widows/scenario-3/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-3/dob', (req, res) => {
    res.redirect('/widows/scenario-3/check-details-info-missing')
  })
  ;

  router.post('/widows/scenario-3/more-info-letter', (req, res) => {
    res.redirect('/widows/scenario-3/get-a-task-2')
  })
  ;

  router.post('/widows/scenario-3/award-without-inheritance', (req, res) => {
    res.redirect('/widows/scenario-3/get-a-task-2')
  })
  ;

  // Scenario 4

  router.post('/widows/scenario-4/task-details', (req, res) => {
    res.redirect('/widows/scenario-4/inheritable')
  })
  ;

  router.post('/widows/scenario-4/inheritable', function(req, res) {
      if ( req.body['inheritable-amounts'] === 'yes' ) {
        res.redirect('/widows/scenario-4/inheritable-amounts');
      } else {
      res.redirect('/widows/scenario-4/nothing-to-inherit');
    }
    });

    router.post('/widows/scenario-4/nothing-to-inherit', (req, res) => {
      res.redirect('/widows/scenario-4/get-a-task-2')
    })
    ;

module.exports = router;

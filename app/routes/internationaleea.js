const express = require('express');
const router = express.Router()


// Iteration one

router.post('/international-task/eea-iteration-2/mixed-years-spain', function(req, res) {
  if ( req.body['mixedyearsspain'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-spain');
  } else {
    res.redirect('mixed-years');
  }
});

router.post('/international-task/eea-iteration-2/mixed-years-austria', function(req, res) {
  if ( req.body['mixedyearsaustria'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-austria');
  } else {
    res.redirect('mixed-years');
  }
});

router.post('/international-task/eea-iteration-2/foreign-insurance-request-spain', function(req, res) {
  if ( req.body['spaininsurance'] === 'Sent' ) {
    res.redirect('mixed-years');
  } else {res.redirect('mixed-years');
}
});


router.post('/international-task/eea-iteration-2/mixed-years-austria', function(req, res) {
  if ( req.body['mixedyearsaustria'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-austria');
      } else {    res.redirect('mixed-years');
    }
    });

// Scenario one

router.post('/international-task/testing/scenario-1/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/mixed-years-ireland')
})
;



router.post('/international-task/testing/scenario-1/mixed-years-ireland', function(req, res) {
  if ( req.body['mixedyearsireland'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-ireland');
  } else {
    res.redirect('confirmation');
  }
});


router.post('/international-task/testing/scenario-1/foreign-insurance-request-ireland', function(req, res) {
  if ( req.body['spaininsurance'] === 'Sent' ) {
    res.redirect('confirmation');
  } else {
    res.redirect('confirmation');
  }
});


router.post('/international-task/testing/scenario-1/confirmation', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/get-a-task-2')
})
;


// Scenario two

router.post('/international-task/testing/scenario-2/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-2/mixed-years')
})
;


router.post('/international-task/testing/scenario-2/mixed-years-norway', function(req, res) {
  if ( req.body['mixedyearsnorway'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-norway');
  } else {
    res.redirect('mixed-years');
  }
});


router.post('/international-task/testing/scenario-2/mixed-years-croatia', function(req, res) {
  if ( req.body['mixedyearscroatia'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-croatia');
  } else {
    res.redirect('mixed-years');
  }
});

router.post('/international-task/testing/scenario-2/mixed-years-switzerland', function(req, res) {
  if ( req.body['mixedyearsswitzerland'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-switzerland');
  } else {
    res.redirect('mixed-years');
  }
});

router.post('/international-task/testing/scenario-2/foreign-insurance-request-norway', function(req, res) {
  if ( req.body['norwayinsurance'] === 'Sent' ) {
    res.redirect('mixed-years');
  } else {res.redirect('mixed-years');
}
});

router.post('/international-task/testing/scenario-2/foreign-insurance-request-switzerland', function(req, res) {
  if ( req.body['switzerlandinsurance'] === 'Sent' ) {
    res.redirect('mixed-years');
  } else {res.redirect('mixed-years');
}
});

router.post('/international-task/testing/scenario-2/foreign-insurance-request-croatia', function(req, res) {
  if ( req.body['croatiainsurance'] === 'Sent' ) {
    res.redirect('mixed-years');
  } else {res.redirect('mixed-years');
}
});


router.post('/international-task/testing/scenario-2/mixed-years', (req, res) => {
  res.redirect('/international-task/testing/scenario-1/get-a-task-2')
})
;


// Scenario three

router.post('/international-task/testing/scenario-3/cfn-task', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/mixed-years-spain')
})
;

router.post('/international-task/testing/scenario-3/mixed-years-spain', function(req, res) {
  if ( req.body['mixedyearsspain'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-spain');
  } else {
    res.redirect('mixed-years-france');
  }
});

router.post('/international-task/testing/scenario-3/foreign-insurance-request-spain', function(req, res) {
  if ( req.body['spaininsurance'] === 'Sent' ) {
    res.redirect('mixed-years-france');
  } else {res.redirect('mixed-years-france');
}
});

router.post('/international-task/testing/scenario-3/mixed-years-france', function(req, res) {
  if ( req.body['mixedyearsfrance'] === 'Yes' ) {
    res.redirect('foreign-insurance-request-france');
  } else {
    res.redirect('confirmation');
  }
});

router.post('/international-task/testing/scenario-3/foreign-insurance-request-france', function(req, res) {
  if ( req.body['franceinsurance'] === 'Sent' ) {
    res.redirect('confirmation');
  } else {res.redirect('confirmation');
}
});

router.post('/international-task/testing/scenario-3/confirmation', (req, res) => {
  res.redirect('/international-task/testing/scenario-3/get-a-task-2')
})
;

  module.exports = router;

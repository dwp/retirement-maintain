"use strict";

var express = require('express');

var router = express.Router();
router.use(function (req, res, next) {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2));
  }

  next();
});
router.post('/telephone-new-claim/start-date/ur/find', function (req, res) {
  if (req.body['nino'] === 'XX 12 34 56') {
    res.redirect('/telephone-new-claim/start-date/ur/not-found');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/find-1');
  }
});
router.post('/telephone-new-claim/start-date/ur/find', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/find-1');
});
router.post('/telephone-new-claim/start-date/ur/dob-request', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/find');
});
router.post('/telephone-new-claim/start-date/ur/dob-evidence', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/address');
});
router.post('/telephone-new-claim/start-date/ur/complete', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/find');
});
router.post('/telephone-new-claim/start-date/ur/address', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/address-result');
});
router.post('/telephone-new-claim/start-date/ur/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/telephone-new-claim/start-date/ur/manual-address');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/bank');
  }
});
router.post('/telephone-new-claim/start-date/ur/manual-address', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/bank');
});
router.post('/telephone-new-claim/start-date/ur/bank', function (req, res) {
  if (req.body['sort-code'] === '823047') {
    res.redirect('/telephone-new-claim/start-date/ur/sp-date');
  } else if (req.body['sort-code'] === '164392') {
    res.redirect('/telephone-new-claim/start-date/ur/sp-date-post-spa');
  } else if (req.body['sort-code'] === '763098') {
    res.redirect('/telephone-new-claim/start-date/ur/sp-date-post-spa');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/sp-date');
  }
});
router.post('/telephone-new-claim/start-date/ur/sp-date-post-spa', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/claim-date-post-spa');
});
router.post('/telephone-new-claim/start-date/ur/claim-date-post-spa', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/prison');
});
router.post('/telephone-new-claim/start-date/ur/prison', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/contact');
}); // Do you want your State Pension from the earliest possible date? YES/NO

router.post('/telephone-new-claim/start-date/ur/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/contact');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/claim-date');
  }
});
router.post('/telephone-new-claim/start-date/ur/claim-date', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/contact');
});
router.post('/telephone-new-claim/start-date/ur/contact', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/alternative');
});
router.post('/telephone-new-claim/start-date/ur/alternative', function (req, res) {
  if (req.body['alternative'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/alternative2');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/marital-status');
  }
});
router.post('/telephone-new-claim/start-date/ur/alternative2', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/marital-status');
});
router.post('/telephone-new-claim/start-date/ur/marital-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/lived-worked');
});
router.post('/telephone-new-claim/start-date/ur/civilpartnership-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/lived-worked');
});
router.post('/telephone-new-claim/start-date/ur/widowed-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/lived-worked');
});
router.post('/telephone-new-claim/start-date/ur/divorced-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/lived-worked');
});
router.post('/telephone-new-claim/start-date/ur/dissolvedcp-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/lived-worked');
});
router.post('/telephone-new-claim/start-date/ur/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/country-1');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/ur/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/country-2');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/ur/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/country-3');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/ur/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/country-4');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/ur/country-4', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/check-answers');
});
router.post('/telephone-new-claim/start-date/ur/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/ur/worked-countries');
  } else {
    res.redirect('/telephone-new-claim/start-date/ur/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/ur/marital-status', function (req, res) {
  if (req.body['marital-status'] === 'married') {
    res.redirect('marital-details');
  } else if (req.body['marital-status'] === 'never') {
    res.redirect('lived-worked');
  } else if (req.body['marital-status'] === 'civil-partnership') {
    res.redirect('civilpartnership-details');
  } else if (req.body['marital-status'] === "widowed") {
    res.redirect('widowed-details');
  } else if (req.body['marital-status'] === "divorced") {
    res.redirect('divorced-details');
  } else if (req.body['marital-status'] === "dissolved") {
    res.redirect('dissolvedcp-details');
  }
});
router.post('/telephone-new-claim/start-date/ur/dob', function (req, res) {
  if (req.session.data["nino"] === "xx347612a") {
    res.redirect('dob-request');
  } else if (req.session.data["nino"] === "XX347612A") {
    res.redirect('dob-request');
  } else {
    res.redirect('address');
  }
});
router.post('/telephone-new-claim/start-date/ur/check-answers', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/declaration');
});
router.post('/telephone-new-claim/start-date/ur/declaration', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/complete');
});
router.post('/telephone-new-claim/start-date/ur/dob-evidence', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/ur/find');
});
module.exports = router;
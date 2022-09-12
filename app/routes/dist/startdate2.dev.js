"use strict";

var express = require('express');

var router = express.Router();
router.use(function (req, res, next) {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2));
  }

  next();
});
router.post('/telephone-new-claim/start-date/scenario1/find', function (req, res) {
  if (req.body['nino'] === 'XX 12 34 56') {
    res.redirect('/telephone-new-claim/start-date/scenario1/not-found');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/find-1');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/find', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/find-1');
});
router.post('/telephone-new-claim/start-date/scenario1/dob-request', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/find');
});
router.post('/telephone-new-claim/start-date/scenario1/dob-evidence', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/address');
});
router.post('/telephone-new-claim/start-date/scenario1/complete', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/find');
});
router.post('/telephone-new-claim/start-date/scenario1/address', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/address-result');
});
router.post('/telephone-new-claim/start-date/scenario1/address-result', function (req, res) {
  if (req.body['address-results'] === 'address-not-found') {
    res.redirect('/telephone-new-claim/start-date/scenario1/manual-address');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/bank');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/manual-address', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/bank');
});
router.post('/telephone-new-claim/start-date/scenario1/bank', function (req, res) {
  if (req.body['sort-code'] === '823047') {
    res.redirect('/telephone-new-claim/start-date/scenario1/sp-date');
  } else if (req.body['sort-code'] === '164392') {
    res.redirect('/telephone-new-claim/start-date/scenario1/claim-date-post-spa');
  } else if (req.body['sort-code'] === '763098') {
    res.redirect('/telephone-new-claim/start-date/scenario1/claim-date-post-spa');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/sp-date');
  }
}); // Do you want your State Pension from the earliest possible date? YES/NO

router.post('/telephone-new-claim/start-date/scenario1/sp-date', function (req, res) {
  if (req.body['sp-date'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/contact');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/claim-date');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/claim-date', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/contact');
});
router.post('/telephone-new-claim/start-date/scenario1/contact', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/alternative');
});
router.post('/telephone-new-claim/start-date/scenario1/alternative', function (req, res) {
  if (req.body['alternative'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/alternative2');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/marital-status');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/alternative2', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/marital-status');
});
router.post('/telephone-new-claim/start-date/scenario1/marital-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/lived-worked');
});
router.post('/telephone-new-claim/start-date/scenario1/civilpartnership-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/lived-worked');
});
router.post('/telephone-new-claim/start-date/scenario1/widowed-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/lived-worked');
});
router.post('/telephone-new-claim/start-date/scenario1/divorced-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/lived-worked');
});
router.post('/telephone-new-claim/start-date/scenario1/dissolvedcp-details', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/lived-worked');
});
router.post('/telephone-new-claim/start-date/scenario1/lived-worked', function (req, res) {
  if (req.body['lived-worked'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/country-1');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/country-1', function (req, res) {
  if (req.body['another-country-1'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/country-2');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/country-2', function (req, res) {
  if (req.body['another-country-2'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/country-3');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/country-3', function (req, res) {
  if (req.body['another-country-3'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/country-4');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/country-4', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
});
router.post('/telephone-new-claim/start-date/scenario1/worked', function (req, res) {
  if (req.body['worked-outside'] === 'yes') {
    res.redirect('/telephone-new-claim/start-date/scenario1/worked-countries');
  } else {
    res.redirect('/telephone-new-claim/start-date/scenario1/check-answers');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/marital-status', function (req, res) {
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
router.post('/telephone-new-claim/start-date/scenario1/dob', function (req, res) {
  if (req.session.data["nino"] === "xx347612a") {
    res.redirect('dob-request');
  } else if (req.session.data["nino"] === "XX347612A") {
    res.redirect('dob-request');
  } else {
    res.redirect('address');
  }
});
router.post('/telephone-new-claim/start-date/scenario1/check-answers', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/declaration');
});
router.post('/telephone-new-claim/start-date/scenario1/declaration', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/complete');
});
router.post('/telephone-new-claim/start-date/scenario1/dob-evidence', function (req, res) {
  res.redirect('/telephone-new-claim/start-date/scenario1/find');
});
module.exports = router;
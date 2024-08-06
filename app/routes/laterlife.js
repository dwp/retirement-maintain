const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/later-life/enquiries/stop-benefit', function (req, res) {
  if (req.body['stopbenefit'] === 'death') {
    res.redirect('death')
  } else if (req.body['stopbenefit'] === 'prison') {
    res.redirect('prison')
  } else if (req.body['stopbenefit'] === 'suspension') {
    res.redirect('suspend-benefit')
  } else {
    res.redirect('move-to-legacy')
  }
})



router.post('/later-life/enquiries/change-bank', function (req, res) {
  if (req.body['changebank'] === 'pc') {
    res.redirect('bank-details-pc')
  } else if (req.body['changebank'] === 'sp') {
    res.redirect('bank-details-sp-uk')
  } else if (req.body['changebank'] === 'both') {
    res.redirect('bank-details')
  } else {
    res.redirect('change-bank')
  }
})


router.post('/later-life/enquiries/bank-uk-overseas', function (req, res) {
  if (req.body['bankukoverseas'] === 'uk') {
    res.redirect('bank-details-sp-uk')
  } else {
    res.redirect('bank-details-sp-overseas')
  }
})


module.exports = router

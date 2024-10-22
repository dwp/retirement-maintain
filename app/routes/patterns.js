const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/patterns/agent-bank-account', function (req, res) {
  if (req.body['bank'] === 'uk') {
    res.redirect('agent-uk-bank-account')
  } else {
    res.redirect('agent-overseas-bank-account')
  }
})

router.post('/patterns/agent-address-results', function (req, res) {
  if (req.body['address'] === 'windsor') {
    res.redirect('record-personal-address-changed')
  } else {
    res.redirect('agent-manual-address')
  }
})

module.exports = router

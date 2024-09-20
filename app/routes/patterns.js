const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/patterns/agent-bank-account', function (req, res) {
  if (req.body['bank'] === 'uk') {
    res.redirect('agent-uk-bank-account')
  } else {
    res.redirect('agent-overseas-bank-account')
  }
})

module.exports = router

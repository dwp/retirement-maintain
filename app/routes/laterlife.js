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
    res.redirect('stop-benefit')
  }
})

module.exports = router

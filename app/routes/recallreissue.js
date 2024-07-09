const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})


// Recall payment link, checking agent definitely wants to recall the payment
router.post('/want-to-recall', function (req, res) {
  if (req.body['recall'] === 'yes') {
    res.redirect('recall-reissue-updates/recall')
  } else {
    res.redirect('recall-reissue-updates/payment-details1')
  }
})

// Checking agent has successfully recalled the payment in CPS
router.post('/successfully-recalled', function (req, res) {
  if (req.body['recalled'] === 'yes') {
    res.redirect('recall-reissue-updates/payment-recalled')
  } else {
    res.redirect('recall-reissue-updates/payment-recall-unsuccessful')
  }
})

// Reissue payment link, checking if agent needs to reissue as a faster payment
router.post('/reissue-as-faster', function (req, res) {
  if (req.body['reissue-faster'] === 'yes') {
    res.redirect('recall-reissue-updates/reissue-as-faster')
  } else {
    res.redirect('recall-reissue-updates/reissue-as-normal')
  }
})

module.exports = router
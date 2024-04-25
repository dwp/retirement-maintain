const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Reason for stopping SP
router.post('/death/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'deferral') {
    res.redirect('deferral')
  } else {
    res.redirect('death-date')
  }
})

// Date of death to DAP details
router.post('/death/death-date', (req, res) => {
  res.redirect('/death/dap-details')
})

// DAP details yes/no
router.post('/death/dap-details', function (req, res) {
  if (req.body['dap-details'] === 'yes') {
    res.redirect('dap-name')
  } else {
    res.redirect('overview-arrears')
  }
})

// DAP name to DAP number
router.post('/death/dap-name', (req, res) => {
  res.redirect('/death/dap-number')
})

// DAP number to DAP address
router.post('/death/dap-number', (req, res) => {
  res.redirect('/death/dap-address')
})

// Dap address, to find address results
router.post('/death/dap-address', (req, res) => {
  res.redirect('/death/dap-address-2')
})

// Dap address, to find address results
router.post('/death/dap-address-2', (req, res) => {
  res.redirect('/death/dap-bank')
})

// DAP bank details
router.post('/death/dap-bank', function (req, res) {
  if (req.body['dap-bank-details'] === 'yes') {
    res.redirect('dap-bank-details')
  } else {
    res.redirect('arrears-no-bank')
  }
})

//
router.post('/death/arrears-no-bank', (req, res) => {
  res.redirect('/death/br330')
})

//
router.post('/death/br330', (req, res) => {
  res.redirect('/overview-dead-bank')
})




// NOK

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

// Reason for stopping SP
router.post('/death/next-of-kin/stop-sp', function (req, res) {
  if (req.body['stop-sp'] === 'deferral') {
    res.redirect('next-of-kin/deferral')
  } else {
    res.redirect('next-of-kin/death-date')
  }
})

// Date of death to DAP details
router.post('/death/next-of-kin/next-of-kin/death-date', (req, res) => {
  res.redirect('/death/next-of-kin/dap-details')
})

// DAP details yes/no
router.post('/death/next-of-kin/dap-details', function (req, res) {
  if (req.body['dap-details'] === 'yes') {
    res.redirect('next-of-kin/dap-name')
  } else {
    res.redirect('next-of-kin/overview-arrears')
  }
})

// DAP name to DAP number
router.post('/death/next-of-kin/dap-name', (req, res) => {
  res.redirect('/death/next-of-kin/dap-number')
})

// DAP number to DAP address
router.post('/death/next-of-kin/dap-number', (req, res) => {
  res.redirect('/death/next-of-kin/dap-address')
})

// Dap address, to find address results
router.post('/death/next-of-kin/dap-address', (req, res) => {
  res.redirect('/death/next-of-kin/dap-address-2')
})

// Dap address, to find address results
router.post('/death/next-of-kin/dap-address-2', (req, res) => {
  res.redirect('/death/next-of-kin/dap-bank')
})

// DAP bank details
router.post('/death/next-of-kin/dap-bank', function (req, res) {
  if (req.body['dap-bank-details'] === 'yes') {
    res.redirect('next-of-kin/dap-bank-details')
  } else {
    res.redirect('next-of-kin/arrears-no-bank')
  }
})

//
router.post('/death/next-of-kin/arrears-no-bank', (req, res) => {
  res.redirect('/death/next-of-kin/br330')
})

//
router.post('/death/next-of-kin/br330', (req, res) => {
  res.redirect('/death/next-of-kin/overview-dead-bank')
})

module.exports = router

const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})



router.post('/fraud/attempted/iteration-1/fraud-date', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})
;

router.post('/fraud/attempted/iteration-1/fraud-method', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})
;

router.post('/fraud/attempted/iteration-1/fraud-details', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/record-fraud')
})
;


router.post('/fraud/attempted/iteration-1/record-fraud', (req, res) => {
  res.redirect('/fraud/attempted/iteration-1/personal-fraud')
})
;



  module.exports = router;

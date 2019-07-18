const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  ;
 
  router.post('/iteration10c/dap-name', function(req, res) {
    if ( req.body['is-payee'] === 'yes' ) {
      res.redirect('dap-address');
    } else {
      res.redirect('dap-address');
    }
  });


  router.post('/iteration10c/dap-address', function(req, res) {
    if ( req.body['address'] === 'yes' ) {
      res.redirect('dap-bank');
    } else {
      res.redirect('dap-address-2');
    }
  });

  router.post('iteration10c/dap-address-2', (req, res) => {
    res.redirect('iteration10c/dap-address-3')
  })
  ;
  
  router.post('iteration10c/dap-address-3', (req, res) => {
    res.redirect('iteration10c/dap-bank')
  })
  ;

  module.exports = router;
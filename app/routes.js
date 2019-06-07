const express = require('express')
const router = express.Router()

// copy the const name and the file path to new version
const newclaims = require('./routes/newclaims');
const newclaims2 = require('./routes/newclaims2');
const newclaims3 = require('./routes/newclaims3');
const bpviteration = require('./routes/bpviteration');
const bpviteration2 = require('./routes/bpviteration2');
const iteration1 = require('./routes/iteration1');
const iteration2 = require('./routes/iteration2');
const iteration3 = require('./routes/iteration3');
const iteration4 = require('./routes/iteration4');
const manualpayment = require('./routes/manualpayment');

//copy the router use and update the sprint version
router.use(newclaims);
router.use(newclaims2);
router.use(newclaims3);
router.use(bpviteration);
router.use(bpviteration2);
router.use(iteration1);
router.use(iteration2);
router.use(iteration3);
router.use(iteration4);
router.use(manualpayment);

module.exports = router;
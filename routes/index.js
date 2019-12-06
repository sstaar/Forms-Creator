const router = require('express').Router();

const forms = require('./forms');
const users = require('./users');

router.use('/form', forms);

router.use('/user', users);

module.exports = router
const router = require('express').Router();
const postUser = require('../controllers/users/postUser');

router.post('', postUser);

router.post('/login', require('../controllers/users/loginUser'));

module.exports = router;
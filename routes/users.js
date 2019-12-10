const router = require('express').Router();
const postUser = require('../controllers/users/postUser');
const validateToken = require('../middlewares/validateToken');

router.post('', postUser);

router.post('/login', require('../controllers/users/loginUser'));

router.delete('/logout', validateToken, require('../controllers/users/deleteUserConnection'));

router.get('/forms', validateToken, require('../controllers/users/getUserForms'));

router.get('/forms/:name', validateToken, require('../controllers/users/getUserFormSubs'));

router.delete('/forms/:name', validateToken, require('../controllers/users/deleteUserForm'));

module.exports = router;
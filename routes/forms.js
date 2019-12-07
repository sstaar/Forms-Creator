const router = require('express').Router();
const postForm = require('../controllers/forms/postForm');
const getFormStructure = require('../controllers/forms/getFormStructure');
const putSubmission = require('../controllers/forms/putSubmission');
const validateToken = require('../middlewares/validateToken');

router.post('', validateToken, postForm);

router.get('/:name', getFormStructure);

router.put('/:name', putSubmission);

module.exports = router;
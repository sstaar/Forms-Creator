const router = require('express').Router();
const postForm = require('../controllers/forms/postForm');
const getFormStructure = require('../controllers/forms/getFormStructure');
const putSubmission = require('../controllers/forms/putSubmission');

router.post('', postForm);

router.get('/:name', getFormStructure);

router.put('/:name', putSubmission);

module.exports = router;
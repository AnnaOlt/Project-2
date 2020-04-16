const express = require("express");

const router = express.Router();

const userController = require('./users');
const questionController = require('./questions');
const answerController = require('./answers');
// const htmlController = require('./html');

router.use('/users', userController);
router.use('/questions', questionController);
router.use('/answers', answerController);
// router.use('/', htmlController);

module.exports = router;
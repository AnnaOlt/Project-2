const express = require("express");

const router = express.Router();

const userController = require('./users');
const questionController = require('./questions');
// const htmlController = require('./html');

router.use('/api/users', userController);
router.use('/api/questions', questionController);
// router.use('/', htmlController);

module.exports = router;
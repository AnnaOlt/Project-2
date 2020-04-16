const express = require("express");

const router = express.Router();

const db = require("../models");

router.post('/', async function (req, res) {

  const { choice, questionId } = req.body;

  const boolChoice = choice !== "left";

  const answer = await db.answer.create({ 
    choice: boolChoice, 
    questionId });

  res.json(answer);
  // }
});

module.exports = router;
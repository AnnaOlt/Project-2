const express = require("express");

const router = express.Router();

const db = require("../models");

router.post('/', async function (req, res) {

  const { choice, questionId } = req.body;

  const boolChoice = choice !== "left" && choice === "right";

  const answer = await db.answer.create({ 
    choice: boolChoice, 
    questionId });

  answer.choice = answer.choice ? "right" : "left";

  res.json(answer);
  // }
});

module.exports = router;
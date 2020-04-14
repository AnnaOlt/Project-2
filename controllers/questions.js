const express = require("express");

const router = express.Router();

const db = require("../models");

router.get('/', async function (req, res) {

  let questions = await db.question.findAll({
    include: {
      model: db.answer,
      required: false,
      attributes: []
    },
    attributes: [
      'title',
      'left_choice',
      'right_choice',
      [
        db.sequelize.fn('SUM', db.sequelize.col('choice')), 'left_answer_count'
      ],
      [
        db.sequelize.fn('COUNT', 'answer.id'), 'answer_total'
      ],
      [
        db.sequelize.fn('SUM', db.sequelize.literal('NOT choice')), 'right_answer_count'
      ]
    ],
    group: ['question.id'],
  });

  // console.log(answers);
  res.json(questions);
});

router.get('/:id', async function (req, res) {

  const { id } = req.params;
  let questions = await db.question.findAll({
    where: {
      id
    },
    include: {
      model: db.answer,
      required: false,
      attributes: []
    },
    attributes: [
      'title',
      'left_choice',
      'right_choice',
      [
        db.sequelize.fn('SUM', db.sequelize.col('choice')), 'left_answer_count'
      ],
      [
        db.sequelize.fn('COUNT', 'answer.id'), 'answer_total'
      ],
      [
        db.sequelize.fn('SUM', db.sequelize.literal('NOT choice')), 'right_answer_count'
      ]
    ],
    group: ['question.id'],
  });

  // console.log(answers);
  res.json(questions);
});



module.exports = router;

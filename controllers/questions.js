const express = require("express");

const router = express.Router();

const db = require("../models");

const questionAttributes = [
  'title',
  'left_choice',
  'right_choice',
  [
    db.sequelize.cast(db.sequelize.fn('SUM', { choice: false }), 'UNSIGNED'), 'left_answer_count'
  ],
  [
    db.sequelize.cast(db.sequelize.fn('SUM', { choice: true }), 'UNSIGNED'), 'right_answer_count'
  ],
  [
    db.sequelize.fn('COUNT', db.sequelize.col('answers.id')), 'answer_total'
  ],
];

router.get('/', async function (req, res) {

  let questions = await db.question.findAll({
    include: {
      model: db.answer,
      required: false,
      attributes: []
    },
    attributes: questionAttributes,
    group: ['question.id'],
  });

  res.json(questions);
});

router.get('/:id', async function (req, res) {

  const { id } = req.params;
  

  if (id === 'random') {
    let count = await db.question.count();
    let randomIndex = Math.floor(Math.random() * count + 1);
    let question = await db.question.findOne({
      where: {
        id: randomIndex
      },
      include: {
        model: db.answer,
        required: false,
        attributes: []
      },
      attributes: questionAttributes,
      group: ['question.id']
    });
  
    res.json(question)
  } else {
    let question = await db.question.findOne({
      where: {
        id
      },
      include: {
        model: db.answer,
        required: false,
        attributes: []
      },
      attributes: questionAttributes,
      group: ['question.id'],
    });
  
    if (question) {
      res.json(question);
    } else {
      res.status(404).send({ error: 'Question not found!' })
    }
  }
});

// create new question
router.post('/', async function (req, res) {

  const { title, left_choice, right_choice } = req.body;

  // if (!req.user) {
  //   res.status(401).send({ error: 'Unauthorized!'});
  // } else {
  //   const { user: { id: userId } } = req;

  const [question, created] = await db.question.findOrCreate({
    where: { title, left_choice, right_choice },
    defaults: { title, left_choice, right_choice },
  });

  res.json({ question, created });
  // }
});

// update existing question
router.put('/', async function (req, res) {

  const { id, title, left_choice, right_choice } = req.body;

  // if (!req.user) {
  //   res.status(401).send({ error: 'Unauthorized!'});
  // }

  if (!id) {
    res.status(400).send({ error: 'Missing Question Id!' });
  } else {

    try {
      const [rows_updated] = await db.question.update(
        {
          // just a little handling for when any of these are blank
          // https://dev.to/jfet97/the-shortest-way-to-conditional-insert-properties-into-an-object-literal-4ag7
          ...title && { title },
          ...left_choice && { left_choice },
          ...right_choice && { right_choice }
        }, {
        where: {
          id
        },
        limit: 1
      });

      res.json({ rows_updated });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
});

module.exports = router;
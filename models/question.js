module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("question", {
    left: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    right: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Question.associate = function(models) {
    models.question.hasMany(models.answer, {
      onDelete: "cascade"
    });
  }

  return Question;
}

// INSERT INTO questions (left, right) VALUES ('Fight a duck sized horse', 'Fight 100 horse horse sized ducks')
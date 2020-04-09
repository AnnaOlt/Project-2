module.exports = function(sequelize, DataTypes) {
  const Answer = sequelize.define("answer", {
    choice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  Answer.associate = function (models) {
    console.log(models)
    models.answer.belongsTo(models.question, {
      onDelete: 'CASCADE',
      foriegnKey: {
        allowNull: false
      }
    });
  }

  return Answer;
}

// INSERT INTO answers ()
module.exports = function(sequelize, DataTypes) {
  const answer = sequelize.define("answer", {
    choice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  answer.associate = function (models) {
    models.answer.belongsTo(models.question, {
      onDelete: 'CASCADE',
      foriegnKey: {
        allowNull: false
      }
    });
  }

  return answer;
}

// INSERT INTO answers ()
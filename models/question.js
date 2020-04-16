module.exports = function(sequelize, DataTypes) {
  const question = sequelize.define("question", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    left_choice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    right_choice: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  question.associate = function(models) {
    models.question.hasMany(models.answer, {
      onDelete: 'CASCADE'
    });
    // models.question.belongsTo(models.user, {
    //   onDelete: 'CASCADE',
    //   foriegnKey: {
    //     allowNull: false
    //   }
    // });
  }

  return question;
}
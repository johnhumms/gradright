const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Students extends Model {}

Students.init(
  {
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    school_name: {
      type: DataTypes.STRING,
    },
    current_grade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    math_credits: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_math_credits: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    has_fine_arts_credits: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Students',
  }
);

module.exports = Students;
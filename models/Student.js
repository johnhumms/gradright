const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    school_name: {
      type: DataTypes.STRING,
    },
    current_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    current_math_credits: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    required_math_credits: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    has_math_credits: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Student',
  }
);

module.exports = Student;
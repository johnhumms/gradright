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
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    has_math_credits: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'district',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'student',
  }
);

module.exports = Student;
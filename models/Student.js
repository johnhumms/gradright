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
    current_english_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    current_science_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    current_social_studies_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    current_pe_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    current_health_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    current_elective_credits: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'profile.png',
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

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class District extends Model{}

District.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    district_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    math_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    english_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    science_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    socialStudies_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    pe_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    health_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

    elective_credit_to_graduate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'district',
  }
);

module.exports = District;
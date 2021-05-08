const sequelize = require('../config/connection');
const { Student, District, User } = require('../models');

const districtData = require('./districtData.json');
const studentData = require('./studentData.json');
const userData = require('./userData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await District.bulkCreate(districtData, {
    individualHooks: true,
    returning: true,
  });

  await Student.bulkCreate(studentData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
const sequelize = require('../config/connection');
const { Student, District } = require('../models');

const districtData = require('./districtData.json');
const studentData = require('./studentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const district = await District.bulkCreate(districtData, {
    individualHooks: true,
    returning: true,
  });

  for (const student of studentData) {
    await Student.create({
      ...student,
      district_id: district[Math.floor(Math.random() * district.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
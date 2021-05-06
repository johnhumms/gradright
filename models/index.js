const District = require('./District');
const Student = require('./Student');

District.hasMany(Student, {
  foreignKey: 'district_id',
  onDelete: 'CASCADE'
});

Student.belongsTo(District, {
  foreignKey: 'district_id'
});

module.exports = { District, Student };
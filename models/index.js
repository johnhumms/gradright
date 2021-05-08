const District = require('./District');
const Student = require('./Student');
const User = require('./User');

District.hasMany(Student, {
  foreignKey: 'district_id',
  onDelete: 'CASCADE'
});

Student.belongsTo(District, {
  foreignKey: 'district_id'
});

module.exports = { District, Student, User };
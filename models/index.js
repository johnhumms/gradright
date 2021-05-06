const Districts = require('./Districts');
const Students = require('./Students');

Districts.hasMany(Students, {
  foreignKey: 'district_id',
  onDelete: 'CASCADE'
});

Students.belongsTo(Districts, {
  foreignKey: 'district_id'
});

module.exports = { Districts, Students };
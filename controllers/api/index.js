const router = require('express').Router();
const userRoutes = require('./userRoutes');
const districtRoutes = require('./districtRoutes');
const studentRoutes = require('./studentRoutes')

router.use('/user', userRoutes);
router.use('/district', districtRoutes);
router.use('/student', studentRoutes);

module.exports = router;

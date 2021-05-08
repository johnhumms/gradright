const router = require('express').Router();
const userRoutes = require('./userRoutes');
const districtRoutes = require('./districtRoutes')

router.use('/user', userRoutes);
router.use('/district', districtRoutes);

module.exports = router;

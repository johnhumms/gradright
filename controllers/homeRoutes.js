const router = require('express').Router();
const { User, District, Student } = require('../models');
const sequelize = require("../config/connection");
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  User.findAll({})
    .then((userData) => {
      // Serialize data so the template can read it
      const users = userData.map((user) => user.get({ plain: true }));

      // Pass serialized data and session flag into template
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

// gets all students
router.get('/student', withAuth, (req, res) => {
  Student.findAll({ include: [District] })
    .then((studentData) => {
      const students = studentData.map((student) => student.get({ plain: true }));
      
      res.render('student', {
        students,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

// gets individual student
router.get('/student/:id', withAuth, (req, res) => {
  Student.findByPk(req.params.id, { include: [District] })
    .then((studentData) => {
      const student = studentData.get({ plain: true });
      
      res.render('student-profile', {
        student,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});


// to display in drop down to show all districts
router.get('/district', (req, res) => {
  District.findAll({})
    .then((districtData) => {
      const districts = districtData.map((district) => district.get({ plain: true }));

      res.render('district', {
        districts,
        show_district: false,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

// gets individual district
router.get('/district/:id', withAuth, (req, res) => {
  console.log('WE hit hte district id route!!!!!!')
  District.findByPk(req.params.id)
    .then((districtData) => {
      const district = districtData.get({ plain: true });

          res.render('district', {
            district,
            show_district: true,
            logged_in: req.session.logged_in
          })

    })
    .catch((err) => { res.status(500).json(err) })
});

// to display for drop down to add student
router.get('/add-student', (req, res) => {
  District.findAll({})
    .then((districtData) => {
      const districts = districtData.map((district) => district.get({ plain: true }));

      res.render('add-student', {
        districts: districts,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

// gets individual student to edit the student profile
router.get('/edit-student/:id', withAuth, (req, res) => {
  Student.findByPk(req.params.id, { include: [District] })
    .then((studentData) => {
      const student = studentData.get({ plain: true });

      District.findAll({})
        .then((districtData) => {
          const districts = districtData.map((district) => district.get({ plain: true }));

          res.render('edit-student', {
            districts,
            student,
            logged_in: req.session.logged_in
          })
        })
        .catch((err) => { res.status(500).json(err) })

    })
    .catch((err) => { res.status(500).json(err) })
});

// gets individual district to edit the district profile
router.get('/edit-district/:id', withAuth, (req, res) => {
  District.findByPk(req.params.id)
    .then((districtData) => {
      const district = districtData.get({ plain: true });

      res.render('edit-district', {
        district,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

// to render the add-student page
// LIKE WITH THE HOMEPAGE, I DON'T NEED THIS INFO, SO IS THERE A WAY FOR ME TO RENDER THE PAGE WITHOUT DOING A ROUTE?
router.get('/add-district', (req, res) => {
  District.findAll({})
    .then((districtData) => {
      const districts = districtData.map((district) => district.get({ plain: true }));

      res.render('add-district', {
        districts: districts,
        logged_in: req.session.logged_in
      })
    })
    .catch((err) => { res.status(500).json(err) })
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

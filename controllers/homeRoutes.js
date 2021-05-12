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
      .catch ((err) => {res.status(500).json(err)})
  });

// gets all students
router.get('/student', (req, res) => {
  Student.findAll({include:[District]})
    .then((studentData) => {
        const students = studentData.map((student) => student.get({ plain: true }));
        res.render('student', { 
            students, 
            logged_in: req.session.logged_in 
        })
    })
    .catch ((err) => {res.status(500).json(err)})
});

// gets individual student
router.get('/student/:id', (req, res) => {
    Student.findByPk(req.params.id, {include:[District]})
      .then((studentData) => {
          const student = studentData.get({ plain: true });
          res.render('student-profile', { 
              student, 
              logged_in: req.session.logged_in 
          })
      })
      .catch ((err) => {res.status(500).json(err)})
  });

router.get('/district', (req, res) => {
    District.findAll({
      })
      .then((districtData) => {
          const districts = districtData.map((district) => district.get({ plain: true }));
  

          res.render('district', { 
              districts, 
              logged_in: req.session.logged_in 
          })
      })
      .catch ((err) => {res.status(500).json(err)})
  });



// router.get('/student/:id', async (req, res) => {
//   try {
//     const studentData = await Student.findByPk(req.params.id, {
//       include: [District],
//     });

//     const student = studentData.get({ plain: true });

//     res.render('student', {
//       student,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;

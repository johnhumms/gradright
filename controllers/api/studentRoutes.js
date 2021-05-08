const router = require("express").Router();
const { District, Student } = require("../../models");
// const withAuth = require(../../utils/auth")

// gets ALL students
router.get('/', async (req, res) => {
    try {
      const studentData = await Student.findAll({
          raw: true
      });

    res.json(studentData);
  } catch (err) {
      console.log(err);
    res.status(500).json(err);
    
  }
});

// get an individual student
router.get('/:id', async (req, res) => {
    Student.findByPk(req.params.id, {
        include: [District]
    })
    .then((studentData) => {
        if (!req.params.id) {
            res.status(404).json({ message: 'No student found with that id!' });
            return;
          }
        res.json(studentData)
    })
    .catch ((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

// get students by district (HOW TO DIFFERENTIATE THE IDS)
// router.get('/:district_id', async (req, res) => {
//     Student.findAll(req.params.district_id, {
//         include: [District]
//     })
//     .then((studentData) => {
//         console.log(req.params);
//         if (!req.params.id) {
//             res.status(404).json({ message: 'No student found with that district!' });
//             return;
//           }
//         res.json(studentData)
//     })
//     .catch ((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     })
// });

router.post('/', async (req, res) => {
    try {
      const newStudent = await Student.create({
        ...req.body,
        // user_id: req.session.user_id,
      });
  
      res.status(200).json(newStudent);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
router.delete('/:id', async (req, res) => {
try {
    const studentData = await Student.destroy({
    where: {
        id: req.params.id,
        // user_id: req.session.user_id,
    },
    });

    if (!studentData) {
    res.status(404).json({ message: 'No Student found with this id!' });
    return;
    }

    res.status(200).json(studentData);
} catch (err) {
    res.status(500).json(err);
}
});

  module.exports = router;
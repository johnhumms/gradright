const router = require("express").Router();
const { District, Student } = require("../../models");
const withAuth = require("../../utils/auth");

// gets ALL students
router.get('/', withAuth, (req, res) => {
    Student.findAll({})
    .then((studentData) => res.json(studentData))
    .catch ((err) => {
      console.log(err);
        res.status(500).json(err);
    })
});

// get an individual student
router.get('/:id', withAuth, (req, res) => {
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



// get students by district DOES NOT WORK
router.get('/district/:district_id', (req, res) => {
    Student.findAll({
        where: {
            district_id: req.params.district_id
        },
        include: [District]
    })
    .then((studentData) => {
        console.log(req.params);
        if (!req.params.id) {
            res.status(404).json({ message: 'No student found with that district!' });
            return;
          }
        res.json(studentData)
    })
    .catch ((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});




router.post('/', withAuth, async (req, res) => {
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

// update student
router.put('/:id', withAuth, (req, res) => {
    Student.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
      .then((studentData) => {
        if (!req.params.id) {
          res.status(404).json({ message: 'No student found with that id!' });
          return;
        }
        res.json(studentData)
      })
      .catch ((err) => res.status(400).json(err))
  });

// delete student
router.delete('/:id', withAuth, async (req, res) => {
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
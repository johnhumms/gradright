const router = require("express").Router();
const { District, Student } = require("../../models");
const withAuth = require("../../utils/auth");

// get students by district 
// DOES NOT WORK
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

// creates new student
router.post('/', withAuth, async (req, res) => {
    try {
      const newStudent = await Student.create({
        ...req.body,
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
    },
    });

    if (!studentData) {
    res.status(404).json({ message: 'No Student found with this id!' });
    return;
    }
    console.log("DELETE API STUDENT")
    res.status(200).json(studentData);
} catch (err) {
    res.status(500).json(err);
}
const nodemailer = require("nodemailer");
async function main() {
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: 'gradrightadmn@gmail.com',
      pass: 'gradright1!',
  },
  });

  // send mail with defined transport object
let info = await transporter.sendMail({
  from: '"GradRight" <gradrightadmn@gmail.com>', // sender address
  to: "gradrightadmn@gmail.com, kwjun90@gmail.com", // list of receivers
  subject: "GradRight - STUDENT DELETED", // Subject line
  text: "STUDENT DELETE", // plain text body
  html: "<b>A Student was Deleted from the database</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

});

  module.exports = router;
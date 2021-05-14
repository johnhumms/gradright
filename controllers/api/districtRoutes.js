const router = require("express").Router();
const { District, Student } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, (req, res) => {
    District.findAll({})
    .then((districtData) => {
      const district = districtData.map((district) => district.get({ plain: true }));
      res.render(district);
    })
    .catch ((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

// get an individual district /api/districy/:id
router.get('/:id', withAuth, (req, res) => {
  District.findByPk(req.params.id, {})
  .then((districtData) => {
    const district = districtData.get({ plain: true});
      if (!req.params.id) {
          res.status(404).json({ message: 'No district found with that id!' });
          return;
        }

      res.render('district-requirements', {
        district,
        logged_in: req.session.logged_in
      })
  })
  .catch ((err) => {
    console.log(err);
    res.status(500).json(err);
  })
});


// add new district
router.post('/', withAuth, async (req, res) => {
    try {
      const newDistrict = await District.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newDistrict);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
// update district
router.put('/:id', withAuth, (req, res) => {
  District.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    .then((districtData) => {
      if (!req.params.id) {
        res.status(404).json({ message: 'No district found with that id!' });
        return;
      }
      res.json(districtData)
    })
    .catch ((err) => res.status(400).json(err))
});

router.delete('/:id', withAuth, async (req, res) => {
try {
    const districtData = await District.destroy({
    where: {
        id: req.params.id,
    },
    });

    if (!districtData) {
    res.status(404).json({ message: 'No District found with this id!' });
    return;
    }

    res.status(200).json(districtData);
} catch (err) {
    res.status(500).json(err);
}
});

  module.exports = router;
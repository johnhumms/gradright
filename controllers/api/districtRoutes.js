const router = require("express").Router();
const { District, Student } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/', withAuth, async (req, res) => {
    try {
      const districtData = await District.findAll({
          raw: true
        // include: [
        //   {
        //     model: District,
        //     attributes: ['district_name'],
        //   },
        // ],
      });

      //const District = districtData.map((district) => district.get({ plain: true }));

    res.json(districtData);
  } catch (err) {
      console.log(err);
    res.status(500).json(err);
    
  }
});

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

  
router.delete('/:id', withAuth, async (req, res) => {
try {
    const districtData = await District.destroy({
    where: {
        id: req.params.id,
        user_id: req.session.user_id,
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
const router = require('express').Router();
let Classes = require('../models/classes.model');

router.route('/').get((req, res) => {
  Classes.find()
    .then(classes => res.json(classes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const className = req.body.className;
  const teacherName = req.body.teacherName;

  const newClasses = new Classes({
    className,
    teacherName,
  });

  newClasses.save()
  .then(() => res.json('New Class added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
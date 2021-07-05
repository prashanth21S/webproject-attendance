const router = require('express').Router();
let Attendance = require('../models/attendance.model');

router.route('/').get((req, res) => {
  Attendance.find()
    .then(attendance => res.json(attendance))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const usn = req.body.usn;
  const className = req.body.className;
  const present =Boolean(req.body.present);

  const newAttendance = new Attendance({
    usn,
    className,
    present,
  });
  newAttendance.save()
    .then(() => res.json('Addendance of student added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
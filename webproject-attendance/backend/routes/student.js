const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
  Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const studname = req.body.studname;
    const semester = Number(req.body.semester);
    const section =req.body.section;
    const usn = req.body.usn
  
    const newStudent = new Student({
        studname,
        semester,
        section,
        usn,
    });
    newStudent.save()
      .then(() => res.json('New student added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studname: { type: String, required: true },
  semester: { type: Number, required: true },
  section: { type: String, required: true },
  usn: { type: String, required: true ,unique: true},
});

const Student = mongoose.model('student', studentSchema);

module.exports = Student;
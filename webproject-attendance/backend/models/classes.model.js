const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
  className: { type: String,required: true,unique: true,trim: true, minlength: 3},
  teacherName:{ type: String, required: true }, 
});

const Classes = mongoose.model('classes', classSchema);

module.exports = Classes;
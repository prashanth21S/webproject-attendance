const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    usn: { type: String, required: true},
    className: { type: String,required: true,trim: true, minlength: 3, unique: true},
    present:{type:Boolean,required:true},
});

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;
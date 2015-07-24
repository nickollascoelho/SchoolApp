var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
    name  : String,
    height: Number,
    performanceGrade: Number
});

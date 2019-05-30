mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        validator: function(v) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        }
    },
    name: String,
    address: {
        street: String,
        city: String,
        zipcode: String
    }
});
  
const Student = mongoose.model('Student', studentSchema);
  
module.exports = Student;
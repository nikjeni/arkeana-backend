const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   firstName: { type: String },
   lastName: { type: String },
   phoneNo: { type: String },
   email: { type: String },
});

module.exports = mongoose.model('userDetails', userSchema);
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: Boolean, default: false },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  basePay: { type: Number }, 
  loyaltyBonusPerYear: { type: Number }, 
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
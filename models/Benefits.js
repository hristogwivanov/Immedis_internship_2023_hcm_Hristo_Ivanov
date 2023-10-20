const mongoose = require('mongoose');

const benefitsSchema = new mongoose.Schema({
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  healthInsurance: {
    type: String,
  },
  retirementPlan: {
    type: String,
  },
  vacationDays: {
    type: Number,
  },
  otherBenefits: {
    type: String,
  },
});

const Benefits = mongoose.model('Benefits', benefitsSchema);

module.exports = Benefits;
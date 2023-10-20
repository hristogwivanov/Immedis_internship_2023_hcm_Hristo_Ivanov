const mongoose = require('mongoose');

const appraisalSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  performanceRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, 
  },
  comments: { type: String },
});

const Appraisal = mongoose.model('Appraisal', appraisalSchema);

module.exports = Appraisal;
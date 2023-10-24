const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;
const mongoose = rquire('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role; 
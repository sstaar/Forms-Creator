var mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const inputSchema = mongoose.Schema({
    name: { type: String, required: true, default: uuidv4() },
    type: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String },
    required: { type: Boolean, required: true, default: false },
});

const formSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    user: mongoose.Schema.ObjectId,
    structure: [inputSchema],
    submissions: []
});

// sub1 = {
//     mail:value,
//     date:'sss'
// }

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

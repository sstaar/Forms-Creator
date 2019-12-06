const validators = require('./validators');

const validateInput = (value, inputSchema) => {
    if (inputSchema.required === false && !value)
        return null;
    else if (inputSchema.required === true && !value)
        return `${inputSchema.label} is required.`;
    else if (inputSchema.type === 'text' && validators.validString(value) === false)
        return `${inputSchema.label} must be a valid Text.`;
    else if (inputSchema.type === 'mail' && validators.validMail(value) === false)
        return `${inputSchema.label} must be a valid E-Mail.`;
    return null;
}

const validateForm = (formSchema, data) => {
    return new Promise((resolve, reject) => {
        let errors = {};
        let valids = {};
        formSchema.forEach(inputSchema => {
            value = data[inputSchema.name];
            let error = validateInput(value, inputSchema);
            if (error !== null)
                errors[inputSchema.name] = error;
            else
                valids[inputSchema.name] = value;
        });
        if (Object.keys(errors).length > 0)
            return reject({ customErrors: errors });
        return resolve(valids);
    })
}

module.exports = validateForm;

// schema = [
//     input1: {
//         name: { type: String, required: true, unique: true },
//         type: { type: String, required: true },
//         label: { type: String, required: true },
//         description: { type: String },
//         required: { type: Boolean, required: true },
//     },
//     input2: {
//         name: { type: String, required: true, unique: true },
//         type: { type: String, required: true },
//         label: { type: String, required: true },
//         description: { type: String },
//         required: { type: Boolean, required: true },
//     },
//      ...
// ]


// data = {
//     inputName1: val,
//     inputName2: val,
//     ...
// }
const sv = require('../../helpers/formValidators/schemaValidator');
const Form = require('../../models/Form');

module.exports = async (request, response) => {

    const submission = {
        formData: request.body.formData,
        name: request.params.name
    };

    try {
        let form = await Form.findOne({ name: submission.name });
        let sub = await sv(form.structure, submission.formData);
        form.submissions.push({ ...sub, date: Date.now() });
        await form.save();
        return response.json(form);
    } catch (error) {
        console.log(error)
        if (error.customErrors)
            return response.status(200).json({ errors: error.customErrors });
        return response.status(500).json({ message: "Internal server error." });
    }
};
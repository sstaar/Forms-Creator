const formServices = require('../../services/forms');
const sv = require('../../helpers/formValidators/schemaValidator');

module.exports = async (request, response) => {

    const submission = {
        formData: request.body.formData,
        name: request.params.name
    };

    try {
        let form = await formServices.getFormByName(submission.name);
        let sub = await sv(form.structure, submission.formData);
        console.log(sub);
        form = await formServices.addSubmissionToForm(form, sub);
        return response.json(form);
    } catch (error) {
        console.log(error)
        if (error.customErrors)
            return response.status(200).json({ errors: error.customErrors });
        return response.status(500).json({ message: "Internal server error." });
    }
};
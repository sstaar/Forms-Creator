const Form = require('../models/Form');

const createForm = async (formName, formStructure) => {
    const form = await new Form({ name: formName, structure: formStructure });
    form.save();
    return form;
};

const formStructure = async (formName) => {
    const form = await Form.find({ name: formName });
    if (form.length === 0)
        return null;
    return form[0].structure;
};

const getFormByName = async (formName) => {
    let form = await Form.find({ name: formName });
    if (form.length === 0)
        return null;
    return form[0];
}

const addSubmissionToForm = async (form, submission) => {
    form.submissions.push({ ...submission, date: Date.now() });
    await form.save();
    return form;
}

module.exports = {
    createForm,
    formStructure,
    getFormByName,
    addSubmissionToForm,
}
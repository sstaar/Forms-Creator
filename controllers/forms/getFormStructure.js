const Form = require('../../models/Form');

module.exports = async (request, response) => {
    const getInfo = {
        name: request.params.name,
    }

    try {
        const form = await Form.findOne({ name: getInfo.name });
        if (!form)
            return response.status(404).json({ status: 404, error: 'Not found.' });
        const formStructure = form.structure;
        return response.json(formStructure);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
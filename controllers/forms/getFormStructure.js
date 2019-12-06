const formServices = require('../../services/forms');

module.exports = async (request, response) => {
    const getInfo = {
        name: request.params.name,
    }

    try {
        const formStructure = await formServices.formStructure(getInfo.name);
        if (!formStructure)
            return response.status(404).json({ status: 404, error: 'Not found.' });
        return response.json(formStructure);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
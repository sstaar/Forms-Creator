const formServices = require('../../services/forms');

module.exports = async (request, response) => {
    const postInfo = {
        structure: request.body.structure,
        name: request.body.name,
    }

    try {
        const form = await formServices.createForm(postInfo.name, postInfo.structure);
        return response.json(form);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
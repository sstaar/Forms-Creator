const formServices = require('../../services/forms');
const Form = require('../../modules/Form');

module.exports = async (request, response) => {
    const postInfo = {
        structure: request.body.structure,
        name: request.body.name,
    }

    try {
        const form = new Form({ name: postInfo.name, structure: postInfo.structure, user: request.user });
        await form.save();
        return response.json(form);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
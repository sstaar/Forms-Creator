const Form = require('../../models/Form');

module.exports = async (request, response) => {
    try {
        let form = await Form.findOne({ name: request.params.name });
        if (form.user != request.user)
            return response.status(400).json({ message: 'Bad request' });
        let deletion = await Form.deleteOne({ name: request.params.name });
        return response.json({ message: "Form deleted" });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
const Form = require('../../modules/Form');

module.exports = async (request, response) => {
    try {
        let forms = await Form.find({ user: request.user });
        return response.json(forms);
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
const Form = require('../../modules/Form');

module.exports = async (request, response) => {
    try {
        let form = await Form.findOne({ name: request.params.name });
        if (!form)
            return response.status(404).json({ message: 'Not found' });
        if (form.user != request.user)
            return response.status(400).json({ message: 'Bad request' });
        return response.json({
            structure: form.structure,
            subs: form.submissions
        });
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Internal server error." });
    }
};
const Form = require('../../modules/Form');
const Joi = require('@hapi/joi');

module.exports = async (request, response) => {

    let data = Joi.object().keys({
        name: Joi.string().alphanum().min(4).max(30).required(),
        type: Joi.string().valid('mail', 'text').required(),
        label: Joi.string().alphanum().min(4).max(30).required(),
        description: Joi.string().alphanum().min(4).max(100),
        required: Joi.boolean(),
    });

    let dataSchema = Joi.array().items(data);

    const postInfo = {
        structure: request.body.structure,
        name: request.body.name,
    }

    try {
        console.log(postInfo.structure)
        await dataSchema.validateAsync(postInfo.structure);
        if (await Form.findOne({ name: postInfo.name }))
            return response.json({ errors: { name: "Name already exists" } });
        const form = new Form({ name: postInfo.name, user: request.user });
        postInfo.structure.forEach(input => {
            form.structure.push(input)
        })
        await form.save();
        return response.json(form);
    } catch (error) {
        console.log(error)
        if (error.details)
            return response.status(500).json(error);
        return response.status(500).json({ message: "Internal server error." });
    }
};
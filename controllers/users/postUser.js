const bcrypt = require('bcryptjs')
const Joi = require('@hapi/joi');
const User = require('../../models/User');

module.exports = async (request, response) => {

    let dataSchema = Joi.object({
        username: Joi.string().alphanum().min(4).max(30).required(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,50})/).required(),
    });

    try {
        let info = await dataSchema.validateAsync(request.body, { abortEarly: false });
        let user = await User.findOne({ username: info.username });
        if (user)
            return response.json({ errors: { username: 'Username already exists.' } });
        let hashed = await bcrypt.hash(info.password, 5);
        user = await new User({ username: info.username, password: hashed });
        user.save();
        response.json({ success: 'Account has been created.' });
    } catch (error) {
        console.log(error);
        if (error.details)
            return response.json({ errors: error });
        return response.status(500).json(error);
    }
};

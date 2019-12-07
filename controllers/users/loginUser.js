const passport = require('../../helpers/passport/LocalStrategy');
const Joi = require('@hapi/joi');

module.exports = async (request, response, next) => {

    let dataSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    try {
        await dataSchema.validateAsync(request.body, { abortEarly: false });
        passport.authenticate('local', async (error, user, info) => {
            if (error)
                return response.status(500).json({ error: 'Internal server error.' });
            if (!user)
                return response.json({ errors: { username: info.message, password: info.message } });
            let token = await user.generateJWT();
            return response.cookie('token', token, { httpOnly: true }).json({ success: "You are now logged in." });
        })(request, response, next)
    } catch (error) {
        console.log(error);
        if (error.details)
            return response.json({ errors: error });
        return response.status(500).json(error);
    }
};

const passport = require('../../helpers/passport/LocalStrategy');
const Joi = require('@hapi/joi');

module.exports = async (request, response, next) => {

    let dataSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
    });

    try {
        let data = await dataSchema.validateAsync(request.body, { abortEarly: false });
        passport.authenticate('local', async (error, user, info) => {
            if (error) {
                console.log(error)
                return response.status(500).json({ errors: 'Internal server error.' });
            }
            if (!user) {
                console.log(info);
                return response.json({ errors: { username: info.message, password: info.message } });
            }
            return response.json({ token: await user.generateJWT() });
        })(request, response, next)
    } catch (error) {
        console.log(error);
        if (error.details)
            return response.json({ errors: error });
        return response.status(500).json(error);
    }
};

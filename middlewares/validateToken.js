"use strict";
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (request, res, next) => {

    const cookies = request.cookies;
    // return res.json( request.body);
    let result;
    if (cookies) {
        const token = cookies.token; // Bearer <token>
        const options = {
            expiresIn: '2d'
        };
        try {
            // Verify makes sure that the token hasn't expired and has been issued by us.
            result = jwt.verify(token, process.env.JWT_SECRET || "GALATA", options);

            // Let's pass back the decoded token to the request object.
            const user = await User.findById(result.user);
            if (!user)
                return res.json({ error: `Authentication error.basel...` });
            request.user = result.user;
            // We call next to pass execution to the subsequent middleware.
            return next();
        } catch (err) {
            // Throw an error just in case anything goes wrong with verification.
            return res.status(500).json({
                error: "PORN"
            })
        }
    }
    else {
        console.log("HAHA");
        result = {
            error: `Authentication error. Token required.`,
        };
        return res.status(200).send(result);
    }
};
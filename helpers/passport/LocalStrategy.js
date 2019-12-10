const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const passport = require('passport');

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            let user = await User.findOne({ username });
            if (!user || !(await user.validatePassword(password)))
                return done(null, false, { message: 'Username or password is incorrect.' });
            return done(null, user);
        } catch (error) {
            console.log(error);
            done(error)
        }
    }
));

module.exports = passport;

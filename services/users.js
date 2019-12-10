const User = require('../models/User');

const findUserByUsername = async (username) => {
    let user = await User.find({ username: username });
    if (user.length === 0)
        return null;
    return user[0];
}

const createUser = async (username, password) => {
    user = await new User({ username: username, password: password });
    await user.save();
}

module.exports = {
    findUserByUsername,
    createUser,
}
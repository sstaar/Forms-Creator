var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String }
});

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateJWT = async function () {
    const options = {
        // expiresIn: '2d'
    };
    const payload = { user: this._id };
    return await jwt.sign(payload, process.env.JWT_SECRET || "GALATA", options);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

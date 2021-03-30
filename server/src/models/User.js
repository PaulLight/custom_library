const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

// eslint-disable-next-line no-unused-vars
function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return
    }
    return bcrypt.hash(user.password, SALT_FACTOR)
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
       hooks: {
           beforeCreate: hashPassword
       }
    })

    // TODO this works, check hwow to use it without `bluebird`;
    User.prototype.comparePasswords = function(password) {
        return bcrypt.compareAsync(password, this.password);
    };

    return User
}


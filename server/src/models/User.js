const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// eslint-disable-next-line no-unused-vars
function hashPassword (user, options) {
    const SALT_FACTOR = 8

    console.log('beforeChanged')

    if (!user.changed('password')) {
        return
    }
    console.log('afterChanged')
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
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
           beforeCreate: hashPassword,
           beforeUpdate: hashPassword,
           beforeSave: hashPassword
       }
    })

    // TODO Password is undefined problem with hashing to check
    User.prototype.comparePasswords = (password) => {
        console.log('User', password, this.password)
        return bcrypt.compareAsync(password, this.password);
    }

    return User
}


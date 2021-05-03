const bcrypt = require('bcrypt');

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

    User.prototype.comparePasswords = async function(password) {
        // return new Promise(resolve => {
        //     const compared = bcrypt.compare(password, this.password);
        //     resolve(compared);
        // }).then( compared => compared )
        return await bcrypt.compare(password, this.password);
    };

    return User
}


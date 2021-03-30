const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60* 60 * 24 * 7;

    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'This email is already registered.'
            })
            console.log(err)
        }

        // res.send({
        //     message: ` ${ req.body.email } Registered! have fun`,
        // })
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                res.status(403).send({
                    error: 'The login information is incorrect, no email valid email was found...'
                })
                return;
            }

            const isPasswordValid = await user.comparePasswords(password);

            if (!isPasswordValid) {
                res.status(403).send({
                    error: 'The login information is incorrect password is not good broa...'
                })
                return;
            }

            const userJson = user.toJSON();
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            });
        } catch (err) {
            res.status(500).send({
                error: 'My bad man, something went wrong'
            })
            console.log(err);
        }
    }
}

const { User } = require('../models')

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
    }
}

const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^(?=.*\\d)(?=.*[a-z])[\\w~@#$%^&*+=`|{}:;!.?\\"()\\[\\]-]{8,32}$')
            )
        })

        const {error, value} = schema.validate(req.body);

        if (error) {
            switch (error.details[0].context.key) {
                case  'email':
                    res.status(400).send({
                        error: 'You must provide a valid email'
                    })
                    break;
                case  'password':
                    console.log(value);
                    console.log(error.details[0]);
                    res.status(400).send({
                        error:
                            `The password is just bad, man, don\`t be stupid, too simple:
                              <br/>
                              1. If must be at least 8 characters long and no more than 32 characters
                              <br/>
                              2. If must contain Only the following charackters: lower case, upper case`
                    })
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        } else {
            next()
        }
    }
}

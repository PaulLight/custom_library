const { Library } = require('../models')

module.exports = {
    async getLibrary(req, res) {
        try {
            const libraryItems = await Library.findAll({
                limit: 20
            })
            res.send(libraryItems);
        } catch (err) {
            res.status(400).send({
                error: 'We didn`t find any tops'
            })
            console.log(err)

        }
    },
    async post(req, res) {
        try {
            const library = await Library.create(req.body)
            res.send(library);
        } catch (err) {
            res.status(400).send({
                error: 'We can`t create a library ringht now, sorry broa'
            })
            console.log(err)

        }
    },
}

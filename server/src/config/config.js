module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'custom_library',
        user: process.env.DB_USER || 'custom_library',
        password: process.env.DB_PASSWORD || 'custom_library',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './custom_library.sqlite',
        }
    }
}

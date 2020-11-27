require('dotenv/config')
export default {
    mongoUrl: process.env.DB_CONNECTION?.replace('<dbname>', 'api') ?? '',
    testMongoUrl: process.env.DB_CONNECTION?.replace('<dbname>', 'jest') ?? ''
}
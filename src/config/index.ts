require('dotenv').config()

const config = {
    HOST: String(process.env.HOST) || 'localhost',
    PORT: Number(process.env.PORT) || 5000,
    DATABASE: String(process.env.DATABASE) || 'test',
    DATABASE_USERNAME: String(process.env.DATABASE_USERNAME) || 'root',
    DATABASE_PASSWORD: String(process.env.DATABASE_PASSWORD) || '',
}

export default config;
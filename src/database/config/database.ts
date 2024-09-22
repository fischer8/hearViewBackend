import { Options } from 'sequelize';
import 'dotenv/config'

const config: Options = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
  logging: true,
}

/*
  dialectOptions: {
    timezone: 'Z',
    connectionString: `${process.env.DB_URL}?sslmode=require`,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  */

module.exports = config;


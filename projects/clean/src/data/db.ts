import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const {
  DB_URL = '',
  DB_NAME = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
} = process.env;

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_URL,
  dialect: 'postgres',
});

export default db;

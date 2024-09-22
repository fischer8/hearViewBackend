import { Sequelize } from "sequelize";
import 'dotenv/config'
import * as config from '../config/database'

const sequelize = new Sequelize(config);
// const sequelize = new Sequelize(process.env.DATABASE_URL);

export default sequelize;


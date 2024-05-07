import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import pg from "pg";

// Load environment variables from .env file
dotenv.config();

// Set up the Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: `${process.env.DB_URL}`,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    schema: "pets",
    dialectModule: pg,
  }
);

// Export the sequelize instance
export { sequelize };

import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Config = sequelize.define("config", {
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  social: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure unique email
  },
  pix: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankAccount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Config.sync().then(() => {
  console.log("table created");
});

export { Config };

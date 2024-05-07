import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    unique: true, // Ensure the email is unique
    allowNull: false,
  },
  pass: {
    type: DataTypes.STRING,
  },
});

User.sync().then(() => {
  console.log("table created");
});

export { User };

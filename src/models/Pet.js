import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Pet = sequelize.define("pet", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  porte: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  entryDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  characteristics: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Pet.sync().then(() => {
  console.log("table created");
});

export { Pet };

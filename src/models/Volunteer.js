import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Volunteer = sequelize.define("volunteer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  freeHours: {
    type: DataTypes.ARRAY(DataTypes.DATE),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

Volunteer.sync().then(() => {
  console.log("table created");
});

export { Volunteer };

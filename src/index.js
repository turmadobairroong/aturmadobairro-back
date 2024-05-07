import { sequelize } from "./database/connect.js";
import router from "./User/route.js";
import configRouter from "./Config/route.js";
import volunterRouter from "./Volunteer/route.js";
import petsRouter from "./Pets/route.js";

import express from "express";
import cors from "cors";
const app = express();
app.use(cors({}));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

(async () => {
  try {
    console.log("ENTROU");
    await sequelize.authenticate();
    console.log("DB AUTH");
  } catch (error) {
    console.log("ERROR", error);
  }
})();

app.use("/users", router);
app.use("/config", configRouter);
app.use("/volunteer", volunterRouter);
app.use("/pets", petsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

export { app };

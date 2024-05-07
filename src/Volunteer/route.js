import express from "express";
import { Volunteer } from "../models/Volunteer.js";
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("CHEGOU AQUI");
  const users = await Volunteer.findAll({});
  console.log("USERS", users);

  return res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { name, freeHours, city, age } = req.body;
  console.log("REQBODY", req.body);

  if (!name || !freeHours || !city || !age)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Volunteer.create({
      name: name,
      freeHours: freeHours,
      city: city,
      age: age,
    });

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a Volunteer" });
  } catch (error) {
    // handle error so it doesn`t break
    console.log("ERROR", error);
    res.status(500).send({ erro: "Nao foi possivel criar a Volunteer" });
  }
});

router.put("/", async (req, res) => {
  const { name, freeHours, city, age } = req.body;

  if (!name || !freeHours || !city || !age)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Volunteer.update(
      {
        name,
        freeHours,
        city,
        age,
      },
      {
        where: {
          name: name,
        },
      }
    );

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a Volunteer" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar a Volunteer" });
  }
});

export default router;

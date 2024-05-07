import express from "express";
import { Config } from "../models/Config.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await Config.findAll({
    limit: 1,
    order: [["createdAt", "ASC"]],
  });
  return res.status(200).send(users);
});

router.post("/", async (req, res) => {
  const { phone, social, email, pix, bankAccount } = req.body;

  if (!email || !phone || !social || !pix || !bankAccount)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Config.create({
      phone: phone,
      social: social,
      email: email,
      pix: pix,
      bankAccount: bankAccount,
    });

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a config" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar a config" });
  }
});

router.put("/", async (req, res) => {
  const { phone, social, email, pix, bankAccount } = req.body;

  if (!email || !phone || !social || !pix || !bankAccount)
    return res.status(400).send({ erro: "Dados faltantes" });

  try {
    const user = await Config.update(
      {
        phone: phone,
        social: social,
        email: email,
        pix: pix,
        bankAccount: bankAccount,
      },
      {
        where: {
          id: 1,
        },
      }
    );

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar a config" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar a config" });
  }
});

export default router;

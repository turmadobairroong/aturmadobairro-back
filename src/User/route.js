import express from "express";
import { User } from "../models/User.js";
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("CHEGOU AQUI");

  const users = await User.findAll({});
  console.log("USERS", users);

  return res.status(200).send(users);
});

router.post("/auth/", async (req, res) => {
  const { email, pass } = req.body;
  console.log("Body", req.body);

  if (!email || !pass)
    return res.status(400).send({ erro: "Voce deve enviar a senha ou email" });

  const user = await User.findOne({ where: { email: email, pass: pass } });

  if (user) return res.status(200).send({ user, status: "ok" });

  res.status(404).send({ erro: "Usuario nao existe ou senha incorreta" });
});

router.post("/", async (req, res) => {
  const { email, pass } = req.body;

  if (!email || !pass)
    return res.status(400).send({ erro: "Voce deve enviar a senha ou email" });

  try {
    const user = await User.create({ email: email, pass: pass });

    if (user) return res.status(201).send({ user, status: "ok" });

    res.status(500).send({ erro: "Nao foi possivel criar o user" });
  } catch (error) {
    // handle error so it doesn`t break
    res.status(500).send({ erro: "Nao foi possivel criar o user" });
  }
});

export default router;

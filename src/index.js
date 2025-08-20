import express from "express";
import { users, products, transactions } from "./data/index.js";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("HOLA MUNDO ESTOY USANDO EXPRESSSSS");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  // filtrar el user Id
  const findUser = users.data.filter((u) => u.userId === userId);

  res.json({ data: findUser, code: 200 });
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/transactions", (req, res) => {
  res.send(transactions);
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});

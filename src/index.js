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

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/transactions", (req, res) => {
  res.send(transactions);
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});

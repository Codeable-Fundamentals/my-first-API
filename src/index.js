import express from "express";
import { users, products, transactions } from "./data/index.js";
import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("HOLA chicos estoy usando express, desde el servidor");
});

// RUTA para listar todos los usuarios
app.get("/users", (req, res) => {
  res.send(users);
});

// RUTA para lista 1 usurio en especifico
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  // filtrar el user Id
  const findUser = users.data.filter((u) => u.userId === userId);

  res.json({ data: findUser, code: 200 });
});

//RUTA para CREAR un usurio
app.post("/users", (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Bad Request :c" });
  }

  const userDNI = req.body.userCardIdNumber;

  const isValidUser =
    users.data.find((u) => u.userCardIdNumber === userDNI) === undefined;

  if (!isValidUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const isValidAge = req.body.userAge >= 18 && req.body.userAge <= 100;

  if (!isValidAge) {
    return res
      .status(400)
      .json({ message: "User age must be between 18 and 100 years old" });
  }

  const createUserId = uuidv4();
  const newUser = {
    userId: createUserId,
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userAge: req.body.userAge,
    userPassword: req.body.userPassword,
    userCardIdNumber: req.body.userCardIdNumber,
  };

  fs.readFile("./src/data/users.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading users.json" });
    }

    const usersData = JSON.parse(data);
    usersData.data.push(newUser);
    fs.writeFile("./src/data/users.json", JSON.stringify(usersData), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing users.json" });
      }
    });
  });

  res.json({ message: "new user was added into users.json", data: newUser });
});

//RUTA para hacer UPDATE a un usurio
app.patch("users/:userId", (req, res) => {
  // tarea : implemnetra el pacth
});

//RUTA para ELIMINAR a un usuario
app.delete("users/:userId", (req, res) => {
  // tarea : implementar el DELETE de un usauario
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

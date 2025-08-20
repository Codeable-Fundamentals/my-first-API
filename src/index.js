import express from "express";
import { users, products, transactions } from "./data/index.js";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log(`${req.method} ${req.url}`);
  res.send("HOLA MUNDO ESTOY USANDO EXPRESSSSS");
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
  const newUser = req.body;
  // faltaria agregar una condicion , para decir que si esta repetido el user ID no lo agregue

  users.data.push(newUser);

  res.json({ message: "new user was added into users.json", data: users });
});

//RUTA para hacer UPDATE a un usurio
app.patch("users/:userId", (req, res)=> {
  // tarea : implemnetra el pacth
})

//RUTA para ELIMINAR a un usuario
app.delete("users/:userId", (req, res)=> {
  // tarea : implementar el DELETE de un usauario
})


app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/transactions", (req, res) => {
  res.send(transactions);
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});

import express from "express";
import userRouter from "./user-router.js";
import middlewareRouter from "./middleware-router.js";
import productRouter from "./products-router.js";
import transactionRouter from "./transactions-router.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/middleware-example", middlewareRouter);
app.use("/products", productRouter);
app.use("/transactions", transactionRouter);

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});

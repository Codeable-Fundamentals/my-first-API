import express from "express";
import userRouter from "./user-router.js";
import middlewareRouter from "./middleware-router.js";
import productRouter from "./products-router.js";
import transactionRouter from "./transactions-router.js";
import contactRouter from "./contact-router.js";

const app = express();
const port = 3000;
const _dirname = "./src";

app.use(express.json());
app.use(express.static(`${_dirname}/public`));
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/middleware-example", middlewareRouter);
app.use("/products", productRouter);
app.use("/transactions", transactionRouter);
app.use("/contact", contactRouter);
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Algo salio mal pipipi :c");
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});

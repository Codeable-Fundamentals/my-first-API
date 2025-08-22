import express from "express";
import { products } from "./data/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(products);
});

export default router;

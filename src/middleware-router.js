import express from "express";
import { funcion1, funcion2, funcion3 } from "./middlewares/utils.js";

const router = express.Router();

router.get("/", funcion1, funcion2, funcion3);

export default router;

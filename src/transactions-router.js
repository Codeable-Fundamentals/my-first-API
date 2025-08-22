import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("lista de transaciones");
});


router.get("/:trxId", (req, res) => {
  throw new Error("aun no se ha implemnatado esta ruta!")
});

export default router;

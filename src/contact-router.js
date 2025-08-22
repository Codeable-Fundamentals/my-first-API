import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("que viene le body ???", req.body);
  res.send("Tu formulario ha sido recibido! pronto nos contactaremos contigo");
});

export default router;

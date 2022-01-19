import express from "express";
import resources from "../libs/db/resource-data.js";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "here are all the resources", payload: resources });
});

export default router;

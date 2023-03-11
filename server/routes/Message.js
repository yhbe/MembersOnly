const express = require("express");
const router = express.Router();
const controller = require("../controllers/Messagectrl");

router.post("/post", controller.post);
router.get("/GetAll", controller.getAll)

module.exports = router;

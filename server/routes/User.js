const express = require("express")
const router = express.Router()
const controller = require("../controllers/Userctrl")

router.post("/create", controller.post)

module.exports = router
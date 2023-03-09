const express = require("express")
const router = express.Router()
const controller = require("../controllers/Userctrl")

router.get("/create", controller.post)

module.exports = router
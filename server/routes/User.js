const express = require("express")
const router = express.Router()
const controller = require("../controllers/Userctrl")

router.post("/create", controller.post)
router.post("/login", controller.login)

module.exports = router
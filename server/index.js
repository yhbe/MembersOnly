const express = require("express")
const {connect} = require("./utils/db")

require("dotenv").config()

const app = new express()
const port = process.env.PORT || 5000

app.listen(5000, () => {
  console.log(`Listening on port ${port}`)
})

connect()
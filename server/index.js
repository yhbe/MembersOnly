const express = require("express")
const {connect} = require("./utils/db")

require("dotenv").config()

const app = new express()
const port = process.env.PORT || 5000

const userRoute = require("./routes/User")

app.use("/user", userRoute)

//Connecting to mongoDB
connect()

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
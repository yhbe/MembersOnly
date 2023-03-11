const express = require("express")
const bodyParser = require("body-parser")
const {connect} = require("./utils/db")

require("dotenv").config()

const app = new express()
const port = process.env.PORT || 5000

//Middleware 
const cors = require("cors")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Connecting to mongoDB
connect()

const userRoute = require("./routes/User")
app.use("/user", userRoute)

const messageRoute = require("./routes/Message")
app.use("/message", messageRoute)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
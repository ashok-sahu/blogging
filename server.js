const express = require("express");
const chalk = require('chalk')
const cors = require("cors");
const connectDB = require('./config/db')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8080

//middleware connection
app.use(cors())
app.use(express.json({ extended: true }))

//database(mongodb) connection
connectDB()

//routes
app.use('/articles',require('./routes/Articles'))

//server connection
app.listen(PORT,()=>{
    console.log(chalk.bgMagenta.bold.white(`server is running in http://localhost:${PORT}`))
})
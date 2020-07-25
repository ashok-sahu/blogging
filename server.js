const express = require("express");
const chalk = require("chalk");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

//middleware connection
app.use(cors());
app.use(express.json({ extended: true }));

//database(mongodb) connection
connectDB();

//routes
app.use("/articles", require("./routes/Articles"));

app.use(express.static(path.join(__dirname, "web", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "web", "build", "index.html"));
});

app.get('/',(req,res)=>{
  res.send('<h1>hello from the server</h1>')
})

//server connection
app.listen(PORT, () => {
  console.log(
    chalk.bgMagenta.bold.white(`server is running in http://localhost:${PORT}`)
  );
});

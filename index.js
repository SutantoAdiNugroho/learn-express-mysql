const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const {PORT, connection} = require("./config")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({message: "Welcome to my api with mysql"})
})

app.use("/todos", require("./routes/todo"))

connection.connect(function(err) {
    if (err) {
        console.log("Error connecting : ");
        return
    }
    console.log("Connected to database");
    
})

app.listen(PORT, () => {
    console.log(`On port ${PORT}`);
    
})
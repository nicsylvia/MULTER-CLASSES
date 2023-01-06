const express = require("express");

const PORT = 2030;

const app = express();

require("./Config/db")

const router = require("./Router/profileRouter")

app.use(express.json());

app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Server is up and running."
    })
});

app.use("/", router)

app.listen(PORT, () =>{
    console.log("Listening to port")
})
const express = require("express");

const port = 3000;

const app = express();

require("./Config/db")

const router = require("./Router/detailsRouter")

app.use(express.json());


app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Server is up and running",
    })
});

app.use("/api", router)

app.listen(port, () =>{
    console.log("")
    console.log("Listening to my port2")
})
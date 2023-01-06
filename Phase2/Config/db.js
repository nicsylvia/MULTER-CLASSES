const mongoose = require("mongoose");

const URI = "mongodb://localhost/DetailsDB"

mongoose.connect(URI)

mongoose.connection.on(
    "open", () =>{
        console.log("Database is connected to the server")
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting database")
    }
)
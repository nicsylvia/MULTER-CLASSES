const mongoose = require("mongoose")

const URI = "mongodb://localhost/Profile"

mongoose.connect(URI)

mongoose.connection.on(
    "open", () =>{
        console.log("Database is connected")
    }
).once(
    "error", (error) =>{
        console.log("An error occured in connecting database")
    }
)
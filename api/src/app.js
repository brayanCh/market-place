const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require('dotenv').config();

// it changes the server port or defaults to 4200

app.set('port', process.env.PORT || 4200 );

// middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


// routes

app.use("/sellers", require("./routes/seller.routes"));
app.use("/mods", require("./routes/moderator.routes"));


// connection

const connectionUrl = process.env.MONGO_KEY 

mongoose.connect(connectionUrl)
.then(() => (
    app.listen(app.get("port"), () => {
        console.log("Listening in port: " +  app.get("port"));
    })
))
.catch(err => console.log("this happened " + err));

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
const cors = require("cors");
require('dotenv').config();

// it changes the server port or defaults to 4200

app.set('port', process.env.PORT || 4200 );

// middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(multer(
    {
        dest: path.join(__dirname, "public/images") 
    }
).single("image"));

// routes

app.use("/sellers", require("./routes/seller.routes"));
app.use("/mods", require("./routes/moderator.routes"));
app.use("/buyers", require("./routes/buyer.routes"));
app.use("/product", require("./routes/product.routes"));


// connection

const connectionUrl = process.env.MONGO_KEY 

mongoose.connect(connectionUrl)
.then(() => (
    app.listen(app.get("port"), () => {
        console.log("Listening in port: " +  app.get("port"));
    })
))
.catch(err => console.log("this happened " + err));

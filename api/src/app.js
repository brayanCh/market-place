const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// it changes the server port or defaults to 4200

app.set('port', process.env.PORT || 4200 );

// middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


// routes

app.use("/users", require("./routes/user.routes"));
app.use("/proyects", require("./routes/proyects.routes"));


// connect

//const connectionUrl = 

mongoose.connect(connectionUrl)
.then(() => (
    app.listen(app.get("port"), () => {
        console.log("Listening in port: " +  app.get("port"));
    })
))
.catch(err => console.log("this happened " + err));

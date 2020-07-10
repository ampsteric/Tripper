const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Keys = require("./config/config");

const userRoute = require("./routes/users-routes");
const placeRoute = require("./routes/places-routes");

mongoose
    .connect(Keys.uri)
    .then(() => {
        console.log("connected to DB");
    })
    .catch(() => {
        console.log("error connecting to DB");
    });

app.use("/api/users", userRoute);
app.use("/api/places", placeRoute);
app.listen(5000 || evn.port);
{
    console.log("server started at 5000");
}

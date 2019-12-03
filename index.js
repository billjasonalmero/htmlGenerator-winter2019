//const fs = require("fs");
//const mongoose = require("mongoose");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);
console.log("The Express server is running on port " + port + "!");
app.use("/cannotget", express.static("./web_files") );


const auth = require(".assets/auth.js")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);
console.log("The Express server is running on port " + port + "!");
console.log(auth.getDBURL());


//routes
app.use(express.static("client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/login", (request, response) => {
  let requestUsername = request.body.username;
  let requestPassword = request.body.password;

  console.log(requestUsername,requestPassword);
  response.sendStatus(200);
});


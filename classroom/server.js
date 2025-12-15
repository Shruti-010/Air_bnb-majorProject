const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

app.use(
  session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
  }) 
);


app.listen(3000, () => {
  console.log("server is listening to port 3000");
});

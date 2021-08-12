const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const homeRoute = require("./routes/home.route");
const connectDB = require("./database/database");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const authRoute = require("./routes/auth.route");
const dashboardRoute = require("./routes/dashboard.route");

server.listen(port, () => {
  console.log("App is running on port: ", port);
});
connectDB();
app.use("/", homeRoute);
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

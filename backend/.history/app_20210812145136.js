const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const homeRoute = require("./routes/home.route");
const connectDB = require("./database/database");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const io = require("socket.io")(server, {
  cors: {
    corsOptions,
  },
});
app.use(cors(corsOptions));

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

io.on("connection", (socket) => {
  console.log("co nguoi ket noi", socket.id);
  socket.on("joinroom", (room) => {
    socket.join(room);  });
  socket.on("leaveroom", (room) => {
    socket.leave(room);
  });
  socket.on("shareMusic", (data) => {
    const { room, music } = data;
    io.to(room).emit("StupidConnection", music);
  });
});

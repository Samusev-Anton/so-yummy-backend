const app = require("../app");
const mongoose = require("mongoose");
//
const http = require("http").Server(app);
const socket = require("socket.io")(http, {
  cors: { origin: "http://localhost:3000" },
});

global.onlineUsers = new Map();
socket.on("connection", (user) => {
  user.emit("changeOnline", onlineUsers.size);
  user.on("addUser", (data) => {
    onlineUsers.set(user.id, data.name);
    user.broadcast.emit("changeOnline", onlineUsers.size);
    user.emit("changeOnline", onlineUsers.size);
  });
  user.on("newMessage", (message) => {
    user.broadcast.emit("currentMessage", message);
  });
  user.on("disconnect", () => {
    onlineUsers.delete(user.id);
    user.broadcast.emit("changeOnline", onlineUsers.size);
  });
});

const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .set("strictQuery", true)
  .connect(DB_HOST)
  .then(() => {
    // app.listen(PORT);
    http.listen(PORT);
    console.log(`Server running. Use our API on port: ${PORT}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

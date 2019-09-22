const { Server } = require("ws");

const wss = new Server({ port: "3000" });

wss.on("connection", socket => {
  socket.on("message", message=>{
    wss.clients.forEach(client => client.send("You sent this to the server: " + message))
  })
  socket.on("close", () => {
    console.log("socket disconnected");
  });
  socket.send("welcome!")
  console.log("new socket connected");
});

console.log("chat server waiting for connections on ws://localhost:3000");

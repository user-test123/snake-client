const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    // host: "172.46.2.204",
    // port: 50541
    host: IP,
    port: PORT
  });

  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  // conn.on("connect", () => {
  //   conn.write("Hello from client this is David!");
  // });

  conn.on("connect", () => {
    conn.write("Hello from client this is David!");
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: DHE");
  });

  conn.on("connect", () => {
    conn.write("Say: HELLO HOW ARE YOU?");
  });

  conn.on("connect", () => {
    // conn.write("Move: up");
    console.log("Move up");
    // conn.write("Move: left");
    // conn.write("Move: up");
    // conn.write("Move: up");
  });

  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 3000);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
// connect();

module.exports = { connect };

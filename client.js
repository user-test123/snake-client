const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.1.209",
    port: 50541
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

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };

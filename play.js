const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.1.209",
    port: 50541
  });

  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("Hello from client this is David!");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

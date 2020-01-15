const net = require("net");

let connection;
// connection = conn;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // stdin.resume();
  return stdin;
  //here
};

const handleUserInput = function(input) {
  if (input === "\u0003") {
    process.exit();
  }
  if (input === "w") {
    connection.write("Move: up");
  }
  if (input === "a") {
    connection.write("Move: left");
  }

  if (input === "s") {
    connection.write("Move: down");
  }

  if (input === "d") {
    connection.write("Move: right");
  }

  // return stdin;
};

// connectionection = connection;

module.exports = { setupInput };

/**
 * Establishes connectionection with the game server
 */

// const connectionect = function() {
//   const connection = net.createconnectionection({
//     host: "172.46.2.209",
//     port: 50541
//   });
//   return connection;
// };

// setupInput(connection);

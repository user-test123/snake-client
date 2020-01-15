const net = require("net");

let connection;

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput => {
    if (handleUserInput === "\u0003") {
      process.exit();
    }

    if (handleUserInput === "w") {
      console.log("up");
    }

    if (handleUserInput === "a") {
      console.log("left");
    }

    if (handleUserInput === "s") {
      console.log("down");
    }

    if (handleUserInput === "d") {
      console.log("right");
    }
  });

  connection = conn;

  return stdin;
};

/**
 * Establishes connection with the game server
 */

// const connect = function() {
//   const conn = net.createConnection({
//     host: "172.46.2.209",
//     port: 50541
//   });
//   return conn;
// };

// setupInput(conn);

module.exports = { setupInput };

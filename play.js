const net = require("net");
const { setupInput } = require("./input");

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   stdin.on("data", handleUserInput => {
//     if (handleUserInput === "\u0003") {
//       process.exit();
//     }
//   });

//   conn.on("connect", () => {
//     conn.write("Move");
//     console.log("Movement");
//   });

//   return stdin;
// };

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });

  return conn;
};

console.log("Connecting ...");
setupInput(connect());

const net = require("net");
const { setupInput } = require("./input");
const { connect } = require("./client");

console.log("Connecting ...");
setupInput(connect());
// const connect = function() {
//   const conn = net.createConnection({
//     host: "172.46.1.209",
//     port: 50541
//   });

//   return conn;
// };

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

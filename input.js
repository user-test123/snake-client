const net = require("net");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput => {
    if (handleUserInput === "\u0003") {
      process.exit();
    }
  });

  return stdin;
};

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.209",
    port: 50541
  });
};

setupInput();

module.exports = { setupInput };

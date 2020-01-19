// ==========================================================
// ----------------------------------------------------------
// -----                                                -----
// -----                                                -----
// -----              Ping Server in Node.js            -----
// -----                                                -----
// -----                                                -----
// -----        This app uses the net-ping module:      -----
// ----- https://github.com/nospaceships/node-net-ping  -----
// -----                                                -----
// -----                                                -----
// ----------------------------------------------------------
// ==========================================================

// ==========================================================
// -----                 Import Modules                 -----
// ==========================================================

const ping = require("net-ping");
const http = require("http");

// ==========================================================
// -----                 Set PORT Number                -----
// ==========================================================

const port = 8080;

// ==========================================================
// -----                Set PING Options                -----
// ==========================================================

const options = {
  networkProtocol: ping.NetworkProtocol.IPv4,
  packetSize: 16,
  retries: 2,
  sessionId: process.pid % 65535,
  timeout: 2000,
  ttl: 128
};

// ==========================================================
// -----                 CREATE Server                  -----
// ==========================================================

// Set ability to reach target to false until proven otherwise
let pingAnswer = "";

const pingServer = http.createServer(function(request, response) {
  if (request.method === "POST") {
    let httpPostMessage = "";
    request.on("data", function(chunk) {
      // Store imported IP address in target variable
      let target = (httpPostMessage += chunk.toString());
      // Create session of ping server
      const session = ping.createSession(options);
      // Ping target and store answer in pingAnswer variable
      session.pingHost(target, function(error, target) {
        if (error) {
          pingAnswer = "false";
          console.log(target + " cannot be reached.");
        } else {
          pingAnswer = "true";
          console.log(target + " is alive and well!");
        }
        // Respond back to client with pingAnswer
        response.setHeader(
          "Access-Control-Allow-Origin",
          "http://127.0.0.1:5500"
        );
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(pingAnswer);
        response.end();
      });
    });
  } else {
    response.end();
  }
});

// ==========================================================
// -----                   RUN Server                   -----
// ==========================================================

pingServer.listen(port, function(error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port number " + port);
  }
});

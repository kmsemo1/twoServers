// Require/import the HTTP module
// Native node module like fs
var http = require("http");

// Define a port to listen for incoming requests
var port7000 = 7000;
var port7500 = 7500;

// Create a generic function to handle requests and responses
function request7000(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You looking good today!" + request.url);
}

function request7500(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Your breathe stank!" + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(request7000);
var serverTwo = http.createServer(request7500);
// Start our server so that it can begin listening to client requests.
serverOne.listen(port7000, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port7000);
});

serverTwo.listen(port7500, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + port7500);
});

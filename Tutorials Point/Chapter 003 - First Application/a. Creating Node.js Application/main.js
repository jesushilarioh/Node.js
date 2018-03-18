// Step 1: Import required module http and create an HTTP instance into (http)
const http = require("http");

// Step 2: Create Server: with http instance (http), call createServer() method.
http.createServer ((request, response) => {
	// Send HTTP header
	// HTTP Status: 200: OK
	// Content Type: text/plain
	response.writeHead(200, {'Content-type':'Text/plain'});

	// Send the response body as "Hello World"
	response.end('Hello World\n');
}).listen(8081); // Bind createServer() method at port 8081 using listen() method

// Console to print message
console.log('Server running at http://127.0.0.1:8081/');

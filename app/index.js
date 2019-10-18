/* 
* Primary file for the API
*
*/

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {

    // Get the URL and parse it
    const parsedURL = url.parse(req.url, true);

    // Get the path
    const path = parsedURL.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the query string as an object
    const queryStringObject = parsedURL.query;


    // Get the HTTP Method
    const method = req.method.toLowerCase();

    // Send the response
    res.end('Hello World \n');

    // Log the request path
    console.log(`Request received on path: ${trimmedPath} with method: ${method} and path: ${path}`);

    });

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
    console.log('The server is listening on port 3000 now');
});
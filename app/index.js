/* 
* Node JS Masterclass by Pirple (homework repo)
* Primary file for the API
* Author: Mike Bell
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

    // Get the Headers as an object
    const headers = req.headers;

    // Send the response
    res.end('Hello World \n');

    // Log the request path
    console.log(`Request received on path: ${trimmedPath} with method: ${method} and path: ${path}`);
    console.log('Request received with these headers', headers);

    });

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
    console.log('The server is listening on port 3000 now');
});
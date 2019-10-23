/* 
* Node JS Masterclass by Pirple (homework repo)
* Primary file for the API
* Author: Mike Bell
*
*/

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

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

    // Get the payload, if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    let eventCount = 0;
    req.on('data', (data) => {
        eventCount++
        buffer += decoder.write(data);
        console.log('This is the data event: \n', data);
    });

    req.on('end', () => {
        buffer += decoder.end();
        // Send the response
        res.end('Hello World \n');
    
        // Log the request path        
        console.log('Request received with this payload: \n', buffer);
        console.log(`Request Data event was fired ${eventCount} times`);
    });


    });

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
    console.log('The server is listening on port 3000 now');
});

.. 
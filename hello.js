const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url);
    
    if (urlObj.path == "/hello") {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({'welcome_message': 'Hello World!'}));
        console.log(`Received request from ${urlObj.path} - we returned a message`);
        return;
    }
    res.setHeader('Content-Type', 'plain/text');
    res.writeHead(404)
    res.end('not found');
    console.log(`Received request from ${urlObj.path} - no message returned`);
});

server.listen(8050, () => console.log(`Hello World server now listening on port 8050`));


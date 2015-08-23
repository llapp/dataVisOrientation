var http = require('http'); // import http node core module
var map = require('through2-map'); // import through2-map third party package
var port = process.argv[2]; // get the port number from the first argument

// create the server, the callback is passed a request and a response
var server = http.createServer(function(req, res) {
    // console.log(req);
    
    // check that the request method is a post
    if (req.method != 'POST') {
        // if it is not a POST then run an early return
        return res.end();
    }
    // pipe request data through through2-map
    req.pipe(map(function(chunk) {
        // need to return the chunk, because functions won't return anything unless specified
        // convert data chunk to string in uppercase characters
        return chunk.toString().toUpperCase();
        
        // pipe altered chunk of data to the response
    })).pipe(res);
});

// tell server to listen for connections on the port specified by the client 
server.listen(port);
var http = require('http');
var fs = require('fs'); // use fs to read data we stream
var port = process.argv[2]; // get the port from the first argument
var filePath = process.argv[3]; // get the file path (location of the file) from the second argument

var server = http.createServer(function(req, res) {
    // if everything went okay, tell client we are sending text in the response --> using common status code 200
    res.writeHead(200, {"Content-Type" : "text/html"});
    // creating a read stream from the file contents and piping it to the response
    // pipe is used here to redirect data
    fs.createReadStream(filePath).pipe(res);
    
})
// have to open the server to listen to the port provided to us
server.listen(port);

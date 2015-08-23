var http = require("http"); // import the http core module
var bl = require("bl"); // import the third party 'bl' package

// perform a get request for the url (first line argument)
// uses 2 arguments: url and callback
http.get(process.argv[2], function (res) {
    // pipe stream from the bl to collect the data
    // fire callback with the data once the stream has ended
    res.pipe(bl(function (error, data) {
        // if an error exists return with the error
        if (error) return console.log(error);
        // convert data from buffer to string
        var resultData = data.toString();
        // print the integer representing the number of characters recieved from server
        console.log(resultData.length);
        // prints the complete string recieved from server
        console.log(resultData);
    }));
});
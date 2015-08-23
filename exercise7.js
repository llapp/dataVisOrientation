var http = require('http'); // import the http core module
var url = process.argv[2]; // get the url (first argument)

// get input from url using 2 arguments:
// the url you want to get
// a callback using the signature: function (res)
http.get(url, function (res) { 
    // pulling data from the url to put in the console, by turning the response on
  res.on("data", function(data) {
      // print the data event from the url, converting the buffer objects to strings
         console.log(data.toString());
  });
});
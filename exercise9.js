// use a counter to count the get requests as they finish
// put something in the code that will log the requests in order once the count has reached 3
// so all the requests will have finished 

var http = require('http'); // import the http core module
var urls = [process.argv[2], process.argv[3], process.argv[4]]; // store the urls in an array
var count = 0; // counter to keep track of how many get requests have been completed
var allTheData = []; // place to store the data once the get requests are made

// get data from a url, one at a time
function getData(url) {
   // store the data from each url's get request
    var dataStore = '';
    
    // perform a get request to each url 
    // the callback gives us the response
    http.get(url, function(res) {
        // convert response from binary to text using utf8 encoding
      res.setEncoding('utf8');
      
      // on a data event store our data chunks
      res.on('data', function(data) {
         // add chunk of data to dataStore 
         dataStore += data;
    });
    
    // on an end event (listening for when the response is finished emitting data)
    res.on('end', function() {
        // increment our count variable
        count += 1;
        // determine position of url within the urls array (using it's index)
        var index = urls.indexOf(url);
        // use the index to assign data to correct position in allTheData
        allTheData[index] = dataStore;
        
        if(count === 3) {
            printData();
        }
    });
    
    // listen for an error and if so log it
    res.on('error', console.error);
    });
    
}

function printData(){
    for (var i=0; i<allTheData.length; i++) {
        console.log(allTheData[i]);
    }
    console.log()
}

for (var i=0; i<urls.length; i++) {
    getData(urls[i]);
}
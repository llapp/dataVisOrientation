var fs = require('fs'); //import the module
var file = process.argv[2];
var numLines = 0;

// asynchronously read the file
// when done reading file, execute a callback function
fs.readFile(file, function(error, data){
    //first check to see if there was an error
  if (error) throw error;
  // if there was no error than operate on data
  var text = data.toString();
  var splitText = text.split('\n');
  numLines = splitText.length -1;
  // the console.log needs to be inside the function, otherwise node will try to console.log while it is still reading the file
  console.log(numLines);
});


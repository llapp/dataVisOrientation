var fs = require('fs'); // import the fs core module
var file = process.argv[2]; // getting the 3rd argument from process.argv which is the input file name from learnyounode
var buffer = fs.readFileSync(file); // read the file synchronously and convert it to a buffer
var fileText = buffer.toString(); // converting the file buffer to a string of text using a method .toString
var splitText = fileText.split('\n'); // splitting the string into an array using a new line as the delimiter

// a delimiter is something you separate thing by
// this is a pipe: |

console.log(splitText.length -1); // the length will tell us the number of lines in the array, but we need the number of new lines, so we will subtract one because the first line is not new.
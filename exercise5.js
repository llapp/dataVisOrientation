var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module
var dir = process.argv[2]; // get the directory path (1st argument)
var ext = process.argv[3]; // get the extension to filter for (2nd argument)

// asynchronously read input directory
// when done reading directory, invoke a callback
// callback takes error and data (data being the list of filenames/contents of directory) as parameters
fs.readdir(dir, function(error, data){ 
    // checking if an error exist, 
    if (error) throw error;
    // console.log(data);
    
    // concatenate (add) a dot to our file extension 
    var ext = '.' + ext;
    // interate over array of file names using for loop
    for (var i=0; i<data.length; i++) {
    // if the file extension matches node school's extension
     if (path.extname(data[i]) == ext){
         // print the file name
         console.log(data[i]);
     }
    }
});
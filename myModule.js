var fs = require('fs'); // import the fs core module
var path = require('path'); // import the path core module

// creating a named function called filterFiles
// takes 3 arguments: directory, extention and callback function
function filterFiles(dir, ext, callback) { 
    
    var dotExt = '.' + ext; // prepend a dot to our file extension to filter for
    var filteredList = []; // creating an empty array to push our filtered file names into
    
    // asynchronously read input directory
    // takes 2 arguments: a path to a directory and a callback function
    // callback function takes to arguments: error and data
    fs.readdir(dir, function(error, data){
        // if an error exists return our callback with the error
        if (error) return callback (error);
        
        // loop over the array of file names inside the data variable (which is the dir variable)
        for (var i=0; i<data.length; i++) {
            // check for a file extension match
            if (path.extname(data[i]) == dotExt) {
                // if there is a match pushes data (file name) into filteredList array
                filteredList.push(data[i]);
            }
        
        }
        // invoke our callback with our filteredList
        // there won't be an error message, because we checked for an error earlier
        // so the error parameter will be null
        callback(null, filteredList);
    })
    
    // callback(error, data)
}

// export our function filterFiles
module.exports = filterFiles;
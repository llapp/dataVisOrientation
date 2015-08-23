var myModule = require('./myModule'); // importing our self-made module
// may have to specify where a custom module is 'living' - use ./  to tell node to look in the same folder as the script
var dir = process.argv[2]; // first argument to our script is a filepath to a directory
var ext = process.argv[3]; // second argument to our script is the file extension to filter for

// creating a callback function to pass to myModule as the third parameter
// will print our the result of our module
function myCallback(error, fileList) {
    if (error) throw error;
   
   // forEach is a way to call a function on each item in the list 
   // like a shorthand version of a for loop
    fileList.forEach(function(item){
        console.log(item);
        
    });
}

// invoke myModule with the path to the directory, the file extension to filter, and myCallback
myModule(dir, ext, myCallback);
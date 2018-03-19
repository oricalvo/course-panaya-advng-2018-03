const fs = require("fs");

console.log("before");

fs.readFile("1.txt", function(err, data) {
    //console.log(data.toString());

    console.log("DATA");
});

console.log("after");

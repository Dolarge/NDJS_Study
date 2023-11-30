//figlet 선언
var figelt = require("figlet");


figelt('Hello World', function(err,data){
if(err){
    console.log("Something went wrong...");
    console.dir(err);
    return;
    }
    console.log(data)
});
var fs = require("fs");

//Asynchronous read
fs.readFile('input.txt',function(err,dataA){
if(err)
{
return console.error(err);
}
console.log("Asynchronous read:" +dataA.toString());
});

//Synchronous read
var data= fs.readFileSync('input.txt');
console.log("Synchronous read:" +data.toString());

console.log("Program ended");
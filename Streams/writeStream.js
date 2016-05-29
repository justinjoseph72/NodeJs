var fs = require('fs');
var data = 'Simply Easy learning';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data,'UTF8');

writeStream.end();

writeStream.on('finish',function(){
console.log('write completed');
});

writeStream.on('error', function(err){
console.log(err.stack);
});

console.log('Program ended');
const fs = require('fs');
const rs = fs.createReadStream('./lorem.txt',{encoding: 'utf8'});
const ws = fs.createWriteStream('write.txt');

// rs.on('data',(callback) =>{
//   ws.write(callback);
// })


rs.pipe(ws);
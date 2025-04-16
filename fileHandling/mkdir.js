const fs = require('fs');

// fs.mkdir('./new',(err)=>{
//   if(err) throw err;
//   console.log('Directory Successfully Created');
// })

if(!fs.existsSync('./new')){
  fs.mkdir('./new',(err)=>{
    if(err) throw err;
    console.log('Creation Successful');
  });
}
else{
  console.log('Already Created');
}
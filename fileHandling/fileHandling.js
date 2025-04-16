//Node runs in the terminal window
const maths = require('../math')
const os = require('os')
const path = require('path')
const {add,subtract,multiply} = require('../math')
const fsPromises = require('fs').promises;
// console.log(multiply(2,3));
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));


const fs = require('fs');
// fs.readFile('./lorem.txt','utf8',(err,data)=>{
//   if(err) console.log(err);
//   console.log(data);
// })

process.on('uncaughtExemption',(err)=>{
  console.log(err);
  process.exit(1);
})

const fileOps = async () =>{
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'lorem.txt'),'utf8');
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'starter.txt'),data);
    await fsPromises.unlink(path.join(__dirname,'starter.txt'));

  }
  catch(err){
    console.error(err);
  }
}

fileOps();


// fs.readFile(path.join(__dirname,'starter.txt'),'utf8',(err,data) =>{
//   if(err) throw err;
//   console.log(data);
// })



// fs.writeFile(path.join(__dirname,'append.txt'),'Okay Nextron',(err)=>{
//   if(err) throw err;
//   console.log('Write Complete');

//   fs.appendFile(path.join(__dirname,'append.txt'),'\n\nHere is what you think of appending buddy',(err)=>{
//     if(err) throw err;
//     console.log('Append Completed');

//     fs.rename(path.join(__dirname,'append.txt'),path.join(__dirname,'Newappend.txt'),(err)=>{
//       if(err) throw err;
//       console.log('Rename Completed');
//     })

//   })

// })


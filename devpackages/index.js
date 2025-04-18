//Installing nodemon --> npm i nodemon
//Keeps on spawning

console.log('Nextron only codes in Rust');

const {format}= require('date-fns');
console.log(format(new Date(),'yyyyMMdd\tHH:M:SS'));
const {v4: uuid} = require('uuid');
console.log(uuid());
 c
const logEvent = require('./logEvents');
const EventEmmitter = require('events');

class MyEmitter extends EventEmmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('log',(msg) =>logEvent(msg));

setTimeout(()=>{
  myEmitter.emit('log','log event Emited!');
},2000);
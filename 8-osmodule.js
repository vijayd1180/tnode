const os = require('os');
//info abouut current user

const user = os.userInfo();
console.log(user);
// return the system up time

console.log(`system uptime is${os.uptime()}seconds`)



const currentOS = {

    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(currentOS);
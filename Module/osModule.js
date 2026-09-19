import os from 'node:os'


// "os node module" 

console.log('1. Type : ', os.type()) // returns os name
console.log('2. platform : ', os.platform())  // returns platform name win32/linux/mac
console.log('3. arch : ', os.arch()) // x32 / x64
console.log('4. host name : ', os.hostname()) // model name
console.log('5. release : ', os.release()) // returns the os version
console.log('6. upTime : ', os.uptime()) // returns system uptime in seconds
console.log('7. userInfo : ', os.userInfo()) // returns current user information
console.log('8. free mem : ', os.freemem()) // Free RAM
console.log('9. total mem : ', os.totalmem()) // total RAM
console.log('10. cpus : ', os.cpus()) // cpus related data in object form
console.log('11. home dir : ', os.homedir()) // home directory

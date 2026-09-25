// In this section we are going to learn about Operating System module


import os from 'node:os'


// Window/Linux/Mac 
console.log("Platform : ", os.platform())


// Architecture (x64, arm64)
console.log("Architecture : ", os.arch())


// user folder 
console.log("Home directory : ", os.homedir())


// 'hostname' -> (computer name)
console.log("hostname : ", os.hostname())


// cpu information 
console.log("cpus : ", os.cpus())


// Free RAM 
console.log("freeRAM : ", os.freemem())


// total RAM 
console.log("totalRAM : ", os.totalmem())
// Qs. What is Node modules 
// Node modules is JavaScript's separate files where related code has been stored. Using Node modules -> Organized, reuseable and maintainable.




import {add,multiple} from './math.js'
import {name,age,email} from './user.js'

console.log(add(3,2))
console.log(multiple(4,5))

console.log(`Hello, my name is ${name}. I am ${age} years old and my email is ${email}`)



// In Node.js there are 3 major Modules types and these are -> 
// 1. core/build in module(fs, path, http, os, events),
// 2. Local module (Math.js, index.js) and
// 3. Third party module (express, mongoose, jonswebtoken, bcrypt, dotenv)
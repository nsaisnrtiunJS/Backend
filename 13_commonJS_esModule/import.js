// Here I import files to calculate functions 

// const {add, multiple} = require('./export')

// console.log(add(3,2))
// console.log(multiple(3,4))




// ES Module 
// import add, { multiple } from './export.js'  // add default export he, isiliye is ko hum aise hi likh sakte he (add ki jagah hum kuch vi likh sakte he like - abc/ss/)

// console.log(add(3,2))
// console.log(multiple(3,4))





// alias import 
import * as abc from './export.js'

console.log(abc.add(3,4))
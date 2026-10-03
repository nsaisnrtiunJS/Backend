// In this section we see some example of External packages 

// 01. 
// import _ from 'lodash'  // used to utility functions 
// const { cloneDeep } = _

// From one array to make multiple chunked array 
// const arr = [1,2,3,4,5,6,7,8,9,10]
// const chunkedArr = _.chunk(arr, 3)
// console.log(chunkedArr)

// // Make deep clone object 
// const obj = {a:1,b:2,c:{d:3,e:4}}
// const clonedObj = cloneDeep(obj)
// console.log(clonedObj)






// 02. 
// import chalk from 'chalk' // Chalk is used to console styling

// console.log(chalk.blue('Hello from Node.js blue chalk'))
// console.log(chalk.red.italic('Hello from Node.js red chalk'))
// console.log(chalk.green.bold('This is green bold text using chalk.'))
// console.log(chalk.bgCyan('Here bg cyan applied'))





// 03. 
// import axios from 'axios'  // used for HTTP request
// import { response } from 'express'

// const url = 'https://jsonplaceholder.typicode.com/posts'

// axios.get(url)
// .then((response) => {
//     console.log(response.data)
// })
// .catch((err) => {
//     console.error('Error fetching data: ', err)
// })





// 04.
// import dayjs from 'dayjs'  // It's a third party library using for getting current date & time  

// console.log(dayjs().format('YYYY-MM-DD HH-mm-ss'))
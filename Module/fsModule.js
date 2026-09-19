import fs from 'node:fs'


// "fs node module"

//Create file
// fs.writeFileSync('text.txt', '')  

//update file
// fs.writeFileSync('text.txt', 'Hello from Node.js')

//add some text to file
// fs.appendFileSync('text.txt', ' Sintu \n Nasrin \n Jaan')
// console.log('Jaan updated')

// read the file
// let read = fs.readFileSync('text.txt', 'utf-8')
// console.log(read)

// "to delete existing .txt file"
// fs.unlinkSync('text.txt')


// This is not good to practicing 
// if(fs.existsSync('text.txt')){
//     console.log('File exist, proceeding with some operations...')
//     fs.appendFileSync('text.txt', 'Welcome to Node.js')
// } else {
//     console.log('File not Found, creating a new file...')
// }










// ab hum Async tarike se same things karenge 

// create & update file 
// fs.writeFile('text.txt', 'Hello from NodeJs async', (err) => {
//     if(err){
//         console.error('write file have some error ', err)
//     } else{
//         console.log('write file updated')
//     }
    
// })


// append file 
// fs.appendFile('text.txt', '\nThis is Sam here.', (err) => {
//     if(err){
//         console.error('append file have some error ', err)
//     } else{
//         console.log('append file updated')
//     }
    
// })


// read file 
// fs.readFile('text.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log('read file have some error ', err)
//     } else{
//         console.log('read file : ', data)
//     }
// })


// change the file name or rename file name 
// fs.rename('demo.txt', 'new.txt', (err) => {
//     if(err){
//         console.error('rename have some error ', err)
//     } else{
//         console.log('file name changed successfully')
//     }
    
// })


// delete file 
// fs.unlink('new.txt', (err)=>{
//     if(err){
//         console.error('unlink file is not exist ', err)
//     } else{
//         console.log('file deleted successfully')
//     }
    
// })









// do the same things using promises (.then/.catch)

// fs.writeFile('text.txt', 'Hello from NodeJs promises')
// .then(() => {
//     console.log('File written successfully')
// })
// .catch(() => {
//     console.log('Error written file')
// })


// read file using promises 
// fs.readFile('text.txt', 'utf-8')
// .then((data) => {
//     console.log('file read : ', data)
// })
// .catch(() => {
//     console.log('Error file read')
// })


// update file 
// fs.appendFile('text.txt', '\nThis is Sam here')
// .then(() => {
//     console.log('File append successfully')
// })
// .catch(() => {
//     console.log('Error append file')
// })


// Delete file 
// fs.unlink('demo.txt')
// .then(() => {
//     console.log('File deleted successfully')
// })
// .catch(() => {
//     console.log('Error delete file')
// })
// In this section we are going to learn about FileSystem 
// Using File System, we can -> Create file, Read file, Write file, update file and Delete file
// Most important thing is as Nodejs is build in module so, don't need to install this



// import fs, { read } from "node:fs"



// This is used to create/write new file 
// fs.writeFileSync('text.txt','Hello from Node.js', (err)=> {
//     if(err){
//         console.error('Error writting file ', err)
//     }
//     console.log('File create successfully')
// })


// This is used to read the file 
// let readFile = fs.readFileSync('text.txt','utf-8', (err)=> {
//     if(err){
//         console.error('Error read file ', err)
//     }
//     console.log(readFile)
// })


// File mein content overwrite karna
// fs.writeFileSync('text.txt','This text will overwrite the existing text.', (err) => {
//     if(err){
//         console.error('Error write file ', err)
//     }
//     console.log('text updated')
// })



// Add new text to existing file 
// fs.appendFileSync('text.txt', '\nWelcome to Node.js learning.', (err) => {
//     if(err){
//         console.error('Error append file ', err)
//     }
//     console.log('text added successfully.')
// })


// Delete file 
// fs.unlinkSync('sample.txt', (err) => {
//     if(err){
//         console.error('Error to delete file ', err)
//     }
//     console.log('file deleted')
// })



// To rename existing file name 
// fs.rename('updated_text.txt', 'text.txt', (err) => {
//     if(err){
//         console.error('Error to update file name ', err)
//     } else{
//         console.log('Update file name successfully')
//     }
// })














// fs module using promisses , 
import fs from 'node:fs/promises'
// const fs = require('fs/promises')
// const fs = require('fs').promises


// fs.writeFile('new.txt', 'This is a new file')
// .then(() => {
//     console.log('File created successfully')
// })
// .catch((err) => {
//     console.log('Error writing file ', err)
// })

// fs.readFile('new.txt', 'utf-8')
// .then((data) => {
//     console.log('Reading file successfully ', data)
// })
// .catch((err) => {
//     console.log('Error reading file ', err)
// })


// fs.appendFile('new.txt', '\nThis line is added.')
// .then(() => {
//     console.log('Append file successfully')
// })
// .catch((err) => {
//     console.log('Error append file ', err)
// })


// fs.unlink('test.txt')
// .then(() => {
//     console.log('File deleted successfully')
// })
// .catch((err) => {
//     console.log('Error deleting file ', err)
// })














// fs module using async/await 

// async function writeFile() {
//     try {
//         await fs.writeFile('async.txt', 'This is async function text file')
//         console.log('File created successfully')
//     } catch (err) {
//         console.log('Error writing file ', err)
//     }
// }
// writeFile()


// async function readFile(){
//     try {
//         let read = await fs.readFile('async.txt', 'utf-8')
//         console.log('Read file successfully ', read)
//     } catch (error) {
//         console.log('Error reading file ', error)
//     }
// }
// readFile()


// async function appendFile(){
//     try {
//         await fs.appendFile('async.txt', '\nThis is new text added to async.txt file')
//         console.log('Append file successfully ')
//     } catch (error) {
//         console.log('Error append file ', error)
//     }
// }
// appendFile()


// async function unlinkFile() {
//     try {
//         await fs.unlink('del.txt')
//         console.log('File deleted successfully')
//     } catch (error) {
//         console.log('Error unlink file ', error)
//     }
// }
// unlinkFile()



// CRUD file example 
// async function crudFile(){
//     try {
//         // create/overwrite file 
//         await fs.writeFile('hello.txt', 'Welcome to Nodejs module')
//         console.log('File created successfully')

//         // read file 
//         let read = await fs.readFile('hello.txt', 'utf-8')
//         console.log('Read file successfully ', read)

//         // append file 
//         await fs.appendFile('hello.txt', '\nThis is new text added to async text file')
//         console.log('Append file successfully')
//         let read1 = await fs.readFile('hello.txt', 'utf-8')
//         console.log('Read file successfully ', read1)

//         // delete file 
//         await fs.unlink('hello.txt')
//         console.log('Delete file successfully')

        
//     } catch (error) {
//         console.log('Error crud file ', error)
//     }
// }
// crudFile()
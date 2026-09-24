// In this section we are going to learn about FileSystem 
// Using File System, we can -> Create file, Read file, Write file, update file and Delete file
// Most important thing is as Nodejs is build in module so, don't need to install this



import fs, { read } from "node:fs"



// This is used to create/write new file 
// fs.writeFileSync('text.txt','Hello from Node.js')
// console.log('File create successfully')


// This is used to read the file 
// let readFile = fs.readFileSync('text.txt','utf-8')
// console.log(readFile)


// File mein content overwrite karna
// fs.writeFileSync('text.txt','This text will overwrite the existing text.')
// console.log('text updated')


// Add new text to existing file 
// fs.appendFileSync('text.txt', '\nWelcome to Node.js learning.')
// console.log('text added successfully.')


// Delete file 
// fs.unlinkSync('sample.txt')
// console.log('file deleted')
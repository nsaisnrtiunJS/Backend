// In this section we are going to learn about FileSystem 
// Using File System, we can -> Create file, Read file, Write file, update file and Delete file
// Most important thing is as Nodejs is build in module so, don't need to install this



import fs, { read } from "node:fs"



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
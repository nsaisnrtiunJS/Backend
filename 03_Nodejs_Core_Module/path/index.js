// In this section we are going to learn about 'path'
// 'path' used to safely work with files and folder 

// In real MERN project, it is very useful -> 
// 01. file / folder access karenge
// 02. images upload karenge 
// 03. files path generate karenge 
// 04. project directories ke sath kaam karenge 


import path from 'node:path'

// used to join file path / path.join() automatically correct path separator use karta he
let filePath = path.join('users', 'data', 'user.txt')
console.log(filePath)


// path.basename() it will return basename of the file or kisi folder ka file name nikalta he
let baseName = path.basename(filePath)
console.log(baseName)


//path.dirname() it will return any path's folder name
let dirname = path.dirname(filePath)
console.log(dirname)


//path.extname() it will return file extension name
let extname = path.extname(filePath)
console.log(extname)


//path.parse() it will break path into multiple parts (It will return root, dir, base, extension, filename)
let mulParts = path.parse(filePath)
console.log(mulParts)
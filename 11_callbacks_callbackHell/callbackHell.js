// In this section I learn callback and callback hell 


// This is a callback function example 
// function greet(name, callback){
//     console.log(`Hello, ${name}`)
//     callback()
// }

// function callMe(){
//     console.log('This is a callback function.')
// }
// greet('Sam', callMe)





// import fs from 'node:fs'

//This is also a callback function 
// fs.readFile('text1.txt', 'utf-8', function (err, data){
//     if(err) console.log('Error', err)
//         console.log('Data : ', data)
// })





// Let's see Callback Hell function in Node.js 

// fs.readFile('text1.txt', 'utf-8', function (err, data1) {
//     if (err) console.log("Error : ", err)
//     fs.readFile('text2.txt', 'utf-8', function (err, data2) {
//         if (err) console.log("Error : ", err)
//         fs.readFile('text3.txt', "utf-8", function (err, data3) {
//             if (err) console.log("Error : ", err)
//             fs.readFile('text4.txt', 'utf-8', function (err, data4) {
//                 if (err) console.log("Error : ", err)
//                 console.log(data1)
//                 console.log(data2)
//                 console.log(data3)
//                 console.log(data4)
//             })
//         })
//     })
// })








import fs from 'node:fs/promises'

// async-await function in Node.js
async function readFile(){
    try {
        const data1 = await fs.readFile('text1.txt', 'utf-8')
        const data2 = await fs.readFile('text2.txt', 'utf-8')
        const data3 = await fs.readFile('text3.txt', 'utf-8')
        const data4 = await fs.readFile('text4.txt', 'utf-8')
        console.log(`Data1 : ${data1}`)
        console.log(`Data2 : ${data2}`)
        console.log(`Data3 : ${data3}`)
        console.log(`Data4 : ${data4}`)
    } catch (error) {
        console.log(`Error file read : ${error}`)
    }
}

readFile()
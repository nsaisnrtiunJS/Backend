// In this section I will learn, what is http and https. also learn about their difference 


//http server create
// import http from 'node:http'

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type' : 'text/html'})
//     res.end(`<h1>Hello world from Node.js`)
// })

// server.listen(3000, () => {
//     console.log('Server is listing on port http://localhost:3000')
// })






// https server create 
import https from 'node:https'
import fs from 'node:fs'

const options = {
    key : fs.readFileSync('key.pem'),
    cert : fs.readFileSync('cert.pem')
}

const server = https.createServer(options, (req,res) => {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.end(`<h1>Hello from Node.js https module`)
})

server.listen(3000, () => {
    console.log('Server is listing on port https://localhost:3000')
})
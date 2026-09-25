// In this section we are going to learn about http module 
// http is Node.js build in module which is used to create http server 

// using http -> 
// 01. Create server ,
// 02. Receive client requests,
// 03. Sent response,
// 04. handle different type of URL's 


import http from 'node:http'
import path from 'node:path'



const server = http.createServer((req,res) => {
    console.log(req.method)

    if(req.url === '/'){
        res.end('Welcome to Home page')
    }
    else if(req.url === '/about'){
        res.end('This is About page')
    }
    else if(req.url === '/contact'){
        res.end('Contact page')
    }
    else if(req.url === '/products'){
        res.end('Products page')
    }
    else {
        req.statusCode = 404
        res.end('Page not Found')
    }
})

server.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000')
})


// here req -> request is client/browser se jo information ata he
// here res -> response is server client ko jo response bhejta he 
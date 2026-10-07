import http from 'node:http'


// This is a quit simple server which I have created 

// const server = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type' : 'text/html'})
//     res.write('<h1>Hello from Node.js</h1>')
//     res.write('<p>There is no way to skip backend because I cannot do anything without coding using coding I can fullfil my all the <em>dreams</em> yesss all the dreams. </p>')
//     res.write('<h2>This is another heading.</h2>')
//     res.end('This is my first Node.js server.')
// })

// server.listen(3000, () => {
//     console.log('Server is listing on port http://localhost:3000')
// })







const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, {"content-type" : 'text/html'})
        res.write('<h1>Home</h1>')
        res.write('<p>This is a Home page</p>')
        res.end()
    } else if(req.url === '/about'){
        res.writeHead(200, {"content-type" : 'text/html'})
        res.write('<h1>About</h1>')
        res.write('<p>This is a About page</p>')
        res.end()
    } else if(req.url === '/contact'){
        res.writeHead(200, {"content-type" : 'text/html'})
        res.write('<h1>Contact</h1>')
        res.write('<p>This is a contact page.</h1>')
        res.end()
    } else{
        res.writeHead(404, {"content-type": 'text/html'})
        res.statusCode = 404
        res.write('<h1>404 Not Found </h1>  <p>The page you are looking for does not exist </p>')
        res.end()
    }
})


server.listen(3000, () => {
    console.log('Server is listing on port http://localhost:3000')
})
import http from 'node:http'
const age = 24;

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-type' : 'text/html'})

    res.write(`
        <DOCTYPE html>
            <html>
                <head>
                    <title>Home page</title>
                </head>
                <body>
                    <h1>My age is ${age}</h1>
                    <p>Date : ${new Date()}</p>
                    <p>Refresh to see age changes after modify</p>
                </body>
            </html>
        `)

        res.end()
})

server.listen(3000, () => {
    console.log('Server is listing on http://localhost:3000')
})

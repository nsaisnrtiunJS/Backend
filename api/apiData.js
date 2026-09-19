import http from 'node:http'

const apiData = [
    {
        id : 1,
        name : 'Sam',
        age : 21,
        email : 'user@gmail.com'
    },
    {
        id : 2,
        name : 'Harry',
        age : 31,
        email : 'h@gmail.com'
    },
    {
        id : 3,
        name : 'John',
        age : 23,
        email : 'john@gmail.com'
    },
    {
        id : 4,
        name : 'Sarah',
        age : 29,
        email : 'sar@gmail.com'
    }
]


const server = http.createServer((req,res) => {
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(apiData))
    res.end()
})

server.listen(3000, () => {
    console.log('Server is listing on http://localhost:3000')
})
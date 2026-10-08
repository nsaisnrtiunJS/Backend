// In this section I learn how to make API and I will test it.


import http from 'node:http'

//Dummy API
const userData = [
    {
        id : 1,
        name : 'John',
        age : 31,
        email : 'john@gmail.com'
    },
    {
        id : 2,
        name : 'Sam',
        age : 25,
        email : 'sam@gmail.com'
    },
    {
        id : 3,
        name : 'Diya',
        age : 24,
        email : 'diya@gmail.com'
    },
    {
        id : 4,
        name : "Sarah",
        age : 41,
        email : 'sara@gmail.com'
    },
    {
        id : 5,
        name : "Riya",
        age : 26,
        email : 'riya@gmail.com'
    }, 
    {
        id : 6,
        name : 'Haley',
        age : 42,
        email : 'haley@gmail.com'
    }
]


const server = http.createServer((req,res) => {
    res.setHeader('Content-type', 'application/json')
    res.write(JSON.stringify(userData))
    res.end()
})

server.listen(3000, () => {
    console.log('Server is listing on port http://localhost:3000')
})
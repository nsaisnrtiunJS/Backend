import express from 'express';

const app = express()

app.get('/', (req,res) => {
    res.send('Hello Express.js and this is a home page too')
})

app.get('/about', (req,res) => {
    res.send('About page')
})

app.get('/product', (req,res) => {
    res.send('Product page')
})

app.get('/users', (req,res) => {
    res.send('Users page')
})


app.listen(3000, () => {
    console.log('Server listing on http://localhost:3000')
})
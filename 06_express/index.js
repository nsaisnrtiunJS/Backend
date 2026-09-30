import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('Hello from Express.js home page.')
})

app.get('/about', (req,res) => {
    res.send('This is an about page.')
})

app.get('/products', (req,res) => {
    res.send('This is a products page.')
})

app.get('/users', (req,res) =>{
    res.send("This is a users page.")
})

app.use((req,res) => {
    res.status(404).send('Page not Found')
})

app.listen(3000, () => {
    console.log('Server is listing on port http://localhost:3000')
})
// In this section I am going to learn about how to fetch data from APIs in Node.js 


// Fetching data from Node.js using http  
// import https from 'node:https'

// https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
//     let data = ''

//     res.on('data', (chunk) => {
//         data += chunk;
//     })

//     res.on('end', () => {
//         console.log('API Response ', JSON.parse(data))
//     }).on('error', (err) => {
//         console.log('Fetching APIs error ', err.message)
//     })
// })




// Fetching data from Node.js using 'node-fetch' (This is a modern way)
// import fetch from 'node-fetch'

// async function fetchData(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json()
//         console.log('API response : ', data)
//     } catch (error) {
//         console.log('Error fetching data : ', error)
//     }
// }
// fetchData()




// Fetching data from Node.js using axios (Most popular way to fetch APIs)
import axios from 'axios'
import { error } from 'node:console';

async function fetchData() {
    try {
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        const response2 = await axios.get('https://official-joke-api.appspot.com/random_joke')
        const response3 = await axios.get('https://randomuser.me/api/')
        console.log('API response : ', response1.data)
        console.log('API jokes : ', response2.data)
        console.log('API random : ', response3.data)
    } catch (error) {
        console.log('Error fetching data : ', error)
    }
}
fetchData()
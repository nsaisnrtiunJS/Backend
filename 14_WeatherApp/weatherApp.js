// In this lession I am going to build a Weather App where users can see the forecast update of their current city 

import axios from 'axios'
import readline from 'readline'

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question('Enter your city : ', async (city) => {
    const apiKey = 'Enter your API Key' //Replace with API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try {
        
        const res = await axios.get(url)
        console.log(`Temperature in ${city} is ${res.data.main.temp}\u00b0C and Feels like ${res.data.main.feels_like}\u00b0C`)
        console.log(`Weather description and icon in Malda is ${res.data.weather[0].description} and ${res.data.weather[0].icon}`)

    } catch (error) {
        console.error('Error fetching API ', error.message)
    } finally{
        rl.close()
    }
})
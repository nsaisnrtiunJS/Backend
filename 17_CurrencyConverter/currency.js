import axios from 'axios'
import { error } from 'console'
import { stdin, stdout } from 'process'
import readline from 'readline'

const rl = readline.createInterface({
    input : stdin,
    output : stdout
})

const api = 'https://open.er-api.com/v6/latest'


async function currencyConverter(from, to, amount){
    try {
        const res = await axios.get(`${api}/${from}`) // store res and add base code
        const rates = res.data.rates; // store rates which is defined in API

// if rates is not in upperCase then throw error
        if(!rates[to.toUpperCase()]){
            throw new error(`Currency code ${to} not found`)
        }

        // calculate amount and store that in a variable
        const converted = (amount * rates[to.toUpperCase()]).toFixed(2)
        console.log(`Your converted amount is ${converted}`)

    } catch (error) {
        // throw error
        console.error(`Error fetching to currency converted ${error.message}`)
    }
}

// ask users to give accurate data 
rl.question('Enter currency base code, like(USD): ', (from) => {
    rl.question('Enter from where you want to convert: ', (to) => {
        rl.question(`Enter amount: `, (amount)=>{
            currencyConverter(from, to, amount)
        })
    })
})
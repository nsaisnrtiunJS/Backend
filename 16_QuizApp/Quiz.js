import fs from 'fs'
import readline from 'readline'
import chalk from 'chalk'
import { stdin, stdout } from 'process'


// access the questions 
const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'))


// CLI request 
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})


// Quiz logic 
let score = 0;
let index = 0;


console.log(chalk.yellow.bold(`Welcome to The Quiz App`))

function askQuestion() {
    const q = questions[index]
    if (index < questions.length) {
        console.log(chalk.blue(`Q${index + 1}. ${q.question}`))  //getting questions
        q.options.forEach((opt, idx) => { //getting options
            console.log(chalk.green(`${idx + 1}. ${opt}`))
        })


        rl.question(chalk.cyan(`Enter answer number: `), (ans) => {
            const userAnswer = q.options[parseInt(ans) - 1]
            if (userAnswer === q.answer) {
                console.log(chalk.cyan.bold(`Correct!`))
                score++;
            } else {
                console.log(chalk.red.bold(`Wrong!`))
                console.log(chalk.red(`The answer was - ${q.answer}`))
            }
            index++;
            askQuestion()
        })

    } else {
        console.log(chalk.yellow.bold(`Completed!`))
        console.log(chalk.yellow(`Your scores are ${score}/${questions.length}`))
    }

}

askQuestion()
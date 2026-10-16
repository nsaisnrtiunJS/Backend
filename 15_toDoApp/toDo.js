// In this lession I am going to build fully functional To-Do App 

import fs from 'fs'
import { data } from 'react-router-dom'
import readline from 'readline'

const FILE = 'task.json'

if (!fs.existsSync(FILE)) {   // agar task.json file created nehi ne to new create karo 
    fs.writeFileSync(FILE, JSON.stringify([]))
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const loadTasks = () => {  // loadTasks, tasks read karne ke liye
    const data = fs.readFileSync(FILE, 'utf-8')
    return JSON.parse(data)
}

const saveTasks = (tasks) => {  // isme tasks save hoga 
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2))
}

const showMenu = () => {  // ye menu he, jo show hoga 
    console.log(`\n======= Todo List =======\n`)
    console.log(`1. Add Task `)
    console.log(`2. View Task `)
    console.log(`3. Delete Task `)
    console.log(`4. Exit....\n`)
    rl.question('Enter a number : ', handleMenu)  // jo vi number enter hoga wo handle menu handle karega 
}

const handleMenu = (options) => {
    switch (options) {
        case '1':  // agar user 1 enter kare to task add hoga
            rl.question('Enter a task: ', async (task) => {  // rl se task add hoga
                const tasks = loadTasks()  // first loadTask ko ek variable me save kar liya
                tasks.push({ task, completed: false })  // push task to tasks with boolean value of completed
                saveTasks(tasks) // tasks ko saveTasks me push kar diya jo ki list items ko update karega
                console.log(`Task added successfully`)
                showMenu() // task add karne ke bad firse showMenu() call kiya
            })
            break;


        case '2':
            const tasks = loadTasks()  //loadTask ko ek variable me save kiya
            if (tasks.length === 0) { //agar tasks length 0 he to 'No tasks' likhdo
                console.log(`No tasks found! `)
            } else {
                //agr task he to fir use sequence wise save kardo for example -> 1. coding
                tasks.forEach((t, index) => {
                    console.log(`${index + 1}. ${t.task}`)
                })
            }
            showMenu() //firse showMenu() ko call kardo 
            break;

            
        case '3':
            const allTasks = loadTasks()  //firse loadTasks ko ek variable me save kar diya
            if (allTasks.length === 0) {
                console.log(`No task to delete! `)  // agar tasks length 0 he, to fir kya hi delete karna
                showMenu() // call showMenu()
                return;
            }
            //agar task he to tasks pe forEach lagake, index and task print karo
            console.log(`Your Tasks: `)
            allTasks.forEach((t, index) => {
                console.log(`${index + 1}. ${t.task}`)
            })
            //rl me number mango jo task delt karni he
            rl.question('Enter task number to delete: ', (num) => {
                //User jo number enter karega use parseInt se number me convert karke minus 1(-1) karo
                const index = parseInt(num) - 1;
                //agar index 0 se allTasks.length se kam he to if ke andar ka code execute karo
                if (index >= 0 && index < allTasks.length) {
                    allTasks.splice(index, 1)  //fir splice() method ke through, user jo number enter kiya usko delete karo 
                    saveTasks(allTasks) //then firse saveTasks me allTasks ko push karo taki ToDo list update ho sake
                    console.log(`Task deleted successfully`)
                } else {
                    console.log(`Invalid task number! `)  //Else invalid task number.
                }
                showMenu() // then again showMenu()
            })
            break;


        case '4':
            console.log('Existing...')  //After that close rl to exit
            rl.close()
            break;
            

        default:
            console.log(`Invalid Option. Try again...`) //Finally agar user Invalid number enter kiya to showMenu() call karo
            showMenu()
    }
}
showMenu()  // First time render show menu
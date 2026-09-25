// This section is all about event 

import EventEmitter from 'node:events'
const customEvent = new EventEmitter()

// customEvent.on('response', (name, userId) => {
//     console.log(`Response comes from user:${name} with id:${userId}`)
// })
// customEvent.emit('response', 'Sam', 25)
// customEvent.emit('response', 'Sam', 25)
// customEvent.emit('response', 'Sam', 25) // jitni bar listner lagega, utna bar event fire hoga





// Event remove listner  
const callbackEvent = (name,age) => {
    console.log(`Hello, ${name}, you are ${age} years old.`)
}

customEvent.on('removeListner', callbackEvent)
customEvent.removeListener('removeListner', callbackEvent)
customEvent.emit('removeListner', 'Sam', 25)
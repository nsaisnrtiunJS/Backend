import path from 'node:path'


// "path node  module"

const filepath = path.join('uploads', 'images', 'profile.jpg')

console.log('filepath : ', filepath)
console.log('basename : ', path.basename(filepath))
console.log('dir name : ', path.dirname(filepath))
console.log('extension : ', path.extname(filepath))
console.log('parse : ', path.parse(filepath))
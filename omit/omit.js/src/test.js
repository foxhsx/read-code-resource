const omit = require('../../ts-omit/dist/cjs/index').default
const obj = { name: 'test', age: 30 }
console.log(omit(obj, ['name']));
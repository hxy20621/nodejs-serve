import curry from './curry'

let isNumber:Function = curry((value)=> Object.prototype.toString.call(value) === `[object, Number]`) // [object Number]

export default isNumber

let isNumber:Function = (value:number)=> Object.prototype.toString.call(value) === `[object Number]` // [object Number]

export default isNumber
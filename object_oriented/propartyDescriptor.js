var person = {
    name: 'ismail hossain'
}

var Descriptor = Object.getOwnPropertyDescriptor(person, 'name')

console.log(Descriptor)

// this is writable, this is write
//this is enumerable this is lenght cunte
//this is configurable it's overwrite and remove

var baseObj = Object.getPrototypeOf(person)

var descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')

console.log(descriptor)

Object.defineProperty(person, 'name',{
    writable : false,
    enumerable : false,
    configurable : false
})

// return blank  object because enumerable : false,
console.log(Object.keys(person))
var arr = []
Array.prototype.myMethod = function(){}

console.log(arr)

var n = []
console.log(n)
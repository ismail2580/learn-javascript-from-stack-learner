// String concat methods

var a = "I am";
var b = "Ismail Hossain";

console.log(a.concat(" ",b)) //return I am Ismail Hossain 


// substr() methods 

console.log(b.substr(0,7)) //return ismail


// charAt() methods
console.log(b.charAt(7)) //return H


// startsWith() methods
console.log(b.startsWith('I')) //return true


// endsWith() methods
console.log(b.endsWith('n')) //return true


console.log(b.toUpperCase())
console.log(b.toLowerCase())

// trim() methods 
console.log('           ismail      ' .trim())// return ismail spase remove

console.log(b.split(' ')) // ' ' '.' ','' '|' worad Search array ['ismai', 'hossain']
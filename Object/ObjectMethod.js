// Object Method

var obj = {
  f: 10,
  w: 30,
  e: 13,
  a: 33,
};

console.log(Object.keys(obj)) //keys like  proparty return String array proparty [ 'f', 'w', 'e', 'a' ]
console.log(Object.values(obj)) //return full Object all values [ 10, 30, 13, 33 ]
console.log(Object.entries(obj)) // return multi dymantional Array Proparty and Values [ [ 'f', 10 ], [ 'w', 30 ], [ 'e', 13 ], [ 'a', 33 ] ]

var obj2 = Object.assign({}, obj)
obj2.w = 100

console.log(obj2) //return more same Object updated any values { f: 10, w: 100, e: 13, a: 33 }
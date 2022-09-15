// Object Iterate / access

var obj = { 
    a : 10,
    b : 40,
    d : 80,
    f : 100  
}
console.log('f' in obj) //return true f in Object

for(var i in obj){
    // console.log(i) //this is return object Porprty
    console.log(i+ ": " + obj[i]) //this is return object Value
}
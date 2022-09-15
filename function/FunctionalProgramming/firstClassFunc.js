// first class function


function add(a, b){
    return a+b
}
// 1.  A function can be stored in a variable
var sum = add
console.log(sum(10,30))
console.log(typeof sum) //function

// 2.  A function can be stored in a Array
var arr = [];
arr.push(add)
console.log(arr)
console.log(arr[0](10,20))

// 3.  A function can be stored in a Object
var obj = {
    sum:add
}
console.log(obj)
console.log(obj.sum(20,40))

// 4.   we can create function as need 
setTimeout(function(){
    console.log('I\'m set Time out')
},3000)

// 5.   we can pass function as an argument 

// 6.   we can return function from another function


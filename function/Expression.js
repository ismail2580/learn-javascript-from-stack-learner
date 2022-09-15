
var anonymous = function(a,b){
    return a+b
}
// console.log(anonymous(20,30))

setTimeout(function(){
    console.log('i will call after 5 second')
},5000)

var anonymousFunc = anonymous;
console.log(anonymousFunc(5,100))
function sample(a,b,callBack){
    var c = a + b;
    var d = a - b;
    var result = callBack(c, d)
    return result
}
// this +
function sum (a, b){
    return a+b
}
// this +
var result = sample(5, 8, sum)
console.log(result)

// this -
var  result2 = sample(5, 8, function(a, b){
    return a - b
})
console.log(result2)

// this *
var result3 = sample(5, 8, function(f,e){
    return f*e
})
console.log(result3)
// this /
var result4 = sample(5, 8, function(ismail, hosssain){
    return ismail / hosssain
})

console.log(result4)
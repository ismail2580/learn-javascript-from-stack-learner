var arr = [1, 2, 3, 4, 5, ]

// this map methods()

// var sqr = arr.map(function(value){
//     // return Math.random()*100
//     return value*value
// })
// console.log(arr)//return min Array 
// console.log(sqr)//return min Array same create new array but not change 


// this is manually map() methods

// 1st way 

// function myMap(arr){
//     var newArray = [] 
//     for(var i = 0; i < arr.length; i++){
//         var temp = arr[i] * arr[i]
//         newArray.push(temp)
//     }
//     return newArray
// }
// console.log(myMap(arr))


// 2nd way callback function pass
function myMap(arr, callBack){
    var newArray = [] 
    for(var i = 0; i < arr.length; i++){
        var temp = callBack(arr[i], i, arr)
        newArray.push(temp)
    }
    return newArray
}
var sqrResult = myMap(arr, function(value){
    return value * value * value
})
var mten = myMap(arr, function(value){
    return value * 10 
})
console.log(arr)
console.log(sqrResult)
console.log(mten)
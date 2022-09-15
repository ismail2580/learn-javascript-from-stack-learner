function person(name, email){
    return{
        name:name,
        email:email
    }
}
var p1 = person('Ismail Hossain', 'ismailsomrat2580@gmai.com')
var p2 = person('Hossain ismail', 'hossainismail2580@gmail.com')
console.log(p1)
console.log(p2)

function sumOfArray(arr){
    var sum = 0; 
    for ( var i = 0; i< arr.length; i++){
        sum+=Arr[i]
    }
//    console.log(sum) output undefined
    return sum //output acuret not undefined return 173
}
var Arr = [2,3,4,67,8,89,]

var result = sumOfArray(Arr)

console.log(result)

function add(a, b){
    return a+b;
}
function manipulate(a, b, func){
    var c = a+b;
    var d = a+b;
    // function multiply() {
    //     var  m = func(a, b)
    //     return c*d*m
    // }
    // return multiply

    // this function return result same
    return function() {
        var  m = func(a, b)
        return c*d*m
    }
}
var multiply = manipulate(2, 4, add) //add function pass

console.log(multiply) //return this is anonymous function
console.log(multiply())
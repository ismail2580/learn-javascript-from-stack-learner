// Pass By Value vs Pass By Reference
// call By Value vs call By Reference

var n = 10;

function myFunc(n) {
  n = 100;
  console.log(n)
}
myFunc(n)

console.log(n) //it's not change Value


var obj = {
    a : 20,
    b : 34
}
function changeMe(obj){
    obj.a = obj.a +29;
    obj.b = obj.b + 50
    console.log(obj)
}

changeMe(obj)

console.log(obj) //it's change Value
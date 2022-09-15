
// this is pure function
function sqr(n){
    return n*n
}
console.log(sqr(3))
console.log(sqr(5))



// this not pure function it's change variavle value
var m = 20

function change(){
    m = 100
}
change(m)
console.log(m)

var point = {
    x: 230,
    y:40
}
function printPoint(){
    point.x = 10
    point.y = 30
}
printPoint(point)
console.log(point)
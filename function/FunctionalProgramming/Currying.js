function add(a, b, c) {
  return a + b + c;
}
console.log(add(5, 10, 15)); //return 30

function Currying(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
var Result =Currying(5)(10)(15)//return 30 same but this is Currying 
console.log(Result)